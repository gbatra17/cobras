angular.module('cobras')
.controller('AppCtrl', function($scope, $http) {
	$scope.name = '';
	$scope.age = 0;

	$scope.onClick = function(){

	$scope.data = {
	  name: $scope.name,
	  age: $scope.age
	};

	$http.post('/api/cobras', $scope.data)
	.success((cobras) => {
		console.log(cobras);
		$scope.successPost = 'Succesfully submitted!';
	})
	}

	$scope.onClick2 = function(){
		$http.get('/api/cobras')
		.success((cobras) => {
			$scope.cobras = cobras;
		})
	}
})
.component('app', {
	controller: 'AppCtrl',
	templateUrl: '../views/app.html'
})