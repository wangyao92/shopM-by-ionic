(function(angular){
  var app = angular.module('account.route',[
    'ui.router',
    'account.controllers'
    ]);

  app.config(['$stateProvider',function($stateProvider){
    $stateProvider.state('tabs.account',{
      url : '/account',
      views : {
        'tab-account' : {
          templateUrl : 'modules/account/view.html',
          controller : 'accountCtrl'
        }
      }
    })
  }])
})(angular)