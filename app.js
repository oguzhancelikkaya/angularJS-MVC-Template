var App = angular.module("App", ["ngRoute"]);

App.config(function($routeProvider) {
    $routeProvider
    .when("/create/:createPage", {
        templateUrl : "view/create.html",
        controller : "CreateController"
    })
    .when("/report/:reportPage", {
        templateUrl : "view/report.html",
        controller : "ReportController"
    });
});

