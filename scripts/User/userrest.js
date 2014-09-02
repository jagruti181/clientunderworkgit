var userRest = angular.module('userRest', [])



.factory('userRest', function ($http) {
    
    return{
        create: function(data){
            console.log();
           return $http.get("http://localhost/firstprojectavi/index.php/user/create",{params:data});
        },
        find: function(){
            console.log();
            return $http.get("http://localhost/firstprojectavi/index.php/user/find");
        },
        findoneuser: function(id){
            console.log();
            return $http.get("http://localhost/firstprojectavi/index.php/user/findone?id="+id)
        },
        deleteuser: function(id){
            return $http.get("http://localhost/firstprojectavi/index.php/user/delete?id="+id,{});
        },
        updateuser: function(data){
            return $http.get("http://localhost/firstprojectavi/index.php/user/update",{params:data});
        }
    }
    
});




                            