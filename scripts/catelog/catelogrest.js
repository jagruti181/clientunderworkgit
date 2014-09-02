var catelogRest = angular.module('catelogRest', [])



.factory('catelogRest', function ($http) {
    
    return{
        create: function(data){
            console.log();
           return $http.get("http://localhost/firstprojectavi/index.php/catelog/create",{params:data});
        },
        find: function(){
            console.log();
            return $http.get("http://localhost/firstprojectavi/index.php/catelog/find");
        },
        findone: function(data){
            console.log();
            return $http.get("http://localhost/firstprojectavi/index.php/catelog/findone?id="+data,{});
        },
        deletecatelog: function(id){
            return $http.get("http://localhost/firstprojectavi/index.php/catelog/delete?id="+id,{});
        },
        update: function(data){
            return $http.get("http://localhost/firstprojectavi/index.php/catelog/update",{params:data});
        }
    }
    
});




                            