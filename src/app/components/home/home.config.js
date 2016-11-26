function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state( 'home', {
      url         : '/',
      parent      : 'default',
      title       : 'Home',
      controller  : 'HomeCtrl',
      controllerAs: '$ctrl',
      templateUrl : 'components/home/home.html'
    });
};

export default HomeConfig;
