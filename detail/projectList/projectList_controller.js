/*项目经验控制器*/
angular.module("projectList.controller",[])
	.controller("ProjectListController",['$scope','$state','$stateParams',function($scope,$state,$stateParams){
		
		var typeNumber = $stateParams.typeNumber;
		if(typeNumber == '101'){
			getData1();
		}else if(typeNumber == '102'){
			getData2();
		}else if(typeNumber == '103'){
			getData3();
		}else if(typeNumber == '104'){
			getData4();
		}
		function getData1(){
			$scope.datas = [{
				title:'仿京东触屏版',
				job:'网页制作和特效',
				startTime:'2017.01',
				endTime:'2017.01',
				desc:'该项目利用HTML(HTML5)、CSS(CSS3)以及JavaScript技术来完成适用于移动端的页面，实现了首页功能模块，分类页面功能模块以及购物车功能模块。首先，页面的架构。首页采用的是有最小宽度最大宽度的百分比布局，通过设置min-width和max-width来实现。分类页面则是一个满屏的页面，在这里我采用的是让body绝对定位，再设置百分之百的宽高。购物车页面采用的是一个自由的百分比布局。在页面布局中，我领悟到，因为所制作的页面具有响应式特色，故如果在一行中左右两边的内容都固定，中间的内容随窗口大小变化时，就可以利用设置左右两边绝对定位脱离标准流，再将中间内容设置百分之百宽，设置padding将左右两边内容空出来。其次，每个页面相关功能的实现。1、首页。该页面中，利用原生js，完成了头部搜索栏变色，轮播图(自动向左滑动，手指可以拖拽滑动，滑动超过图片宽1/3则产生吸附)，垂直跑马灯，秒杀倒计时，秒杀商品的拖拽滑动等。2、分类页。该页面主要针对左侧垂直导航栏，完成了手指上下拖拽滑动，向上(下吸附)，点击每个li,该元素置顶效果。3、购物车页面。该页面主要完成了所有复选框的点击全选或单选，弹出模态框，编辑和删除的效果。',
				link:'http://hoho617.github.io/JD-M'
			}];
			$scope.title = '仿京东触屏版';
		};
		function getData2(){
			$scope.datas = [{
				title:'微信小程序之豆瓣电影',
				job:'页面设计制作和ajax数据请求',
				startTime:'2016.11',
				endTime:'2016.11',
				desc:'该项目使用微信开发者工具，结合微信小程序开发中的框架，组件，API等知识，开发出了一个豆瓣电影列表，并实现了榜单查询，搜索，左右分页等功能。首先，页面的架构。在app.json文件中的page中定义要用到的文件路径，并在tabBar中设置底部tab的表现。紧接着，在首页index.wxml中，通过使用picker滚动选择器，绑定了与后台相对应的三个榜单，通过其上的bindChange事件，设置相关的索引值，方便通过wx.navigateTo方法，将参数类型传给电影列表页面。其次，功能模块的实现。1、榜单查询。通过在首页中选择相对应的榜单，将榜单类型传给电影列表页面，在此js文件中，通过onLoad方法中的参数params，取到从前台传过来的参数，并将其拼接到url的后面，使用wx.request方法，发送HTTPS跨域请求，最后将请求回来的数据绑定到页面中。2、分页。分页的原理在于，用户发送数据请求时，url后面所带的参数start和count的不同觉决定了当前页数。用户在首页中通过滚动选择器传过来的参数不仅仅只有榜单类型，并将起始页数传过来，当用户点击下一页时，当前的页码就是原有基础上加一，并且页数不能大于总页数，当大于总页数或小于0时，我设置了按钮的禁用状态，通过this.setData()方法，将页数更新到url参数后面，则相应的startcount会发生变化，最后只需重新发送请求即可。3、搜索功能。当用户在搜索框中输入内容不为空时，我们通过文本框的bingChange事件,在后台js文件中，通过事件对象e取到输入的内容，再将其拼接到豆瓣api后面发送请求即可。',
				link:'http://hoho617.github.io'
			}];
			$scope.title = '微信小程序之豆瓣电影';
		};
		function getData3(){
			$scope.datas = [{
				title:'angular之todoList',
				job:'增删改查的实现',
				startTime:'2016.10',
				endTime:'2016.11',
				desc:'该项目利用GitHub上面的TODOMVC的页面结构模板以及angularJS技术，制作了一个最简单的待办事项列表以及实现了增删改查的功能。首先，页面的架构。利用git clone命令行工具，将模板下载到本地中，再利用npm包管理工具，下载此项目依赖的其他文件。其次，业务需求和相关功能的实现。通过对待办事项的分析可以得到，该项目需要两个模型暴露给视图，输入文本框和任务列表。同时我们需要将任务列表的格式定义为对象，其中包括id,列表内容,是否完成。1、按回车键添加。当用户输入内容不为空且按下回车键时，利用数组的push方法将输入文本框的内容添加到任务列表中。2、删除待办事项。实现该功能需要利用到不同的id,根据传过来的id和任务列表内的每一项的id进行比较，如果相同，则利用splice方法进行删除。3、清空已完成。由于已完成不一定只是一条对象，故利用新的未完成组成的数组来代替原先的。4、双击文本框进行编辑。当用户想对已经添加到任务列表中的内容进行修改时，只需双击该项。要想实现编辑，首先定义一个进入编辑状态的id，值为-1，然后通过双击项的id赋给编辑状态的id,在视图中只需判断每一项的id是否与进入编辑状态的id相同即可。5、剩余未完成事项的数目。当用户已完成某一事项时，该条目会自动进行减少。在实现该功能中，需要用到$watch函数实时监听任务列表数组，并且利用$filter函数，过滤的条件是completed:false的长度。6、状态筛选。用户点击All，Active，Completed进行状态的切换。在此功能中，需要用到angular中的路由，为该页面配置一个路由信息，并定义一个对象，该对象分completed属性有三种不同的值，根据前台a链接传过来的锚点值做出相应的页面显示，再在后台中通过$routeParams对象取到状态值，进行判断。',
				link:'http://hoho617.github.io'
			}];
			$scope.title = 'angular之todoList';
		};
		function getData4(){
			$scope.datas = [{
				title:'angular之豆瓣电影',
				job:'网页设计、制作和功能实现',
				startTime:'2016.10',
				endTime:'2016.10',
				desc:'该项目使用bootstrap和angular技术以及MVC思想，构建出最终的页面结构，实现了电影榜单查询、搜索、左右分页等功能。首先，页面的架构。通过使用bootstrap中组件的胶囊式标签页创建出了三个榜单导航，此为该单一页面应用程序的公共模块部分。其次，相关功能的实现。为正在热映，即将上映，top250功能模块各创建一个文件夹，每个文件夹中都包括HTML页面，controller，service，route文件，并配置相关的路由信息。在这些模块中，我们用到的数据都是从豆瓣的api请求而来的，可是angular中的$http服务提供的回调函数由angular随机分配的，发送jsonp跨域请求时豆瓣不支持，故利用angular中服务的定义，自定义了一个jsonp函数。1、左右分页功能。在豆瓣电影AP接口中，通过url后的start和count参数来确定当前的页数，再通过使用路由器中的服务$route的updateParams方法将下一页或上一页的页码直接更新到url上。2、搜索功能。由于搜索模块处于公共模块中，故在主js文件中为其定义一个控制器，然后输入文本框中取到值，通过$route的updateParams方法更新路由。最后，代码的优化。一开始为每个榜单定义了一个文件夹，完成后发现这几个文件夹有许多相似的地方，故可以将其优化成一个文件，通过.when方法传入路由参数，再利用$routeParams点出我们需要拿到的参数类型。2、在实现搜索功能时，为其单独定义一个控制器显得浪费资源，且搜索功能复用性很高，故可将其定义为一个指令，在任何地方都可以使用。',
				link:'http://hoho617.github.io'
			}];
			$scope.title = 'angular之豆瓣电影';
		};
$scope.goProjectPage = function(){
	$state.go('tab.project');
}
	}]);