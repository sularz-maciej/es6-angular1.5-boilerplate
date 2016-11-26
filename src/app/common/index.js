import angular from 'angular';

// Import our features
import Services   from './services';
import Navbar     from './navbar';
import Copyrights from './copyrights';

let dependencies = [
  Services.name,
  Navbar.name,
  Copyrights.name
];

// Create the module and export it's name.
export default angular.module( 'app.common', dependencies );
