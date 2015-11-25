// Create the route module and name it routeApp
var routeApp = angular.module('routeApp',['ngRoute']);

// Config the routes
routeApp.config(function($routeProvider){
    $routeProvider
    // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller : 'mainCtrl'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller : 'aboutCtrl'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller : 'contactCtrl'
        });
});

// Create the controllers for the different pages below
routeApp.controller('mainCtrl', function($scope){
    // Create a message to display in the view
    $scope.message = 'omg I am just a home page';
});
routeApp.controller('aboutCtrl', function($scope){
    // Create a message to display in the view
    $scope.message = 'omg I am just an about page';
});
routeApp.controller('contactCtrl', function($scope){
    // Create a message to display in the view
    $scope.message = 'omg I am just a contact page';
});