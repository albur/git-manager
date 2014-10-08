(function () {
	'use strict';
	angular.module('ga.controllers')
			.controller('NavigationController', ['$scope', '$rootScope', '$element', 'Repo', '$location',
				function ($scope, $rootScope, el, Repo, $location) {


					$scope.items = [];

					$scope.isActive = function (item) {
						return item.path === $location.path();
					};

					$scope.updateNavigation = function () {
						console.log("Update navigation called");
						$scope.items = [];
						Repo.query(function (s) {
							_.each(s, function (i, j) {
								$scope.items.push({path: '/repo/' + i.name, title: i.name + " (" + i.head + ")"});
								$scope.$emit("gitui:updated");
							});
						});
					};

					$scope.$on('gitui:blockUI', function(){
						console.log("blockUI called");
						$scope.loading = true;
					});

					$scope.$on('gitui:unblockUI', function(){
						console.log("unblockUI called");
						$scope.loading = false;
					});

					$scope.$on('gitui:updateNavigation', $scope.updateNavigation);
					$scope.updateNavigation();

				}]);
}());
