(function(angular){
    //创建核心的路由核心模块
    var app = angular.module('starter.router',[
      'ui.router',
      'guidPage.route',
      'tabs.route',
      'home.route',
      'category.route',
      'goodslist.route',
      'account.route',
      'cart.route'
      ]);

    //配置路由规则
    app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/guidPage');
    }]);
    
})(angular);
