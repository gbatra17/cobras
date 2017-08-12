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
		this.mongoSuccessPost = 'Mongo Succesfully submitted!';
	})

	$http.post('/api/sqlcobras', this.data)
	.success((cobras) => {
		console.log(cobras);
		this.SQLSuccessPost = 'SQL Succesfully submitted!';
	})

	}

	this.onClick2 = function(){
		$http.get('/api/cobras')
		.success((cobras) => {
			this.mongoCobras = cobras;
		})
		$http.get('/api/sqlcobras')
		.success((cobras) => {
			this.SQLCobras = cobras;
		})
	}
})
.component('app', {
	controller: 'AppCtrl',
	templateUrl: '../views/app.html'
})