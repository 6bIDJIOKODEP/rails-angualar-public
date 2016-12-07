'use strict';

cars.config(function ($routeProvider){
	$routeProvider.
	//when – specify a url fragment + view and controller used for this url
	when("/",{
		templateUrl:"./partials/cars.html",
		controller:"CarIndexController"
	})
    .when("/cars/new",{
		templateUrl:"./partials/new.html",
		controller:"CarCreateController"
	})     
	//:id – url parameter
	.when("/car/:id",{
		templateUrl:"./partials/car.html",
		controller:"CarShowController"
	})
	//if everything else fails
	.otherwise({
		redirectTo:"/"
	});
});