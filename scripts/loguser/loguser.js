var applogUser = angular.module('applogUser', ['loguserRest']);

applogUser.controller('loguser', ['$scope','loguserRest',
  function ($scope,loguserRest) {
      
      $scope.demo="hello";
      
      var loguser=function(data,status){
          console.log(data);
          // $scope.find=data;
          if(data=="false")
          {
              $scope.demo="No data found";
              $scope.visibletable=false;
            
          }else
          {
              $scope.find=data;
          }
      };
      loguserRest.find().success(loguser);
     
  }]);

applogUser.controller('createloguser', ['$scope','loguserRest',
  function ($scope,loguserRest) {
      
      $scope.demo="createloguser";
      
      var loguser=function(data,status){
          console.log(data);
          // $scope.find=data;
          if(data=="false")
          {
              $scope.demo="No data found";
              $scope.visibletable=false;
            
          }else
          {
              $scope.find=data;
          }
      };
      loguserRest.find().success(loguser);
     
  }]);                 
         