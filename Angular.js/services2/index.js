//angular.js example for factory vs service

//var app = angular.module('myApp', ['CalculatorService']);
var app = angular.module('myApp', []);

app.run(function($rootScope) {
    $rootScope.name = "Angular tutorial!!!";
   // $rootScope.person.name ="root scope";
});

app.controller('ParentController', function($scope) {
    $scope.name = "hellto";
    $scope.person = {greeted: false};
    $scope.person.name ="parent controller";
});

app.controller('ChildController', function($scope) {
    //$scope.sayHello = function() {
        //$scope.name = "chillto";
        $scope.name1 = "chillto1111";
        $scope.person.greeted = true;
        $scope.person.name ="child controller";
    //}
});

app.controller('ServiceController1', ['$scope', '$timeout', 'githubService',
    function($scope, $timeout, githubService) {
        // The same example as above, plus the $timeout service
        var timeout;
        $scope.$watch('username', function(newVal) {
            if (newVal) {
                if (timeout) $timeout.cancel(timeout);
                timeout = $timeout(function() {
                    githubService.events(newVal)
                        .success(function(data, status) {
                            $scope.events = data.data;
                        });
                }, 350);
            }
        });
    }]);


app.controller('ServiceController', ['$scope', 'githubService',
    function($scope, githubService) {
        // Watch for changes on the username property.
        // If there is a change, run the function
        $scope.$watch('username', function(newUsername) {
            // uses the $http service to call the GitHub API
            // and returns the resulting promise
            githubService.events(newUsername)
                .success(function(data, status, headers) {
                    // the success function wraps the response in data
                    // so we need to call data.data to fetch the raw data
                    $scope.events = data.data;
                })
        });
    }]);


app.factory('githubService', ['$http', function($http) {
        var githubUsername;
        var doRequest = function(githubUsername, path) {
            return $http({
                method: 'JSONP',
                url: 'https://api.github.com/users/' + githubUsername + '/' + path + '?callback=JSON_CALLBACK'
            });
        }
        return {

            events: function(username) { return doRequest(username, 'events'); },
            setUsername: function(newUsername) { githubUsername = newUsername; }
        };
    }]);