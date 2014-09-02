var zoneRest = angular.module('zoneRest', [])



.factory('zoneRest', function ($http) {
    
    return{
        
        findonezone: function(id){
            console.log();
            return $http.get("http://localhost/firstprojectavi/index.php/zone/findone?id="+id,{});
        },
        findonestate: function(id){
            console.log();
            return $http.get("http://localhost/firstprojectavi/index.php/state/findone?id="+id,{});
        },
        findonecity: function(id){
            console.log();
            return $http.get("http://localhost/firstprojectavi/index.php/city/findone?id="+id,{});
        },
        findonearea: function(id){
            console.log();
            return $http.get("http://localhost/firstprojectavi/index.php/area/findone?id="+id,{});
        },
        find: function(){
            console.log();
            return $http.get("http://localhost/firstprojectavi/index.php/zone/find");
        },
        findstate: function(){
            console.log();
            return $http.get("http://localhost/firstprojectavi/index.php/state/find");
        },
        findcity: function(){
            console.log();
            return $http.get("http://localhost/firstprojectavi/index.php/city/find");
        },
        findarea: function(){
            console.log();
            return $http.get("http://localhost/firstprojectavi/index.php/area/find");
        },
        createzone: function(name){
            console.log();
            return $http.get("http://localhost/firstprojectavi/index.php/zone/create?name="+name,{});
        },
        createstate: function(zone,name){
            console.log();
            return $http.get("http://localhost/firstprojectavi/index.php/state/create?zone="+zone+"&name="+name,{});
        },
        createcity: function(state,name){
            console.log();
            return $http.get("http://localhost/firstprojectavi/index.php/city/create?state="+state+"&name="+name,{});
        },
        createarea: function(area){
            console.log(area);
            return $http.get("http://localhost/firstprojectavi/index.php/area/create",{params:area});
        },
        deletezone: function(id){
            return $http.get("http://localhost/firstprojectavi/index.php/zone/delete?id="+id,{});
        },
        deletestate: function(id){
            return $http.get("http://localhost/firstprojectavi/index.php/state/delete?id="+id,{});
        },
        deletecity: function(id){
            return $http.get("http://localhost/firstprojectavi/index.php/city/delete?id="+id,{});
        },
        deletearea: function(id){
            return $http.get("http://localhost/firstprojectavi/index.php/area/delete?id="+id,{});
        },
        updatezone: function(data){
            return $http.get("http://localhost/firstprojectavi/index.php/zone/update",{params:data});
        },
        updatecity: function(data){
            return $http.get("http://localhost/firstprojectavi/index.php/city/update",{params:data});
        },
        updatearea: function(data){
            
            return $http.get("http://localhost/firstprojectavi/index.php/area/update",{params:data});
        },
        updatestate: function(data){
            
            return $http.get("http://localhost/firstprojectavi/index.php/state/update",{params:data});
        }
    }
    
});




                            