function DefaultConfig($httpProvider, $stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
  .state( 'default', {
    abstract   : true,
    templateUrl: 'layouts/default/default.html'
  });
}

export default DefaultConfig;
