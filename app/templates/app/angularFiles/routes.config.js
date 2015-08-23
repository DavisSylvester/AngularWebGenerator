(function () {
    'use strict';

    angular
            .module('PGF.DemoApp')
            .config(routeConfig);


    function routeConfig($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
                .state('index', {
                    url: '',
                    abstract: true,
                    controller: 'MainController',
                    views: {
                        'nav': {
                            templateUrl: 'views/navagation/index.html'
                        },
                        'maincontainer': {
                            templateUrl: 'views/shared/index.html'
                        }
                    }
                });
                
        $stateProvider
            .state('index.index', {
                url: '/',
                templateUrl: 'views/shared/dashboard.html'

            });

        $locationProvider.html5Mode(true);

                // Interceptors Go Here
//        $httpProvider.interceptors.push('RequestInterceptorService');
//        $httpProvider.interceptors.push('PostInterceptorService');
    }

})();




