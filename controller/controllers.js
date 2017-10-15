App.run(function($rootScope) {
    $rootScope.deneme = 'Hello World!';
	
	$rootScope.drcontent = [{'key':'01','value':'Adana'},{'key':'06','value':'Ankara'},{'key':'57','value':'Sinop'}];
	$rootScope.currentdr = {'key':'','value':'Seçiniz'};
	
	$rootScope.drcontent2 = [{'key':'01','value':'Ocak'},{'key':'02','value':'Şubat'},{'key':'03','value':'Mart'}];
	$rootScope.currentdr2 = {'key':'','value':'Seçiniz'};
});

App.controller("MyController", ["$scope","$rootScope", function($scope,$rootScope){
	$rootScope.deneme = 'Hello Main World!';
}]);

App.controller("CreateController",["$scope","$rootScope","$routeParams","myServices", function ($scope,$rootScope,$routeParams,myServices) {
    $scope.msg = "Create " + $routeParams.createPage;
	$rootScope.deneme = 'Hello Create World!';
	myServices.setCookie('cookie', "cookie trial");
	if(myServices.isNotEmpty(myServices.getCookie('cookie'))){
		$scope.msg2 = myServices.getCookie('cookie');
	}
}]);

App.controller("ReportController",["$scope","$rootScope","$routeParams",'update', function ($scope,$rootScope,$routeParams,update) {
    $scope.msg = "Report " + $routeParams.reportPage;
	$rootScope.deneme = 'Hello Report World!';
	$scope.msg2 = update.get();
}]);