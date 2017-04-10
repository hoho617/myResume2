// 选项卡模块
angular.module('tabs.route', [
'tabs.controller'
]).config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('tab', {
            url: '/tab',
            abstract: true,
            templateUrl: 'detail/tabs/tabs.html',
            controller:'TabsController'
        })
    });