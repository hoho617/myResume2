/*引导页路由*/
angular.module("guidePage.route",['guidePage.controller'])
.config(['$stateProvider',function($stateProvider){
	$stateProvider.state("guidePage",{
		url:'/guidePage',
		templateUrl:'detail/guidePage/guidePage.html',
		controller:'GuidePageController'
	})
	}]);
