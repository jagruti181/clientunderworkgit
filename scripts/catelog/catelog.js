var appCatelog = angular.module('appCatelog', ['catelogRest', 'ngRoute']);

appCatelog.controller('createcatelog',
  function ($scope,catelogRest,$location) {
      $scope.demo="image.jpg";
      var catelogparent = function (data, status) {
            console.log(data);
            $scope.getparent = data;
      };
        catelogRest.find().success(catelogparent);

      
      var catelogref=function(data,status){
          console.log(data);
          // $scope.find=data;
          if(data=="false")
          {
              $scope.usermessage="No data found";
              $scope.visibletable=false;
            
          }else
          {
              $scope.find=data;
          }
      };
      var catelog=function(data,status){
          console.log(data);
          catelogRest.find().success(catelogref);
         toastr.success("Catelog Saved");
          $location.url("/catelog");
      };
      $scope.create=function(data){
        catelogRest.create(data).success(catelog);
      };
      
  }); 

appCatelog.controller('catelog',
  function ($scope,catelogRest) {
     
      var catelog=function(data,status){
          $scope.demo="hello";
          console.log(data);
          // $scope.find=data;
          if(data=="false")
          {
              $scope.usermessage="No data found";
              $scope.visibletable=false;
            
          }else
          {
              $scope.find=data;
          }
      };
      catelogRest.find().success(catelog);
      
  });                 

/*########################################################Update###################################################################*/


appCatelog.controller('editcatelog',
    function ($scope, catelogRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);
      var catelogone=function(data,status){
          //  $scope.area.city=data.city;
            $scope.catelog = {};
            // $scope.area.city="3";
            $scope.catelog = data;
            $scope.alldata = data;
            //$scope.demo=$scope.alldata[{id}];
      };
      
      var catelog = function (data, status) {
            console.log(data);
            $scope.getparent = data;
            catelogRest.findone($scope.value).success(catelogone);

      };
        catelogRest.find().success(catelog);
        
        var catelogref=function(data,status){
          $scope.demo="hello";
          console.log(data);
          // $scope.find=data;
          if(data=="false")
          {
              $scope.usermessage="No data found";
              $scope.visibletable=false;
            
          }else
          {
              $scope.find=data;
          }
      };
        
        var updated = function (data, status) {
             catelogRest.find().success(catelogref);
           // $scope.visibletable = true;
           // $scope.updatearea = false;
             $location.url("/catelog");
            toastr.success("Catelog Updated");
        };

        $scope.update = function (data) {
            catelogRest.update(data).success(updated);
        };


    });

/*########################################################detele###################################################################*/


appCatelog.controller('deletecatelog',
    function ($scope, catelogRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);
      var catelogone=function(data,status){
          //  $scope.area.city=data.city;
            $scope.catelog = {};
            // $scope.area.city="3";
            $scope.catelog = data;
            $scope.alldata = data;
            //$scope.demo=$scope.alldata[{id}];
      };
      
      var catelog = function (data, status) {
            console.log(data);
            $scope.getparent = data;
            catelogRest.findone($scope.value).success(catelogone);

      };
        catelogRest.find().success(catelog);
        
        ondelete = function (data, status) {
            toastr.success("Catelog Deleted");
            //zoneRest.findstate().success(state);
             $location.url("/catelog");
        };
        
        $scope.delete = function (id) {
            // $scope.usermessage=id;
            catelogRest.deletecatelog($scope.value).success(ondelete);
        };

    });
