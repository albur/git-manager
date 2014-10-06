/* global L */
/* global FB */
(function () {
	'use strict';

// Add underscore as an angular module.
	angular.module('lodash', []).factory('_', function () {
		return window._;
	});

	/* Module initialization */
	angular.module('ga.services', []);
	angular.module('ga.controllers', []);
	angular.module('ga.resources', []);

	angular.module('gitUiApp', [
		'ngResource',
		'ngRoute',
		'ui.router',
		'ga.controllers',
		'ga.services',
		'ga.resources'
	]);

	// Configure this to point to a live service (remember CORS though)
	angular.module('gitUiApp').value('apiHost', '');

	angular.module('gitUiApp').run(function ($rootScope) {

		$rootScope.$on('gitui:update', function (s) {
			$rootScope.$broadcast('gitui:updateNavigation');
		});

		$rootScope.$on('gitui:updating', function (s) {
			$('#reload').modal('show')
		});

		$rootScope.$on('gitui:updated', function (s) {
			$('#reload').modal('hide');
		});

		/* Initializer */
	});

	angular.module('gitUiApp').config(function ($routeProvider, $locationProvider) {
		$routeProvider
				.when('/', {
					templateUrl: 'js/partials/dashboard.html',
					controller: 'DashboardController'
				})
				.when('/repo/:reponame', {
					templateUrl: 'js/partials/repo-view.html',
					controller: 'RepoViewController',
					resolve: {
						commits: function ($route, Commit) {
							return Commit.query({repo: $route.current.params.reponame});
						}
					}
				})
				.otherwise({ redirectTo: '/' });
		// configure html5 to get links working on jsfiddle
		$locationProvider.html5Mode(true);
	});

}());
