(function(angular){
  var app = angular.module('cart.route',[
    'ui.router',
    'cart.controllers']);

  app.config(['$stateProvider',function($stateProvider){
    $stateProvider.state('tabs.cart',{
      url : '/cart',
      views : {
        'tab-cart' :　{
          templateUrl : 'modules/cart/view.html',
          controller : 'cartCtrl'
        }
      }
      
    })
  }])
})(angular)