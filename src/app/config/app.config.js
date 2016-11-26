function AppConfig( $locationProvider, $urlRouterProvider ) {
    'ngInject';

    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    // Comment this line to start using the hashbang:
    $locationProvider.html5Mode( true ).hashPrefix( '!' );

    $urlRouterProvider.otherwise( '/' );
}

export default AppConfig;
