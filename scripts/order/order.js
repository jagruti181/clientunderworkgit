var appOrder = angular.module('appOrder', ['orderRest', 'ngRoute','userRest','retailerRest']);

appOrder.controller('createorder',
  function ($scope,orderRest,userRest,$location,retailerRest) {
     
      var retailerload = function (data, status) {
            console.log(data);
            $scope.getretail = data;
      };
        retailerRest.find().success(retailerload);

      var userload = function (data, status) {
            console.log(data);
            $scope.getuser = data;
      };
        userRest.find().success(userload);

      
      var orderref=function(data,status){
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
      
      
      // $scope.dob="03-July-2014";
     // $scope.demo="create distributor";
      var order=function(data,status){
          console.log(data);
          orderRest.find().success(orderref);
         toastr.success("order Saved");
          $location.url("/order");
      };
      $scope.create=function(data){
        orderRest.create(data).success(order);
      };
      
  }); 

appOrder.controller('order',
  function ($scope,orderRest) {
     
      var order=function(data,status){
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
      orderRest.find().success(order);
      
  });                 



appOrder.controller('editorder',
  function ($scope,orderRest,userRest,$location,retailerRest,$routeParams) {
     
      $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

        var findorder = function (data, status) {
            //  $scope.area.city=data.city;
            $scope.order = {};
            // $scope.area.city="3";
            $scope.order = data;
            $scope.alldata = data;
            //$scope.demo=$scope.alldata[{id}];
        };

        var retailerload = function (data, status) {
            console.log(data);

            $scope.getretail = data;
            userRest.find().success(userload);

        };
       retailerRest.find().success(retailerload);

        var userload = function (data, status) {
            console.log(data);
            // $scope.find=data;

            $scope.getuser = data;
            orderRest.findone($scope.value).success(findorder);
        };


        var order = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        orderRest.find().success(order);

        var updated = function (data, status) {
            orderRest.find().success(order);
           // $scope.visibletable = true;
           // $scope.updatearea = false;
             $location.url("/order");
            toastr.success("Order Updated");
        };


        $scope.update = function (data) {
            orderRest.update(data).success(updated);
        };

  }); 


appOrder.controller('deleteorder',
  function ($scope,orderRest,userRest,$location,retailerRest,$routeParams) {
     
      $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

        var findorder = function (data, status) {
            //  $scope.area.city=data.city;
            $scope.order = {};
            // $scope.area.city="3";
            $scope.order = data;
            $scope.alldata = data;
            //$scope.demo=$scope.alldata[{id}];
        };

        var retailerload = function (data, status) {
            console.log(data);

            $scope.getretail = data;
            userRest.find().success(userload);

        };
       retailerRest.find().success(retailerload);

        var userload = function (data, status) {
            console.log(data);
            // $scope.find=data;

            $scope.getuser = data;
            orderRest.findone($scope.value).success(findorder);
        };


        var order = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        orderRest.find().success(order);

       ondelete = function (data, status) {
            toastr.success("order Deleted");
            //zoneRest.findstate().success(state);
             $location.url("/order");
        };
        
        $scope.delete = function (id) {
            // $scope.usermessage=id;
            orderRest.deleteorder($scope.value).success(ondelete);
        };
  }); 
