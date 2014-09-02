var appZone = angular.module('appZone', ['zoneRest', 'distributorRest', 'ngRoute']);

appZone.controller('zone', ['$scope', 'zoneRest',
  function ($scope, zoneRest) {
        $scope.demo = "hello";
        // $scope.visible=false;
        $scope.visibletable = true;

        var zone = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        zoneRest.find().success(zone);

        var updated = function (data, status) {
            zoneRest.find().success(zone);
            $scope.visibletable = true;
            $scope.updatezone = false;
            toastr.success("Zone Updated");
        };

        ondelete = function (data, status) {
            toastr.success("Zone Deleted");
            zoneRest.find().success(zone);
        };

        $scope.delete = function (id) {
            zoneRest.deletezone(id).success(ondelete);
        };

        $scope.showupdate = function (id, name) {
            $scope.visibletable = false;
            $scope.updatezone = true;
            $scope.zoneid = id;
            $scope.zone = {
                name: name
            };
        };


        $scope.update = function (name) {
            $scope.id = $scope.zoneid;
            zoneRest.updatezone($scope.zoneid, name).success(updated);
        };


  }]);

appZone.controller('state', ['$scope', 'zoneRest',
  function ($scope, zoneRest) {
        $scope.demo = "hello";
        // $scope.visible=false;
        $scope.visibletable = true;

        var zone = function (data, status) {
            console.log(data);

            $scope.getzone = data;

        };
        zoneRest.find().success(zone);

        var state = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        zoneRest.findstate().success(state);

        var updated = function (data, status) {
            zoneRest.findstate().success(state);
            $scope.visibletable = true;
            $scope.updatestate = false;
            toastr.success("state Updated");
        };

        ondelete = function (data, status) {
            toastr.success("State Deleted");
            zoneRest.findstate().success(state);
        };

        $scope.delete = function (id) {
            // $scope.usermessage=id;
            zoneRest.deletestate(id).success(ondelete);
        };

        $scope.showupdate = function (id, zone, name) {
            $scope.visibletable = false;
            $scope.updatestate = true;
            $scope.stateid = id;
            // $scope.usermessage=id;
            $scope.state = {
                zone: zone,
                name: name
            };
        };


        $scope.update = function (name) {
            zoneRest.updatestate($scope.stateid, name).success(updated);
        };


  }]);

appZone.controller('createstate', ['$scope', 'zoneRest',
  function ($scope, zoneRest) {
        //$scope.demo=$scope.zone;
        $scope.demo = "INDUSTRIAL";
        var zone = function (data, status) {
            console.log(data);

            $scope.getzone = data;

        };
        zoneRest.find().success(zone);


        var saved = function (data, status) {
            console.log(data);
            // $scope.demo="saved";
            toastr.success("State Saved");
        };

        $scope.create = function (name) {
            console.log(zone);
            $scope.zone = "";
            zoneRest.createstate($scope.zone, name).success(saved);
        };


  }]);


appZone.controller('city', ['$scope', 'zoneRest',
  function ($scope, zoneRest) {
        $scope.demo = "hello";
        // $scope.visible=false;
        $scope.visibletable = true;
        var state = function (data, status) {
            console.log(data);

            $scope.getstate = data;

        };
        zoneRest.findstate().success(state);

        var city = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        zoneRest.findcity().success(city);

        var updated = function (data, status) {
            zoneRest.findcity().success(city);
            $scope.visibletable = true;
            $scope.updatecity = false;
            toastr.success("City Updated");
        };

        ondelete = function (data, status) {
            toastr.success("City Deleted");
            zoneRest.findcity().success(city);
        };

        $scope.delete = function (id) {
            // $scope.usermessage=id;
            zoneRest.deletecity(id).success(ondelete);
        };

        $scope.showupdate = function (id, state, name) {
            $scope.visibletable = false;
            $scope.updatecity = true;
            $scope.cityid = id;
            // $scope.usermessage=id;
            $scope.city = {
                zone: state,
                name: name
            };
        };


        $scope.update = function (name) {
            zoneRest.updatecity($scope.cityid, name).success(updated);
        };


  }]);

appZone.controller('createzone', ['$scope', 'zoneRest',
  function ($scope, zoneRest) {

        $scope.demo = "create zone";

        var saved = function (data, status) {
            console.log(data);
            // $scope.demo="saved";
            toastr.success("Zone Saved");
        };

        $scope.create = function (name) {
            zoneRest.createzone(name).success(saved);
        };


  }]);

appZone.controller('createcity', ['$scope', 'zoneRest',
  function ($scope, zoneRest) {
        //$scope.demo=$scope.zone;
        //$scope.demo="INDUSTRIAL";
        var state = function (data, status) {
            console.log(data);

            $scope.getstate = data;

        };
        zoneRest.findstate().success(state);


        var saved = function (data, status) {
            console.log(data);
            // $scope.demo="saved";
            toastr.success("city Saved");
        };

        $scope.create = function (name) {
            //console.log(zone);
            $scope.state = "4";
            zoneRest.createcity($scope.state, name).success(saved);
        };


  }]);

appZone.controller('area', ['$scope', 'zoneRest', 'distributorRest',
  function ($scope, zoneRest, distributorRest, $location, $routeParams) {
        $scope.demo = "hello";
        // $scope.visible=false;
        $scope.visibletable = true;

        var city = function (data, status) {
            console.log(data);

            $scope.getcity = data;

        };
        zoneRest.findcity().success(city);

        var distributor = function (data, status) {
            console.log(data);
            // $scope.find=data;

            $scope.getdist = data;

        };
        distributorRest.find().success(distributor);

        var area = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        zoneRest.findarea().success(area);

        var updated = function (data, status) {
            zoneRest.findarea().success(area);
            $scope.visibletable = true;
            $scope.updatearea = false;
            toastr.success("Area Updated");
        };

        ondelete = function (data, status) {
            toastr.success("Area Deleted");
            zoneRest.findarea().success(area);
        };

        $scope.delete = function (id) {
            // $scope.usermessage=id;
            zoneRest.deletearea(id).success(ondelete);
        };

        $scope.showupdate = function (id, city, name, dist) {
            // $scope.visibletable = false;
            // $scope.updatearea = true;
            $scope.areaid = id;
            // $scope.usermessage=id;$routeParams;
            console.log($routeParams);
            $location.url('/zone/area/edit/' + $scope.areaid);

            $scope.area = {
                city: city,
                name: name,
                dist: dist
            };
        };


        $scope.update = function (name) {
            zoneRest.updatearea($scope.areaid, name).success(updated);
        };


  }]);


appZone.controller('createarea',
    function ($scope, zoneRest, distributorRest, $location) {
        //$scope.demo=$scope.zone;
        //$scope.demo="INDUSTRIAL";
        $scope.area={id:"",name:"",distributor:""};
        var city = function (data, status) {
            console.log(data);
            $scope.getcity = data;
        };
        zoneRest.findcity().success(city);

        var distributor = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.getdist = data;
        };
        distributorRest.find().success(distributor);

        var saved = function (data, status) {
            console.log(data);
            $location.url("/zone/area");
            // $scope.demo="saved";
            toastr.success("Area Saved");

        };

        $scope.create = function (area) {
            //console.log(zone);


            zoneRest.createarea(area).success(saved);
        };


    });

/*########################################################Update###################################################################*/


appZone.controller('editarea',
    function ($scope, zoneRest, distributorRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

        var findarea = function (data, status) {
            //  $scope.area.city=data.city;
            $scope.area = {};
            // $scope.area.city="3";
            $scope.area = data;
            $scope.alldata = data;
            //$scope.demo=$scope.alldata[{id}];
        };

        var city = function (data, status) {
            console.log(data);

            $scope.getcity = data;
            distributorRest.find().success(distributor);

        };
        zoneRest.findcity().success(city);

        var distributor = function (data, status) {
            console.log(data);
            // $scope.find=data;

            $scope.getdist = data;
            zoneRest.findonearea($scope.value).success(findarea);
        };


        var area = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        zoneRest.findarea().success(area);

        var updated = function (data, status) {
            zoneRest.findarea().success(area);
           // $scope.visibletable = true;
           // $scope.updatearea = false;
             $location.url("/zone/area");
            toastr.success("Area Updated");
        };


        $scope.showupdate = function (id, city, name, dist) {
            $scope.visibletable = false;
            $scope.updatearea = true;
            $scope.areaid = id;
            // $scope.usermessage=id;
            $scope.area = {
                city: city,
                name: name,
                dist: dist
            };
        };


        $scope.update = function (data) {
            zoneRest.updatearea(data).success(updated);
        };


    });

/*########################################################Update###################################################################*/

appZone.controller('deletearea',
    function ($scope, zoneRest, distributorRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

        var findarea = function (data, status) {
            //  $scope.area.city=data.city;
            $scope.area = {};
            // $scope.area.city="3";
            $scope.area = data;
            $scope.alldata = data;
            //$scope.demo=$scope.alldata[{id}];
        };

        var city = function (data, status) {
            console.log(data);

            $scope.getcity = data;
            distributorRest.find().success(distributor);

        };
        zoneRest.findcity().success(city);

        var distributor = function (data, status) {
            console.log(data);
            // $scope.find=data;

            $scope.getdist = data;
            zoneRest.findonearea($scope.value).success(findarea);
        };


        var area = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        zoneRest.findarea().success(area);
        
         ondelete = function (data, status) {
            toastr.success("Area Deleted");
            //zoneRest.findstate().success(state);
             $location.url("/zone/area");
        };
        
        $scope.delete = function (id) {
            // $scope.usermessage=id;
            zoneRest.deletearea($scope.value).success(ondelete);
        };

    });


/*########################################################Update###################################################################*/


appZone.controller('editcity',
    function ($scope, zoneRest, distributorRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

        var findcity = function (data, status) {
            //  $scope.area.city=data.city;
            $scope.city = {};
            // $scope.area.city="3";
            $scope.city = data;
            $scope.alldata = data;
            //$scope.demo=$scope.alldata[{id}];
        };

        var state = function (data, status) {
            console.log(data);

            $scope.getstate = data;
            zoneRest.findonecity($scope.value).success(findcity);

        };
        zoneRest.findstate().success(state);

        var city = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        zoneRest.findcity().success(city);
        
        var updated = function (data, status) {
             zoneRest.findcity().success(city);
           // $scope.visibletable = true;
           // $scope.updatearea = false;
             $location.url("/zone/city");
            toastr.success("City Updated");
        };


        $scope.showupdate = function (id, city, name, dist) {
            $scope.visibletable = false;
            $scope.updatearea = true;
            $scope.areaid = id;
            // $scope.usermessage=id;
            $scope.area = {
                city: city,
                name: name,
                dist: dist
            };
        };


        $scope.update = function (data) {
            zoneRest.updatecity(data).success(updated);
        };


    });


/*########################################################Update###################################################################*/

appZone.controller('deletecity',
    function ($scope, zoneRest, distributorRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

        var findcity = function (data, status) {
            //  $scope.area.city=data.city;
            $scope.city = {};
            // $scope.area.city="3";
            $scope.city = data;
            $scope.alldata = data;
            //$scope.demo=$scope.alldata[{id}];
        };

        var state = function (data, status) {
            console.log(data);

            $scope.getstate = data;
            zoneRest.findonecity($scope.value).success(findcity);

        };
        zoneRest.findstate().success(state);

        var city = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };  
        zoneRest.findcity().success(city);
        
        
        
         ondelete = function (data, status) {
            toastr.success("City Deleted");
            //zoneRest.findstate().success(state);
             $location.url("/zone/city");
        };
        
        $scope.delete = function (id) {
            // $scope.usermessage=id;
            zoneRest.deletecity($scope.value).success(ondelete);
        };

    });


/*########################################################Update###################################################################*/


appZone.controller('editstate',
    function ($scope, zoneRest, distributorRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

        var findstate = function (data, status) {
            //  $scope.area.city=data.city;
            $scope.state = {};
            // $scope.area.city="3";
            $scope.state = data;
            $scope.alldata = data;
            //$scope.demo=$scope.alldata[{id}];
        };

        var zone = function (data, status) {
            console.log(data);

            $scope.getzone = data;
            zoneRest.findonestate($scope.value).success(findstate);

        };
        zoneRest.find().success(zone);
        
        var state = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        zoneRest.findstate().success(state);
        
        var updated = function (data, status) {
             zoneRest.findstate().success(state);
           // $scope.visibletable = true;
           // $scope.updatearea = false;
             $location.url("/zone/state");
            toastr.success("State Updated");
        };


        $scope.update = function (data) {
            zoneRest.updatestate(data).success(updated);
        };


    });

/*########################################################Update###################################################################*/

appZone.controller('deletestate',
    function ($scope, zoneRest, distributorRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

        var findstate = function (data, status) {
            //  $scope.area.city=data.city;
            $scope.state = {};
            // $scope.area.city="3";
            $scope.state = data;
            $scope.alldata = data;
            //$scope.demo=$scope.alldata[{id}];
        };

        var zone = function (data, status) {
            console.log(data);

            $scope.getzone = data;
            zoneRest.findonestate($scope.value).success(findstate);

        };
        zoneRest.find().success(zone);
        
        var state = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        zoneRest.findstate().success(state);
        
         ondelete = function (data, status) {
            toastr.success("City Deleted");
            //zoneRest.findstate().success(state);
             $location.url("/zone/city");
        };
        
        $scope.delete = function (id) {
            // $scope.usermessage=id;
            zoneRest.deletecity($scope.value).success(ondelete);
        };

    });

/*########################################################Update###################################################################*/


appZone.controller('editzone',
    function ($scope, zoneRest, distributorRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

        var findzone = function (data, status) {
            //  $scope.area.city=data.city;
            $scope.zone = {};
            // $scope.area.city="3";
            $scope.zone = data;
            $scope.alldata = data;
            //$scope.demo=$scope.alldata[{id}];
        };

            zoneRest.findonezone($scope.value).success(findzone);

        
        var zone = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        zoneRest.find().success(zone);
        
        var updated = function (data, status) {
             zoneRest.find().success(zone);
           // $scope.visibletable = true;
           // $scope.updatearea = false;
             $location.url("/zone/zone");
            toastr.success("Zone Updated");
        };


        $scope.update = function (data) {
            zoneRest.updatezone(data).success(updated);
        };


    });

/*########################################################delete###################################################################*/


appZone.controller('deletezone',
    function ($scope, zoneRest, distributorRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

        var findzone = function (data, status) {
            //  $scope.area.city=data.city;
            $scope.zone = {};
            // $scope.area.city="3";
            $scope.zone = data;
            $scope.alldata = data;
            //$scope.demo=$scope.alldata[{id}];
        };

            zoneRest.findonezone($scope.value).success(findzone);

        
        var zone = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        zoneRest.find().success(zone);
        
        ondelete = function (data, status) {
            toastr.success("Zone Deleted");
            //zoneRest.findstate().success(state);
             $location.url("/zone/zone");
        };
        
        $scope.delete = function (id) {
            // $scope.usermessage=id;
            zoneRest.deletezone($scope.value).success(ondelete);
        };
    });
