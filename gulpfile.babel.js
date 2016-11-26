'use strict';

import babelify      from 'babelify';
import browserify    from 'browserify';
import browserSync   from 'browser-sync';
import gulp          from 'gulp';
import lodash        from 'lodash';
import merge         from 'merge-stream';
import ngAnnotate    from 'browserify-ngannotate';
import notify        from 'gulp-notify';
import path          from 'path';
import rename        from 'gulp-rename';
import source        from 'vinyl-source-stream';
import template      from 'gulp-template';
import templateCache from 'gulp-angular-templatecache';
import uglify        from 'gulp-uglify';

// Our directory names and paths
const dirs = {
    src    : './src',
    app    : './src/app',
    config : './src/app/config',
    build  : './build',
    dist   : './dist'
};

const paths = {
    app      : `${dirs.app}/app.js`,
    sources  : `${dirs.app}/**/*.js`,
    templates: `${dirs.app}/**/*.html`
};

const handleErrors = function( error ) {
  let args = Array.prototype.slice.call( arguments );

  // Send error to notification center with gulp-notify
  notify.onError({
    title  : 'Compile Error',
    message: '<%= error.message %>'
  }).apply( this, args );

  // Keep gulp from hanging on this task
  this.emit( 'end' );
};

gulp.task( 'browserify', ['views'], () => {
  return browserify( paths.app )
    .transform( babelify )
    .transform( ngAnnotate )
    .bundle()
    .on( 'error', handleErrors )
    // Pass desired output filename to vinyl-source-stream
    .pipe( source( 'main.js' ) )
    // Start piping stream to tasks!
    .pipe( gulp.dest( dirs.build ) );
});

gulp.task( 'html', () => {
  return gulp
    .src( `${dirs.src}/index.html` )
    .on( 'error', handleErrors )
    .pipe( gulp.dest( dirs.build ) );
});

gulp.task('views', () => {
  return gulp
    .src( paths.templates )
    .pipe( templateCache( {
        module        : 'app.templates',
        standalone    : true,
        moduleSystem  : 'ES6'
    }))
    .on( 'error', handleErrors )
    .pipe( rename( 'app.templates.js' ) )
    .pipe( gulp.dest( dirs.config ) );
});

// This task is used for building production ready files
gulp.task( 'build', ['html', 'browserify'], () => {
  let html = gulp.src( `${dirs.build}/index.html` )
                 .pipe( gulp.dest( dirs.dist ) );

  let js = gulp.src( `${dirs.build}/main.js` )
               .pipe( uglify() )
               .pipe( gulp.dest( dirs.dist ) );

  return merge( html, js );
});

// Runs when executing gulp command on it's own
gulp.task( 'default', ['html', 'browserify'], () => {

  browserSync.init( [`${dirs.build}/**/**.**`], {
    ui    : { port: 4001 },
    port  : 4000,
    notify: false,
    server: dirs.build
  });

  gulp.watch( 'src/index.html', ['html'] );
  gulp.watch( paths.templates,  ['views'] );
  gulp.watch( paths.sources,    ['browserify'] );
});
