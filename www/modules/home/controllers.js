(function(angular){
  var app = angular.module('home.controllers',[
    'home.services']);
  app.controller('homeController',[
    '$scope',
    '$interval',
    function($scope,$interval){

  // 要保存在dom树结构生成之后操作dom
    $scope.$on('$ionicView.enter',function(){
      topSlider();
      toutiaoSlider();
      topSearchColor();
      goTop();
    })
    TimeSecKill();
      //头部轮播图
      function topSlider(){
        new Swiper('#headerSlider',{
          pagination : '.swiper-pagination',//分页器
          autoplay : 2000,
          autoplayDisableOnInteraction : false
        });
      }


      // 模拟头部轮播图数据
        $scope.headerSlideData = [{
            alt: "双十一预热主场会",
            src: "img/home/home-headerSlide-1.jpg"
        }, {
            alt: "11月11天家电低价不停歇",
            src: "img/home/home-headerSlide-2.jpg"
        }, {
            alt: "家具盛典 好货提前抢",
            src: "img/home/home-headerSlide-3.jpg"
        }, {
            alt: "IT抢券节",
            src: "img/home/home-headerSlide-4.jpg"
        }, {
            alt: "潮流数码 双11爽购攻略",
            src: "img/home/home-headerSlide-5.jpg"
        }];

        //头条轮播图
      function toutiaoSlider(){
        new Swiper('#toutiaoSlider',{
          autoplay : 2000,
          direction: 'vertical', // vertical//表示垂直轮播,
          autoplayDisableOnInteraction : false// 为false时用户操作轮播图之后 还可以自动 播放.
        })
      }
      //秒杀倒计时
      function TimeSecKill(){
        var timer = {hour:1,min:30,sec:10};
        $interval(function(){
          if(timer.sec > 0){
            timer.sec--;
          }else if(timer.min > 0){
            timer.min--;
            timer.sec = 59;
          }else if(timer.hour > 0){
            timer.hour--;
            timer.min = 59;
            timer.sec = 59;
          }
          $scope.hour = {shi : getTime(timer.hour).shi,ge : getTime(timer.hour).ge};
          $scope.min = {shi : getTime(timer.min).shi,ge : getTime(timer.min).ge};
          $scope.sec = {shi : getTime(timer.sec).shi,ge : getTime(timer.sec).ge};

        },1000);

        function getTime(time){
          return {
            shi : time < 10 ? 0 : parseInt(time/10),
            ge : time < 10 ? time : time % 10
          }
        }
      }

      //头部搜索条
      function topSearchColor(){
          var content = document.getElementById('home-content') // 这个是中间的滚动内容
          var headerBar = document.getElementById('headerBar-bg') // 控制透明度元素
          var nowOpacity=0;
          // content.addEventListener('scroll',function(){
          //     nowOpacity = this.scrollTop / 600;
          //     headerBar.style.opacity = nowOpacity;
          // })
          var jqlite = angular.element(content);
          jqlite.on('scroll',function(){
              nowOpacity = this.scrollTop / 600;
              headerBar.style.opacity = nowOpacity;
          })

      }


      //返回顶部
      function goTop(){
        var content = document.getElementById('home-content');
        var backTop = document.querySelector('.back_top');
        backTop.onclick = function(){
          content.scrollTop = 0;
        }
        content.addEventListener('scroll',function(){
            if(this.scrollTop > 300){
              backTop.style.opacity = 1;
            }else {
              backTop.style.opacity = 0;
            }
        })
      }
  }])
})(angular)