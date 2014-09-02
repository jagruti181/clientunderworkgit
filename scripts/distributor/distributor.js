var appDistributor = angular.module('appDistributor', ['distributorRest', 'ngRoute']);

appDistributor.controller('createdistributor', ['$scope','distributorRest',
  function ($scope,distributorRest) {
       $scope.dob="03-July-2014";
      $scope.demo="create distributor";
      var distributor=function(data,status){
          console.log(data);
         toastr.success("Distributor Saved");
      };
      $scope.create=function(name,code,cname,email,contactno,dob){
        $scope.dob=dob;
         distributorRest.create(name,code,cname,email,contactno,$scope.dob).success(distributor);
      };
      
  }]); 

appDistributor.controller('distributor', ['$scope','distributorRest',
  function ($scope,distributorRest) {
      $scope.demo="distributor";
      
      $scope.visible=false;
      $scope.visibletable=true;
      $scope.demo="";
      $scope.userid="0";
      
      
      var distributor=function(data,status){
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
      distributorRest.find().success(distributor);
      
      
      
      
      $scope.showupdate=function(id,name,code,cname,email,contactno,dob){
          $scope.visibletable=false;
          $scope.visible=true;
          $scope.distid=id;
         // $scope.usermessage=id;
          $scope.distributor={name:name,code:code,companyname:cname,email:email,contactno:contactno,dob:dob};
      };
      
      var updated=function(data,status){
          distributorRest.find().success(distributor); 
          $scope.visibletable=true;
          $scope.visible=false;
         toastr.success("Distributor Updated");
      };
      
      $scope.update=function(name,code,cname,email,contactno,dob){
          //$scope.usermessage="hello";
          //toastr.success($scope.distid);
          distributorRest.update($scope.distid,name,code,cname,email,contactno,dob).success(updated);
      };
      
  }]);                 
         
/*########################################################Update###################################################################*/


appDistributor.controller('editdistributor',
    function ($scope, distributorRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

        var finddistributor = function (data, status) {
            //  $scope.area.city=data.city;
            $scope.distributor = {};
            // $scope.area.city="3";
            $scope.distributor = data;
            $scope.alldata = data;
            //$scope.demo=$scope.alldata[{id}];
        };

            distributorRest.findonedistributor($scope.value).success(finddistributor);

        
        var distributor = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        distributorRest.find().success(distributor);
        
        var updated = function (data, status) {
             distributorRest.find().success(distributor);
           // $scope.visibletable = true;
           // $scope.updatearea = false;
             $location.url("/distributor");
            toastr.success("Distributor Updated");
        };


        $scope.update = function (data) {
            distributorRest.updatedistributor(data).success(updated);
        };


    });

/*########################################################Update###################################################################*/


appDistributor.controller('deletedistributor',
    function ($scope, distributorRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

        var finddistributor = function (data, status) {
            //  $scope.area.city=data.city;
            $scope.distributor = {};
            // $scope.area.city="3";
            $scope.distributor = data;
            $scope.alldata = data;
            //$scope.demo=$scope.alldata[{id}];
        };

            distributorRest.findonedistributor($scope.value).success(finddistributor);

        
        var distributor=function(data,status){
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
      distributorRest.find().success(distributor);
        
        var distributor = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        distributorRest.find().success(distributor);
        
        ondelete=function(data,status) {
          toastr.success("Distributor Deleted");
            $location.url("/distributor");
        distributorRest.find().success(distributor);  
      };
      
      var deleted=function(data,status){
          $scope.demo="deleted";
      };
      
      
      $scope.delete=function(){
         // $scope.usermessage=id;
        distributorRest.deletedistributor($scope.value).success(ondelete);
      };
    });