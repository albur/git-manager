(function () {
	'use strict';
	angular.module('ga.controllers')
			.controller('RepoViewController', ['$scope', '$rootScope', 'Repo', 'commits', '$routeParams',
				function ($scope, $rootScope, Repo, Commit, routeParams) {
					$scope.reponame = routeParams.reponame;
					$scope._commits = [];
					Commit.$promise.then(function (s) {
						$scope._commits = s;
					});
				}]);

}());
