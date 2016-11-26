import angular from 'angular';

// Import our features
import Default from './default';

let dependencies = [
  Default.name
];

// Create the module and export it's name.
export default angular.module( 'app.layouts', dependencies );
