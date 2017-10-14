var App = angular.module("App", ["ngRoute","ngResource"]);

App.config(function ($routeProvider) {
  $routeProvider
    .when('/view1', {
         templateUrl: ''
    })
    .when('/view2', {
         templateUrl: ''
    })
    .otherwise({redirectTo : 'view1'});
});
