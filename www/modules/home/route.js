(function(angular){
  var app = angular.module('home.route',[
    'ui.router',
    'home.controllers'
    ]);

  app.config(['$stateProvider',function($stateProvider){
    $stateProvider.state('tabs.home',{
      url : '/home',    //tabs/home
      views : {
        'tab-home':{
          templateUrl : 'modules/home/view.html',
          controller : 'homeController'
        }
      }
    })
  }])
})(angular)