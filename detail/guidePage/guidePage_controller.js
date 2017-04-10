/*
 * 创建者      谢英
 * 创建时间   2017-3-10
 * 文件功能   app的引导
 */
/*引导页控制器*/
angular.module("guidePage.controller",[])
	.controller("GuidePageController",['$scope','$state',function($scope,$state){
		var guideSlide = new Swiper('#guideSlide',{
			pagination:'.swiper-pagination',
			onSlideChangeEnd:function(swiper){
				var index = guideSlide.activeIndex + 1;// 得到当前显示的页数
				if(index == 2 || index ==3 || index==4) {
					var item = $("#tips-"+ index); 
						if(item.hasClass('hidden')){
							item.removeClass('hidden');
							item.addClass("guide-show");
						}
				};
				if(index == 2 || index ==3 || index == 4) {
					var circle = $("#circle-"+ index);
					if(circle.hasClass('hidden')){
							circle.removeClass('hidden');
							circle.addClass("guide-show");
						}
				};
			}
		});
		// 跳转到首页
		$scope.goHomePage = function(){
			$state.go('tab.home');
		}
		}]);