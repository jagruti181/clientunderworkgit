var appScheme = angular.module('appScheme', ['schemeRest', 'ngRoute']);

appScheme.controller('scheme', ['$scope','schemeRest',
  function ($scope,schemeRest) {
      $scope.visible=false;
      $scope.visibletable=true;
     // $scope.demo="hello";
      
      var scheme=function(data,status){
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
      schemeRest.find().success(scheme);
      
      var updated=function(data,status){
          schemeRest.find().success(scheme); 
          $scope.visibletable=true;
          $scope.visible=false;
         toastr.success("Scheme Updated");
      };
      
      ondelete=function(data,status) {
        toastr.success("Scheme Deleted");
        schemeRest.find().success(scheme);  
      };
      
       $scope.delete=function(id){
         // $scope.usermessage=id;
        schemeRest.deletescheme(id).success(ondelete);
      };
      
      $scope.showupdate=function(id,name,disc,startdate,enddate,mrp){
          $scope.visibletable=false;
          $scope.visible=true;
          $scope.schemeid=id;
         // $scope.usermessage=id;
          $scope.scheme={name:name,disc:disc,startdate:startdate,enddate:enddate,mrp:mrp};
      };
      
      
      $scope.update=function(name,disc,startdate,enddate,mrp){
          $scope.usermessage="hello";
          $scope.usermessage=$scope.userid;
          schemeRest.update($scope.schemeid,name,disc,startdate,enddate,mrp).success(updated);
      };
      
     
  }]);

appScheme.controller('createscheme', ['$scope','schemeRest',
  function ($scope,schemeRest) {
      
 $scope.enddate="03-July-2014";
 $scope.startdate="03-July-2014";
     // $scope.demo="create scheme";
      
      var saved=function(data,status){
          console.log(data);
         // $scope.demo="saved";
       toastr.success("Scheme Saved");
      };
      
      $scope.create=function(name,disc,start,end,mrp){
          $scope.startdate=start;
          $scope.enddate=end;
          
         // toastr.success("Demo is w");
         schemeRest.create(name,disc,$scope.startdate,$scope.enddate,mrp).success(saved);
      };
      
      
  }]);             


/*########################################################Update###################################################################*/


appScheme.controller('editscheme',
    function ($scope, schemeRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

        var findscheme = function (data, status) {
            //  $scope.area.city=data.city;
            $scope.scheme = {};
            // $scope.area.city="3";
            $scope.scheme = data;
            $scope.alldata = data;
            //$scope.demo=$scope.alldata[{id}];
        };

            schemeRest.findonescheme($scope.value).success(findscheme);

        
        var scheme = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        schemeRest.find().success(scheme);
        
        var updated = function (data, status) {
             schemeRest.find().success(scheme);
           // $scope.visibletable = true;
           // $scope.updatearea = false;
             $location.url("/scheme");
            toastr.success("Scheme Updated");
        };


        $scope.update = function (data) {
            schemeRest.updatescheme(data).success(updated);
        };


    });

/*########################################################delete###################################################################*/


appScheme.controller('deletescheme',
    function ($scope, schemeRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

        var findscheme = function (data, status) {
            //  $scope.area.city=data.city;
            $scope.scheme = {};
            // $scope.area.city="3";
            $scope.scheme = data;
            $scope.alldata = data;
            //$scope.demo=$scope.alldata[{id}];
        };

            schemeRest.findonescheme($scope.value).success(findscheme);

        
        var scheme = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        schemeRest.find().success(scheme);
        
        
        ondelete=function(data,status) {
          toastr.success("Scheme Deleted");
            $location.url("/scheme");
        schemeRest.find().success(scheme);  
      };
      
      
      $scope.delete=function(){
         // $scope.usermessage=id;
        schemeRest.deletescheme($scope.value).success(ondelete);
      };

    });

         