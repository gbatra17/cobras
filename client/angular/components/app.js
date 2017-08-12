angular.module('cobras')
.controller('AppCtrl', function($http) {
	this.name = '';
	this.age = 0;

	this.onClick = function(){

	this.data = {
	  name: this.name,
	  age: this.age
	};

	$http.post('/api/cobras', this.data)
	.success((cobras) => {
		console.log(cobras);
		this.successPost = 'Succesfully submitted!';
	})
	}

	this.onClick2 = function(){
		$http.get('/api/cobras')
		.success((cobras) => {
			this.cobras = cobras;
		})
	}
})
.component('app', {
	controller: 'AppCtrl',
	templateUrl: '../views/app.html'
})