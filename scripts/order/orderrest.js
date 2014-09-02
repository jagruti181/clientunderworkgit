var orderRest = angular.module('orderRest', [])



.factory('orderRest', function ($http) {
    
    return{
        find: function(){
            console.log();
            return $http.get("http://localhost/firstprojectavi/index.php/orders/find");
        },
        create: function(data){
            console.log();
           return $http.get("http://localhost/firstprojectavi/index.php/orders/create",{params:data});
        },
        findone: function(data){
            console.log();
            return $http.get("http://localhost/firstprojectavi/index.php/orders/findone?id="+data,{});
        },
        deleteorder: function(id){
            return $http.get("http://localhost/firstprojectavi/index.php/orders/delete?id="+id,{});
        },
        update: function(data){
            return $http.get("http://localhost/firstprojectavi/index.php/orders/update",{params:data});
        }
    }
    
});




                            