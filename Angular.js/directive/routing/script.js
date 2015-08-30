var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'about.html',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'contact.html',
            controller  : 'contactController'
        });
    // use the HTML5 History API
    //$locationProvider.html5Mode(true);

});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'def!';
});

scotchApp.controller('aboutController', function($scope) {
    $scope.message = 'I am an about page.';
});

scotchApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us.';
});