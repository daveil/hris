"use strict";
define(['app','api'], function (app) {
    app.register.controller('DashboardController',['$scope','$rootScope','api', function ($scope,$rootScope,api) {
		$scope.initializeController = function(){
			$rootScope.__MODULE_NAME = 'Profile';
			loadHistory();
		};
		
		$scope.filterHistory = function(){
			var filter = {keyword:'sick', fields:['description']};
			loadHistory(filter);
		}
		
		function loadHistory(filter){
			api.GET('history',filter,function success(response){
				$scope.History =  response.data;
				
			});
		
		}
	 }]);
});
