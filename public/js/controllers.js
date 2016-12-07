var cars = angular.module("cars",['ngRoute', 'ngResource']);

// Define Cars class
cars.factory('CarModel', ['$resource', function($resource) {
    return $resource('/cars/:id', {id: '@id'}, {
        index: {method: 'GET', isArray: true, responseType: 'json'},
        show: {method: 'GET', responseType: 'json'},
        update: {method: 'PUT', responseType: 'json'
        }
    });
}]);

cars.controller('CarIndexController', ['$scope', 'CarModel', function($scope, CarModel) {
    //Grab all cars from the server
    $scope.cars = CarModel.index(function(res) {
        console.log(res)
    }, function(error) {
        // Error handler code
    });

    //Destroy method for deleting a forum
    $scope.destroy = function(index) {

        //Tell the server to remove the object
        CarModel.remove({id: $scope.cars[index].id}, function() {
            //If successful, remove it from our collection
            $scope.cars.splice(index, 1);
        });
    };

    $scope.discard = function () {
        alert('ti pidr');
        $location.path('/');
    };

}]);

cars.controller('CarCreateController', ['$scope', '$location', 'CarModel', function($scope, $location, CarModel) {
    //The save method which is called when the user wants to submit their data
    $scope.save = function() {

        //Create the car object to send to the back-end
        var car = new CarModel($scope.car);

        //Save the car object
        car.$save(function() {

            //Redirect us back to the main page
            $location.path('/');

        }, function(response) {

            //Post response objects to the view
            $scope.errors = response.data.errors;
        });
    }

    $scope.discard = function () {
        $location.path('/');
    }
}]);

//A controller to show the car
cars.controller('CarShowController', ['$scope', 'CarModel', '$routeParams', function($scope, CarModel, $routeParams) {
    //Grab the forum from the server
    $scope.car = CarModel.get({id: $routeParams.id})

    $scope.edit = function () {

        // Now call update passing in the ID first then the object you are updating
        CarModel.update({id: $scope.car.id}, $scope.car);

    }

    $scope.discar = function () {
        alert('ti pidr');
        $location.path('/');
    }

}]);

