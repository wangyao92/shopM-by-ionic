(function(angular){
  var app = angular.module('guidPage.controllers',[
    'guidPage.services'
    ]);

  app.controller('guidPageCtrl',[
    '$scope',
    '$state',
    'guidService',
     function($scope,$state,guideService){
      new Swiper('#guideSlide',{
        onSlideChangeEnd : function(swiper){
          //swiper.activeIndex是获取当前活动页面的索引
          var id = 'tips-' + (swiper.activeIndex + 1);
          //angular.element是angular中封装的一个获取jquery对象d的方法，相当于$,参数为dom对象
          var jqlite = angular.element(document.getElementById(id));

          jqlite.addClass('guide-show');
          jqlite.removeClass('hidden');
        }
      });

      $scope.func_goHome = function(){
        $state.go('tabs.home');
      }
  }]);
})(angular)
