(function (ng) {

    'use strict';

    var app = angular.module('app');

	app.controller("HomeCtrl", ['$rootScope','$scope','$state','$http','$stateParams', function($rootScope, $scope, $state, $http, $stateParams){

		// DIFINE SCOPE 
		$scope.helloWorld 	= "Hello World!";
	}]);
	
}(angular));