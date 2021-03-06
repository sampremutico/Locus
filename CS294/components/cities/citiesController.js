/*
	The code implementing the mdDialog is taken from the Angular
	website.
*/

'use strict';

cs142App.controller('CitiesController', ['$scope', '$routeParams', '$resource', '$mdDialog',
	function ($scope, $routeParams, $resource, $mdDialog) {
		var userId = $routeParams.userId;
		$scope.cities='';
		$scope.main.label = "Favorites View";
	    var localResource = $resource("http://localhost:3000/favoriteSecond");
	    localResource.query({}, function(favs) {
	    	$scope.userFavs = favs;
	    });
	$.ajaxSetup({
		async: false
	});
	$.getJSON('http://127.0.0.1:5000/cities',
    function(data, textStatus, jqXHR) {
		$scope.cities = data;
		console.log(data);
		//console.log("DATA: " + data);

  });
}]);


/*
function showDialog($event) {
       var parentEl = angular.element(document.body);
       $mdDialog.show({
         parent: parentEl,
         targetEvent: $event,
         template:
           '<md-dialog aria-label="List dialog">' +
           '  <md-dialog-content>'+
           '    <md-list>'+
           '      <md-list-item ng-repeat="item in items">'+
           '       <p>Number {{item}}</p>' +
           '      '+
           '    </md-list-item></md-list>'+
           '  </md-dialog-content>' +
           '  <md-dialog-actions>' +
           '    <md-button ng-click="closeDialog()" class="md-primary">' +
           '      Close Dialog' +
           '    </md-button>' +
           '  </md-dialog-actions>' +
           '</md-dialog>',
         locals: {
           items: $scope.items
         },
         controller: DialogController
      });
      function DialogController($scope, $mdDialog, items) {
        $scope.items = items;
        $scope.closeDialog = function() {
          $mdDialog.hide();
        }
      }
    }
  }
})(angular);/
*/