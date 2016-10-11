(function(angular){
  var app = angular.module('starter.config',[]);

  app.config(['$ionicConfigProvider',function($ionicConfigProvider){
    //控制tab选项卡在不同的设备上显示在顶部还是底部
    ////这些配置只要在打包成apk时才会生效
    $ionicConfigProvider.platform.android.tabs.position('bottom');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
  }])
})(angular)


