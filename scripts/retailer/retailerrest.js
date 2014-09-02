var retailerRest = angular.module('retailerRest', [])



.factory('retailerRest', function ($http) {
    
    return{
        create: function(data){
            console.log();
           return $http.get("http://localhost/firstprojectavi/index.php/retailer/create",{params:data});
        },
        find: function(){
            console.log();
            return $http.get("http://localhost/firstprojectavi/index.php/retailer/find");
        },
        findone: function(data){
            console.log();
            return $http.get("http://localhost/firstprojectavi/index.php/retailer/findone?id="+data,{});
        },
        deleteretailer: function(id){
            return $http.get("http://localhost/firstprojectavi/index.php/retailer/delete?id="+id,{});
        },
        update: function(data){
            return $http.get("http://localhost/firstprojectavi/index.php/retailer/update",{params:data});
        }
    }
    
});




                            