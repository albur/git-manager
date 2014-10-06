(function () {
	'use strict';
	angular.module('ga.controllers')
			.controller('HeaderController', ['$scope', 'Reload',
				function ($scope, Reload) {
					$scope.reload = function () {
						$scope.$emit("gitui:updating");
						Reload.get().$promise.then(function () {
							$scope.$emit("gitui:update");
						});
					}
				}]);
}());
