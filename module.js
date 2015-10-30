var app=angular.module('we',[]);

app.controller('mainc',function($scope,$http){

  //var shortcode="4r8J1_uED2";
  $http.get('https://api.instagram.com/v1/media/shortcode/' + shortcode +'?access_token=2099098111.e8c1d34.9c132838a9964f069e3bc4b6dd17e8e0')
  .success(function(data){
   $scope.w=data;
  $scope.y=encodeURIComponent($scope.w.data.images.standard_resolution.url);

       $http.get("https://api.havenondemand.com/1/api/sync/ocrdocument/v1?url=" + $scope.y + "&apikey=bdc49c19-d165-495f-a5d4-5a5715412679")
      .success(function(data){
        $scope.h=data;
      })
      .error(function(err){
        return err;
      });


  });




  });
