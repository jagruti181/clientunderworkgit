var appProduct = angular.module('appProduct', ['productRest', 'ngRoute','schemeRest','catelogRest']);

appProduct.controller('createproduct',
  function ($scope,productRest,schemeRest,$location,catelogRest) {
     
      var catelogload = function (data, status) {
            console.log(data);
            $scope.getcategory = data;
      };
        catelogRest.find().success(catelogload);

      var schemeload = function (data, status) {
            console.log(data);
            $scope.getscheme = data;
      };
        schemeRest.find().success(schemeload);

      
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
          productRest.find().success(productref);
         toastr.success("product Saved");
          $location.url("/product");
      };
      $scope.create=function(data){
        productRest.create(data).success(product);
      };
      
  }); 

appProduct.controller('product',
  function ($scope,productRest) {
     
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
      productRest.find().success(product);
      
  });                 



appProduct.controller('editproduct',
  function ($scope,productRest,schemeRest,$location,catelogRest,$routeParams) {
     
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
            schemeRest.find().success(schemeload);

        };
       catelogRest.find().success(catelogload);

        var schemeload = function (data, status) {
            console.log(data);
            // $scope.find=data;

            $scope.getscheme = data;
            productRest.findone($scope.value).success(findproduct);
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
        productRest.find().success(product);

        var updated = function (data, status) {
          //  zoneRest.findarea().success(area);
           // $scope.visibletable = true;
           // $scope.updatearea = false;
             $location.url("/product");
            toastr.success("Product Updated");
        };


        $scope.update = function (data) {
            productRest.update(data).success(updated);
        };

  }); 


appProduct.controller('deleteproduct',
  function ($scope,productRest,schemeRest,$location,catelogRest,$routeParams) {
     
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
            schemeRest.find().success(schemeload);

        };
       catelogRest.find().success(catelogload);

        var schemeload = function (data, status) {
            console.log(data);
            // $scope.find=data;

            $scope.getscheme = data;
            productRest.findone($scope.value).success(findproduct);
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
        productRest.find().success(product);

       ondelete = function (data, status) {
            toastr.success("Product Deleted");
            //zoneRest.findstate().success(state);
             $location.url("/product");
        };
        
        $scope.delete = function (id) {
            // $scope.usermessage=id;
            productRest.deleteproduct($scope.value).success(ondelete);
        };
  }); 
