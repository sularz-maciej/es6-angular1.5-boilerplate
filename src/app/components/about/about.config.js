function AboutConfig( $stateProvider ) {
  'ngInject';

  $stateProvider
    .state( 'about', {
      url         : '/',
      parent      : 'default',
      title       : 'About',
      controller  : 'AboutCtrl',
      controllerAs: '$ctrl',
      templateUrl : 'components/about/about.html'
    });
};

export default AboutConfig;
