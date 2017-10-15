App.run(function($rootScope) {
    $rootScope.deneme = 'Hello World!';
});
App.controller("MyController", ["$scope","$rootScope", function($scope,$rootScope){
	$rootScope.deneme = 'Hello Main World!';
}]);
App.controller("CreateController",["$scope","$rootScope","$routeParams", function ($scope,$rootScope,$routeParams) {
    $scope.msg = "Create " + $routeParams.createPage;
	$rootScope.deneme = 'Hello Create World!';

}]);
App.controller("ReportController",["$scope","$rootScope","$routeParams", function ($scope,$rootScope,$routeParams) {
    $scope.msg = "Report " + $routeParams.reportPage;
	$rootScope.deneme = 'Hello Report World!';
}]);