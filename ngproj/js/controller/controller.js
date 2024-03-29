//var phonecatApp = angular.module('phonecatApp', []);
//
//phonecatApp.controller('PhoneListCtrl', function ($scope) {
//    $scope.phones = [
//        {'name': 'Nexus S',
//            'snippet': 'Fast just got faster with Nexus S.',
//            'age': 1},
//        {'name': 'Motorola XOOM™ with Wi-Fi',
//            'snippet': 'The Next, Next Generation tablet.',
//            'age': 2},
//        {'name': 'MOTOROLA XOOM™',
//            'snippet': 'The Next, Next Generation tablet.',
//            'age': 3}
//    ];
//
//    $scope.orderProp = 'age';
//});



//
//var phonecatApp = angular.module('phonecatApp', []);
//
//phonecatApp.controller('PhoneListCtrl', ['$scope', '$http',
//    function ($scope, $http) {
//        $http.get('phones/phones.json').success(function(data) {
//            $scope.phones = data;
//        });
//
//        $scope.orderProp = 'age';
//    }]);
//
//



'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', ['$Q']);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http','$Q',
    function($scope, $http ,$Q) {

        $http.get('phones/phones.json').success(function(data) {
            var phones = data;

            $scope.ph = phones;
        });

        $scope.orderProp = 'age';
    }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {
        $scope.phoneId = $routeParams.phoneId;
    }]);