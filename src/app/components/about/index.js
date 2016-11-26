import angular    from 'angular';
import uiRouter   from 'angular-ui-router';

// Import config, controller etc.
import AboutConfig from './about.config';
import AboutCtrl   from './about.controller';

let dependencies = [uiRouter];

// Create the module and export it's name.
export default angular
    .module( 'app.components.about', dependencies )
    .config( AboutConfig )
    .controller( 'AboutCtrl', AboutCtrl );
