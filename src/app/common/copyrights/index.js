import angular    from 'angular';
import uiRouter   from 'angular-ui-router';

// Import module configs
import Copyrights from './copyrights.component';

let dependencies = [uiRouter];

// Create the module and export it's name.
export default angular
    .module( 'app.common.copyrights', dependencies )
    .component( 'copyrights', Copyrights );
