(function(angular){
  var app = angular.module('starter.global',[]);

//配置全局参数
  app.constant('GlobalVar',{
    SERVER : '',
    VERSION : '1.0.0',
    TITLE : 'shopM'
  })
})(angular)