(function (ng) {

    'use strict';

    var app = angular.module('app');

    app.run(['$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
      }]);


    app.config(['$httpProvider','$stateProvider','$urlRouterProvider',function ($httpProvider, $stateProvider, $urlRouterProvider) {

      delete $httpProvider.defaults.headers.common['X-Requested-With'];

      $urlRouterProvider.otherwise("/");

      // Now set up the states
      $stateProvider
        .state('home', {
          url: "/",
          templateUrl: "app/components/home/views/indexView.html",
          controller: "HomeCtrl"
        })
    }]);

}(angular));