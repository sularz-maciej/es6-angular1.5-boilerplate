import angular from 'angular';

import Config from './default.config'

const ModuleRequires = [];

// Create the module where our functionality can attach to
export default angular
  .module( 'app.layouts.default', ModuleRequires )
  .config( Config );
