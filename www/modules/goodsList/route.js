(function(angular){
  var app = angular.module('goodslist.route',[
    'ui.router',
    'goodslist.controllers'
    ]);

  app.config(['$stateProvider',function($stateProvider){
    $stateProvider.state('goodslist',{
      url : '/goodslist',
      templateUrl : 'modules/goodslist/view.html',
      controller : 'goodslistCtrl'
    })
  }])
})(angular)