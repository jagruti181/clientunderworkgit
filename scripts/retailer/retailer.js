var appRetailer = angular.module('appRetailer', ['retailerRest', 'ngRoute' ,'zoneRest', 'angularFileUpload']);



window.uploadUrl = 'upload.php';
	
appRetailer.controller( 'MyCtrl', function($scope, $http, $timeout, $upload) {
	$scope.usingFlash = FileAPI && FileAPI.upload != null;
	$scope.fileReaderSupported = window.FileReader != null && (window.FileAPI == null || FileAPI.html5 != false);
	$scope.uploadRightAway = true;
	$scope.changeAngularVersion = function() {
		window.location.hash = $scope.angularVersion;
		window.location.reload(true);
	};
	$scope.hasUploader = function(index) {
		return $scope.upload[index] != null;
	};
	$scope.abort = function(index) {
		$scope.upload[index].abort(); 
		$scope.upload[index] = null;
	};
	$scope.angularVersion = window.location.hash.length > 1 ? (window.location.hash.indexOf('/') === 1 ? 
			window.location.hash.substring(2): window.location.hash.substring(1)) : '1.2.20';
	$scope.onFileSelect = function($files) {
		$scope.selectedFiles = [];
		$scope.progress = [];
		if ($scope.upload && $scope.upload.length > 0) {
			for (var i = 0; i < $scope.upload.length; i++) {
				if ($scope.upload[i] != null) {
					$scope.upload[i].abort();
				}
			}
		}
		$scope.upload = [];
		$scope.uploadResult = [];
		$scope.selectedFiles = $files;
		$scope.dataUrls = [];
		for ( var i = 0; i < $files.length; i++) {
			var $file = $files[i];
			if ($scope.fileReaderSupported && $file.type.indexOf('image') > -1) {
				var fileReader = new FileReader();
				fileReader.readAsDataURL($files[i]);
				var loadFile = function(fileReader, index) {
					fileReader.onload = function(e) {
						$timeout(function() {
							$scope.dataUrls[index] = e.target.result;
						});
					}
				}(fileReader, i);
			}
			$scope.progress[i] = -1;
			if ($scope.uploadRightAway) {
				$scope.start(i);
			}
		}
	};
	
	$scope.start = function(index) {
		$scope.progress[index] = 0;
		$scope.errorMsg = null;
		if ($scope.howToSend == 1) {
			$scope.upload[index] = $upload.upload({
				url: uploadUrl,
				method: $scope.httpMethod,
				headers: {'my-header': 'my-header-value'},
				data : {
					myModel : $scope.myModel
				},
				/* formDataAppender: function(fd, key, val) {
					if (angular.isArray(val)) {
                        angular.forEach(val, function(v) {
                          fd.append(key, v);
                        });
                      } else {
                        fd.append(key, val);
                      }
				}, */
				/* transformRequest: [function(val, h) {
					console.log(val, h('my-header')); return val + '-modified';
				}], */
				file: $scope.selectedFiles[index],
				fileFormDataName: 'file'
			});
			$scope.upload[index].then(function(response) {
				$timeout(function() {
					$scope.uploadResult.push(response.data);
				});
			}, function(response) {
				if (response.status > 0) $scope.errorMsg = response.status + ': ' + response.data;
			}, function(evt) {
				// Math.min is to fix IE which reports 200% sometimes
				$scope.progress[index] = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
			});
			$scope.upload[index].xhr(function(xhr){
//				xhr.upload.addEventListener('abort', function() {console.log('abort complete')}, false);
			});
		} else {
			var fileReader = new FileReader();
            fileReader.onload = function(e) {
		        $scope.upload[index] = $upload.http({
		        	url: uploadUrl,
					headers: {'Content-Type': $scope.selectedFiles[index].type},
					data: e.target.result
		        }).then(function(response) {
					$scope.uploadResult.push(response.data);
				}, function(response) {
					if (response.status > 0) $scope.errorMsg = response.status + ': ' + response.data;
				}, function(evt) {
					// Math.min is to fix IE which reports 200% sometimes
					$scope.progress[index] = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
				});
            }
	        fileReader.readAsArrayBuffer($scope.selectedFiles[index]);
		}
	};
	
	$scope.dragOverClass = function($event) {
		var items = $event.dataTransfer.items;
		var hasFile = false;
		if (items != null) {
			for (var i = 0 ; i < items.length; i++) {
				if (items[i].kind == 'file') {
					hasFile = true;
					break;
				}
			}
		} else {
			hasFile = true;
		}
		return hasFile ? "dragover" : "dragover-err";
	};
} );



appRetailer.controller('createretailer',
  function ($scope,retailerRest,zoneRest,$location) {
      $scope.demo="image.jpg";
      var areaload = function (data, status) {
            console.log(data);
            $scope.getarea = data;
      };
        zoneRest.findarea().success(areaload);

      
      var retailerref=function(data,status){
          console.log(data);
          // $scope.find=data;
          if(data=="false")
          {
              $scope.usermessage="No data found";
              $scope.visibletable=false;
            
          }else
          {
              $scope.find=data;
          }
      };
      
      
      // $scope.dob="03-July-2014";
     // $scope.demo="create distributor";
      var retailer=function(data,status){
          console.log(data);
          retailerRest.find().success(retailerref);
         toastr.success("retailer Saved");
          $location.url("/retailer");
      };
      $scope.create=function(data){
        retailerRest.create(data).success(retailer);
      };
      
  }); 

appRetailer.controller('retailer',
  function ($scope,retailerRest) {
     
      var retailer=function(data,status){
          console.log(data);
          // $scope.find=data;
          if(data=="false")
          {
              $scope.usermessage="No data found";
              $scope.visibletable=false;
            
          }else
          {
              $scope.find=data;
          }
      };
      retailerRest.find().success(retailer);
      
  });                 

/*########################################################Update###################################################################*/


appRetailer.controller('editretailer',
    function ($scope, retailerRest, zoneRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);
      var retailerone=function(data,status){
          //  $scope.area.city=data.city;
            $scope.retailer = {};
            // $scope.area.city="3";
            $scope.retailer = data;
            $scope.alldata = data;
            //$scope.demo=$scope.alldata[{id}];
      };
      
      var area = function (data, status) {
            console.log(data);
            $scope.getarea = data;
            retailerRest.findone($scope.value).success(retailerone);

      };
        zoneRest.findarea().success(area);
        
        var updated = function (data, status) {
             retailerRest.findone($scope.value).success(retailerone);
           // $scope.visibletable = true;
           // $scope.updatearea = false;
             $location.url("/retailer");
            toastr.success("retailer Updated");
        };

        $scope.update = function (data) {
            retailerRest.update(data).success(updated);
        };


    });

/*########################################################detele###################################################################*/


appRetailer.controller('deleteretailer',
    function ($scope, retailerRest, zoneRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);
      var retailerone=function(data,status){
          //  $scope.area.city=data.city;
            $scope.retailer = {};
            // $scope.area.city="3";
            $scope.retailer = data;
            $scope.alldata = data;
            //$scope.demo=$scope.alldata[{id}];
      };
      
      var area = function (data, status) {
            console.log(data);
            $scope.getarea = data;
            retailerRest.findone($scope.value).success(retailerone);

      };
        zoneRest.findarea().success(area);
        
        ondelete = function (data, status) {
            toastr.success("Retailer Deleted");
            //zoneRest.findstate().success(state);
             $location.url("/retailer");
        };
        
        $scope.delete = function (id) {
            // $scope.usermessage=id;
            retailerRest.deleteretailer($scope.value).success(ondelete);
        };

    });
