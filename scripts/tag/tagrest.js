var tagRest = angular.module('tagRest', [])



.factory('tagRest', function ($http) {
    
    return{
        create: function(data){
            console.log();
           return $http.get("http://localhost/firstprojectavi/index.php/tag/create",{params:data});
        },
        find: function(){
            console.log();
            return $http.get("http://localhost/firstprojectavi/index.php/tag/find");
        },
        findone: function(data){
            console.log();
            return $http.get("http://localhost/firstprojectavi/index.php/tag/findone?id="+data,{});
        },
        deletetag: function(id){
            return $http.get("http://localhost/firstprojectavi/index.php/tag/delete?id="+id,{});
        },
        update: function(data){
            return $http.get("http://localhost/firstprojectavi/index.php/tag/update",{params:data});
        }
    }
    
});




                            