var appProducttag = angular.module('appProducttag', ['producttagRest', 'ngRoute','productRest','tagRest']);
/*
appProducttag.controller('createproducttag',
  function ($scope,producttagRest,productRest,$location,tagRest) {
     
      var tagload = function (data, status) {
            console.log(data);
            $scope.gettag = data;
      };
        tagRest.find().success(tagload);

      var productload = function (data, status) {
            console.log(data);
            $scope.getproduct = data;
      };
        productRest.find().success(productload);

      
      var productref=function(data,status){
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
      var product=function(data,status){
          console.log(data);
          producttagRest.find().success(productref);
         toastr.success("product Saved");
          $location.url("/product");
      };
      $scope.create=function(data){
        producttagRest.create(data).success(product);
      };
      
  }); 

appProducttag.controller('product',
  function ($scope,producttagRest) {
     
      var product=function(data,status){
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
      producttagRest.find().success(product);
      
  });                 



appProducttag.controller('editproduct',
  function ($scope,producttagRest,productRest,$location,tagRest,$routeParams) {
     
      $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

        var findproduct = function (data, status) {
            //  $scope.area.city=data.city;
            $scope.product = {};
            // $scope.area.city="3";
            $scope.product = data;
            $scope.alldata = data;
            //$scope.demo=$scope.alldata[{id}];
        };

        var catelogload = function (data, status) {
            console.log(data);

            $scope.getcategory = data;
            productRest.find().success(productload);

        };
       tagRest.find().success(catelogload);

        var productload = function (data, status) {
            console.log(data);
            // $scope.find=data;

            $scope.getscheme = data;
            producttagRest.findone($scope.value).success(findproduct);
        };


        var product = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        producttagRest.find().success(product);

        var updated = function (data, status) {
            zoneRest.findarea().success(area);
           // $scope.visibletable = true;
           // $scope.updatearea = false;
             $location.url("/product");
            toastr.success("Product Updated");
        };


        $scope.update = function (data) {
            producttagRest.update(data).success(updated);
        };

  }); 


appProducttag.controller('deleteproduct',
  function ($scope,producttagRest,productRest,$location,tagRest,$routeParams) {
     
      $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

        var findproduct = function (data, status) {
            //  $scope.area.city=data.city;
            $scope.product = {};
            // $scope.area.city="3";
            $scope.product = data;
            $scope.alldata = data;
            //$scope.demo=$scope.alldata[{id}];
        };

        var catelogload = function (data, status) {
            console.log(data);

            $scope.getcategory = data;
            productRest.find().success(productload);

        };
       tagRest.find().success(catelogload);

        var productload = function (data, status) {
            console.log(data);
            // $scope.find=data;

            $scope.getscheme = data;
            producttagRest.findone($scope.value).success(findproduct);
        };


        var product = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        producttagRest.find().success(product);

       ondelete = function (data, status) {
            toastr.success("Product Deleted");
            //zoneRest.findstate().success(state);
             $location.url("/product");
        };
        
        $scope.delete = function (id) {
            // $scope.usermessage=id;
            producttagRest.deleteproduct($scope.value).success(ondelete);
        };
  }); 
*/