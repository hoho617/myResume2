// 总路由模块
angular.module('route', [
        'ionic',
        'guidePage.route',
        'home.route',
        'tabs.route',
        'project.route',
        'projectList.route'
    ])
    .config(function($urlRouterProvider) {
        $urlRouterProvider.otherwise('guidePage');

    });
