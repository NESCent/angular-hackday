'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
//   'myApp.directives',
//   'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/author_editor', {templateUrl: 'partials/author_editor.html', controller: 'AuthorEditorCtrl'});
  $routeProvider.otherwise({redirectTo: '/author_editor'});
}]);
