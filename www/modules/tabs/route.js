(function(angular){
  var app = angular.module('tabs.route',[
    'ui.router',
    'tabs.controllers'
    ]);


  app.config(['$stateProvider',function($stateProvider){
    $stateProvider.state('tabs',{
      url : '/tabs',
      templateUrl : 'modules/tabs/view.html',
      controller : 'tabsCtrl',
      abstract : true //控制tabs对应的模板可以与其他模板同时显示
    })
  }])

})(angular)