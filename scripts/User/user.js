var appUser = angular.module('appUser', ['userRest', 'ngRoute']);

appUser.controller('user',
  function ($scope,userRest,$location) {
      
      var user=function(data,status){
          console.log(data);
          $location.url("/user");
        $scope.usermessage="User Inserted";
      };
      $scope.create=function(data){
          //$scope.username=user;
          
         userRest.create(data).success(user);
      };
      
       /*###############################################Validation#######################################################*/
       var original;
      $scope.user = {
        name: '',
        username: '',
        password: '',
        conpassword: '',
        email: '',
        mobile: '',
        radio: ''
      };
      original = angular.copy($scope.user);
      $scope.revert = function() {
        $scope.user = angular.copy(original);
        return $scope.form_constraints.$setPristine();
      };
      $scope.canRevert = function() {
        return !angular.equals($scope.user, original) || !$scope.form_constraints.$pristine;
      };
      return $scope.canSubmit = function() {
        return $scope.form_constraints.$valid && !angular.equals($scope.user, original);
      };
      /*###############################################Validation#######################################################*/
      
   
  }); 

appUser.controller('find', ['$scope','userRest',
  function ($scope,userRest) {
      $scope.visible=false;
      $scope.visibletable=true;
      $scope.demo="";
      $scope.userid="0";
      
      
      var user=function(data,status){
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
      userRest.find().success(user);
      
      
      ondelete=function(data,status) {
        userRest.find().success(user);  
      };
      
      var deleted=function(data,status){
          $scope.demo="deleted";
      };
      
      var updated=function(data,status){
          $scope.usermessage="updated";
      };
      
      $scope.delete=function(id){
         // $scope.usermessage=id;
        userRest.deleteuser(id).success(ondelete);
      };
      
      $scope.showupdate=function(id,name,username,password,email,mobile,accessleve){
          $scope.visibletable=false;
          $scope.visible=true;
          $scope.userid=id;
         // $scope.usermessage=id;
          $scope.user={name:name,username:username,conpassword:password,password:password,email:email,mobile:mobile,radio:accessleve};
      };
      
      $scope.update=function(name,username,password,email,mobile,accessleve){
          $scope.usermessage="hello";
          $scope.usermessage=$scope.userid;
          userRest.update($scope.userid,name,username,password,email,mobile,accessleve).success(updated);
      };
      
     /*###############################################Validation#######################################################*/
       var original;
      $scope.user = {
        name: '',
        username: '',
        password: '',
        conpassword: '',
        email: '',
        mobile: '',
        radio: ''
      };
      original = angular.copy($scope.user);
      $scope.revert = function() {
        $scope.user = angular.copy(original);
        return $scope.form_constraints.$setPristine();
      };
      $scope.canRevert = function() {
        return !angular.equals($scope.user, original) || !$scope.form_constraints.$pristine;
      };
      return $scope.canSubmit = function() {
        return $scope.form_constraints.$valid && !angular.equals($scope.user, original);
      };
      /*###############################################Validation#######################################################*/
      
  }]);                 
         

/*########################################################Update###################################################################*/


appUser.controller('edituser',
    function ($scope, userRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

        var finduser = function (data, status) {
            //  $scope.area.city=data.city;
            // $scope.area.city="3";
            $scope.user = data;
            $scope.alldata = data;
            //$scope.demo=$scope.alldata[{id}];
        };

        userRest.findoneuser($scope.value).success(finduser);

        
        var user = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        userRest.find().success(user);
        
        var updated = function (data, status) {
             userRest.find().success(user);
           // $scope.visibletable = true;
           // $scope.updatearea = false;
             $location.url("/user");
            toastr.success("User Updated");
        };


        $scope.update = function (data) {
            userRest.updateuser(data).success(updated);
        };


    });

/*########################################################delete###################################################################*/


appUser.controller('deleteuser',
    function ($scope, userRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

        var finduser = function (data, status) {
            //  $scope.area.city=data.city;
            $scope.user = {};
            // $scope.area.city="3";
            $scope.user = data;
            $scope.alldata = data;
            //$scope.demo=$scope.alldata[{id}];
        };

        userRest.findoneuser($scope.value).success(finduser);

        
        var user = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        userRest.find().success(user);
        
        
        ondelete=function(data,status) {
          toastr.success("User Deleted");
            $location.url("/user");
        userRest.find().success(user);  
      };
      
      
      $scope.delete=function(){
         // $scope.usermessage=id;
        userRest.deleteuser($scope.value).success(ondelete);
      };

    });

         
