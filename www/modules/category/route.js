(function(angular){
  var app = angular.module('category.route',[
    'ui.router',
    'category.controllers'
    ]);

  app.config(['$stateProvider',function($stateProvider){
    $stateProvider.state('tabs.category',{
      url : '/category',
      views : {
        'tab-category' : {
          templateUrl : 'modules/category/view.html',
          controller : 'categoryCtrl'
        }
      }
    })
  }])
})(angular)