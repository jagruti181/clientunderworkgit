var appTag = angular.module('appTag', ['tagRest', 'ngRoute']);

appTag.controller('createtag',
  function ($scope,tagRest,$location) {
      
      var tagref=function(data,status){
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
      var tag=function(data,status){
          console.log(data);
          tagRest.find().success(tagref);
         toastr.success("Tag Saved");
          $location.url("/tag");
      };
      $scope.create=function(data){
        tagRest.create(data).success(tag);
      };
      
  }); 

appTag.controller('tag',
  function ($scope,tagRest) {
     
      var tag=function(data,status){
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
      tagRest.find().success(tag);
      
  });                 

/*########################################################Update###################################################################*/


appTag.controller('edittag',
    function ($scope, tagRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);
      var tagone=function(data,status){
          //  $scope.area.city=data.city;
            $scope.tag = {};
            // $scope.area.city="3";
            $scope.tag = data;
            $scope.alldata = data;
            //$scope.demo=$scope.alldata[{id}];
      };
      
            tagRest.findone($scope.value).success(tagone);

      
        var tagref=function(data,status){
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
             tagRest.find().success(tagref);
           // $scope.visibletable = true;
           // $scope.updatearea = false;
             $location.url("/tag");
            toastr.success("Tag Updated");
        };

        $scope.update = function (data) {
            tagRest.update(data).success(updated);
        };


    })

/*########################################################detele###################################################################*/


appTag.controller('deletetag',
    function ($scope, tagRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);
      var tagone=function(data,status){
          //  $scope.area.city=data.city;
            $scope.tag = {};
            // $scope.area.city="3";
            $scope.tag = data;
            $scope.alldata = data;
            //$scope.demo=$scope.alldata[{id}];
      };
      
            tagRest.findone($scope.value).success(tagone);

        
        ondelete = function (data, status) {
            toastr.success("Tag Deleted");
            //zoneRest.findstate().success(state);
             $location.url("/tag");
        };
        
        $scope.delete = function (id) {
            // $scope.usermessage=id;
            tagRest.deletetag($scope.value).success(ondelete);
        };

    });
