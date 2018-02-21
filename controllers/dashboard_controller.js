"use strict";
define(['app','api'], function (app) {
    app.register.controller('DashboardController',['$scope','$rootScope','api', function ($scope,$rootScope,api) {
		$scope.initializeController = function(){
			alert(1);
		};
	 }]);
});
