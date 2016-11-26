import angular from 'angular';

// Import our components.
import Home  from './home';
import About from './about';

let dependencies = [
    Home.name,
    About.name
];

// Creates the module and exports it's name;
export default angular.module('app.components', dependencies);
