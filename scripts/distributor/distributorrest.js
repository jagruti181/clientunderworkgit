var distributorRest = angular.module('distributorRest', [])



.factory('distributorRest', function ($http) {
    
    return{
        findonedistributor: function(id){
            console.log();
            return $http.get("http://localhost/firstprojectavi/index.php/distributor/findone?id="+id,{});
        },
        create: function(name,code,cname,email,contactno,dob){
            console.log();
           return $http.get("http://localhost/firstprojectavi/index.php/distributor/create?name="+name+"&code="+code+"&componyname="+cname+"&email="+email+"&contactno="+contactno+"&dob="+dob,{});
        },
        find: function(){
            console.log();
            return $http.get("http://localhost/firstprojectavi/index.php/distributor/find");
        },
        deletedistributor: function(id){
            return $http.get("http://localhost/firstprojectavi/index.php/distributor/delete?id="+id,{});
        },
        updatedistributor: function(data){
            return $http.get("http://localhost/firstprojectavi/index.php/distributor/update",{params:data});
        }
    }
    
});




                            