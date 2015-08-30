//angular.js example for factory vs service

//var app = angular.module('myApp', ['CalculatorService']);
var app = angular.module('myApp', []);

app.run(function($rootScope) {
    $rootScope.name = "Angular tutorial!!!";
});

app.service('Calculator', function () {
    this.square = function (a) { return a*a};

});

app.controller('CalculatorController', function ($scope, Calculator , StringManipulation) {

    $scope.name = "siva";

    $scope.findSquare = function () {
        $scope.answer = Calculator.square($scope.number);
    }

    $scope.findReverse = function(name){
        $scope.reversename = StringManipulation.reverseString(name);
    }


});


app.factory('StringManipulation', function () {

    var r=  function reverse(s) {
        var o = '';
        for (var i = s.length - 1; i >= 0; i--)
            o += s[i];
        return o;
    }

    return{
        reverseString: function reverseString(name)
        {
            return r(name);
        }
    }

});