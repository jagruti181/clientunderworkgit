var schemeRest = angular.module('schemeRest', [])



.factory('schemeRest', function ($http) {
    
    return{
        findonescheme: function(id){
            console.log();
            return $http.get("http://localhost/firstprojectavi/index.php/scheme/findone?id="+id,{});
        },
        find: function(){
            console.log();
            return $http.get("http://localhost/firstprojectavi/index.php/scheme/find");
        },
        create: function(name,disc,startdate,enddate,mrp){
            console.log();
            return $http.get("http://localhost/firstprojectavi/index.php/scheme/create?name="+name+"&discount_percent="+disc+"&date_start="+startdate+"&date_end="+enddate+"&mrp="+mrp,{});
        },
        deletescheme: function(id){
            return $http.get("http://localhost/firstprojectavi/index.php/scheme/delete?id="+id,{});
        },
        updatescheme: function(data){
            return $http.get("http://localhost/firstprojectavi/index.php/scheme/update",{params:data});
        }
    }
    
});




                            