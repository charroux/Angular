'use strict';

var rentControllers = angular.module('rentControllers', []);

rentControllers.controller("rentController", function($scope,$http,$routeParams) {

	$http.get('http://localhost:8080/Angular-master/car').
	  success(function(data, status, headers, config) {
	  	$scope.carsList = data;
	  	$scope.selected = data[0];
	  }).
	  error(function(data, status, headers, config) {
	  });

	$scope.rent = function(selected) {
		$http.delete('http://localhost:8080/Angular-master/car/'+selected.plateNumber).
		  success(function(data, status, headers, config) {
		  	alert('location ok');
		  }).
		  error(function(data, status, headers, config) {
			  alert('erreur');
		  });
	};
        
});
