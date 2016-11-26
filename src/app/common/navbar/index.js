import angular    from 'angular';
import uiRouter   from 'angular-ui-router';

// Import module configs.
import Navbar from './navbar.component';

// Dependencies
let dependencies = [uiRouter];

// Create the module and export it's name.
export default angular
    .module( 'app.common.navbar', dependencies )
    .component( 'navbar', Navbar );
