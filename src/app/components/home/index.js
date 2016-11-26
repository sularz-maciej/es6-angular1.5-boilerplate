import angular    from 'angular';
import uiRouter   from 'angular-ui-router';

// Import config, controller etc.
import HomeConfig from './home.config';
import HomeCtrl   from './home.controller';

let dependencies = [uiRouter];

// Create the module and export it's name.
export default angular
    .module( 'app.components.home', dependencies )
    .config( HomeConfig )
    .controller( 'HomeCtrl', HomeCtrl );
