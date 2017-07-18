// This is a JavaScript file


  ons.disableAutoStatusBarFill();  // (Monaca enables StatusBar plugin by default)
  module.controller('AppController', function($scope, $http) {
    navigator.geolocation.getCurrentPosition(
      function(data) {
        var lat = data.coords.latitude;  // 緯度
        var lng = data.coords.longitude; // 経度
        var config = { 
          params: {
            APPID:'95e785a97a4faf710cde87caca73c656',
            lat:lat,
            lon:lng,
            lang:'ja',
          }
        }
        
        $http.get("https://api.wadap.jp/weather/forecast", config)
        .success(function(data) {
          // $scope.weather = data.list[0].weather[0].main;
          $scope.description = data.list[0].weather[0].description;
          $scope.icon = data.list[0].weather[0].icon;
          $scope.temp_min = Math.round(data.list[0].main.temp_min) - 273;
          $scope.temp_max = Math.round(data.list[0].main.temp_max) - 273;
 

          //
          
          
          
          function toJST(timestamp) {
              var weeks = new Array('日', '月', '火', '水', '木', '金', '土');
              var ts = timestamp;
              var d = new Date( ts * 1000 );
              var year  = d.getFullYear();
              var month = d.getMonth() + 1;
              var day  = d.getDate();
            　var week   = weeks[ d.getDay() ];
              var hour = ( d.getHours()   < 10 ) ? '0' + d.getHours()   : d.getHours();
              var min  = ( d.getMinutes() < 10 ) ? '0' + d.getMinutes() : d.getMinutes();
              return {date:month + '/' + day + " (" + week + ") ", time: hour + ':' + min}
          }
          
          var result = toJST(data.list[0].dt);
          $scope.date = result.date;
          $scope.time = result.time;
          
          // $scope.weather2 = data.list[1].weather[0].main;
          $scope.description2 = data.list[1].weather[0].description;
          $scope.icon2 = data.list[1].weather[0].icon;
          $scope.temp_min2 = Math.round(data.list[1].main.temp_min) - 273;
          $scope.temp_max2 = Math.round(data.list[1].main.temp_max) - 273;

         
         
          var result = toJST(data.list[1].dt);
          $scope.date2 = result.date;
          $scope.time2 = result.time;
          

          // $scope.weather3 = data.list[2].weather[0].main;
          $scope.description3 = data.list[2].weather[0].description;
          $scope.icon3 = data.list[2].weather[0].icon;
          $scope.temp_min3 = Math.round(data.list[2].main.temp_min) - 273;
          $scope.temp_max3 = Math.round(data.list[2].main.temp_max) - 273;
         
          var result = toJST(data.list[2].dt);
          $scope.date3 = result.date;
          $scope.time3 = result.time;
          

        })
        
        

        
        .error(function() {
          alert('天気情報の取得に失敗しました');
        });
      });
    });
 