/**
 * Created by nwalker on 4/25/17.
 */

(function(){
    'use strict';

    angular
        .module('app', ['ui.router', 'ui.bootstrap'])
        .config(StateConfig);

    function StateConfig($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            /*.state('dashboard',{
                abstract: true,
                url:'/',
                templateUrl:'/views/index.html',
                controllerAs: 'vm',
                controller: 'homeCtrl'
            })*/

            .state('home',{
                url: '/home',
                templateUrl: "/views/home.html",
                controller: 'homeCtrl',
                controllerAs: 'vm'
            })

            .state('about',{
                url: '/about',
                templateUrl: '/views/about.html',
                controllerAs: 'vm',
                controller: 'aboutCtrl'
            })

            .state('documentation',{
                url: '/documentation',
                templateUrl: '/views/documentation.html',
                controllerAs: 'vm',
                controller: 'documentationCtrl'
            });
    }

})();