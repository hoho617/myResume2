/*项目经验控制器*/
angular.module("project.controller",[])
	.controller("ProjectController",['$scope','$state','$ionicSideMenuDelegate',function($scope,$state,$ionicSideMenuDelegate){
		$scope.toggleLeft = function() {
    		$ionicSideMenuDelegate.toggleLeft();
  		};
 	getProject();
 	
 	// 左侧滑动栏的内容
 	function getProject(){
 		$scope.projects = [
 			{
 			name:'仿京东触屏版',
 			typeNumber:'101'
 			},{
 			name:'微信小程序之豆瓣电影',
 			typeNumber:'102'
 			},{
 			name:'angular之todoList',
 			typeNumber:'103'
 			},{
 			name:'angular之豆瓣电影',
 			typeNumber:'104'
 			}
 		]
 	};
 	
 	// 初始化swiper
 	$scope.$on('$ionicView.afterEnter',function(e){
 		initSlide();
 	})
 	function initSlide(){
 		var slide = new Swiper(".swiper-container",{
 			slidesPerView:1,
 			paginationClickable:true,
// 			centeredSlides:true,
 			autoplay:2000,
 			loop:true,
 			pagination:'.swiper-pagination',
 			observe:true
 		})
 	};
		}]);