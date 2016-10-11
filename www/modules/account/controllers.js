(function(angular){
  var app = angular.module('account.controllers',['account.services']);

  app.controller('accountCtrl',[
    '$scope',
    '$cordovaCamera',
    '$ionicActionSheet',
    function($scope,$cordovaCamera,$ionicActionSheet){

      $scope.$on('$ionicView.enter',function(){
        var img = document.getElementById('touxiang');
        img.src = localStorage.getItem('touxiang') || 'img/details/detail01.jpg';
      })



        //弹出actionSheet
        $scope.showActionSheet = function(){
          var hide = $ionicActionSheet.show({
            buttons : [{
              text : '打开相册'
            },{
              text : '打开相机'
            }],
            cancelText : '取消',
            cancel : function(){
              //取消按钮事件
            },
            buttonClicked : function(index){
              console.log(index);
              if(index == 0){//打开相册
                openLibrary();
                hide();
              }else if(index == 1){//打开相机
                openCamera();
                hide();
              }
            }
          })
        }

        // 调用摄像头
      function openCamera(){
        $cordovaCamera.getPicture({
        quality: 100,// 图片质量
        destinationType: Camera.DestinationType.DATA_URL,// 读取到的图片的数据类型,读取图片为base64编码
        // sourceType: Camera.PictureSourceType.PHOTOLIBRARY,// 图片的来源的，这是表示相册
        sourceType: Camera.PictureSourceType.CAMERA,// 这个表示来源是相机 
        allowEdit: true,// 是否允许编辑
        encodingType: Camera.EncodingType.JPEG,// 图片编码类型,jpeg
        targetWidth: 100,// 图片宽度
        targetHeight: 100, // 图片高度
        popoverOptions: CameraPopoverOptions, // 弹出框类型
        saveToPhotoAlbum: false, // 是否保存到相册
        correctOrientation:true  // 是否允许调整方向
        }).then(function(imageData){
            var dataUrl = 'data:image/jpeg;base64,' + imageData;
            var img = document.getElementById('touxiang');
            img.src = dataUrl;

            //将这张图片保存在localstorage中，在页面加载完成之后显示出来
            localStorage.setItem('touxiang',dataUrl);
        })
      }

      // 调用摄像头
      function openLibrary(){
        $cordovaCamera.getPicture({
        quality: 100,// 图片质量
        destinationType: Camera.DestinationType.DATA_URL,// 读取到的图片的数据类型,读取图片为base64编码
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,// 图片的来源的，这是表示相册
        // sourceType: Camera.PictureSourceType.CAMERA,// 这个表示来源是相机 
        allowEdit: true,// 是否允许编辑
        encodingType: Camera.EncodingType.JPEG,// 图片编码类型,jpeg
        targetWidth: 100,// 图片宽度
        targetHeight: 100, // 图片高度
        popoverOptions: CameraPopoverOptions, // 弹出框类型
        saveToPhotoAlbum: false, // 是否保存到相册
        correctOrientation:true  // 是否允许调整方向
        }).then(function(imageData){
            var dataUrl = 'data:image/jpeg;base64,' + imageData;
            var img = document.getElementById('touxiang');
            img.src = dataUrl;

            //将这张图片保存在localstorage中，在页面加载完成之后显示出来
            localStorage.setItem('touxiang',dataUrl);
        })
      }
  }])
})(angular)