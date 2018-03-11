var app=angular.module('we',[]);

app.controller('mainc',function($scope,$http){

  //var shortcode="4r8J1_uED2";
  $http.get('https://api.instagram.com/v1/media/shortcode/' + shortcode +'?access_token=Acess_token')
  .success(function(data){
   $scope.w=data;
  $scope.y=encodeURIComponent($scope.w.data.images.standard_resolution.url);

       $http.get("https://api.havenondemand.com/1/api/sync/ocrdocument/v1?url=" + $scope.y + "&apikey=API_KEY")
      .success(function(data){
        $scope.h=data;
      })
      .error(function(err){
        return err;
      });


  });




  });
