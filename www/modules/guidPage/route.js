(function(angular){
  var app = angular.module('guidPage.route',[
    'ui.router',
    'guidPage.controllers'
    ])

  app.config(['$stateProvider',function($stateProvider){
    $stateProvider.state('guidPage',{
      url : '/guidPage',
      templateUrl : 'modules/guidPage/view.html',
      controller : 'guidPageCtrl'
    })
  }])
})(angular)

