var loguserRest = angular.module('loguserRest', [])



.factory('loguserRest', function ($http) {
    
    return{
        
        find: function(){
            console.log();
            return $http.get("http://localhost/firstprojectavi/index.php/loguser/find");
        }
    }
    
});




                            