var app = angular.module('myApp', []);

app.run(function($rootScope) {
    //$rootScope.name = "Angular tutorial!!!";
    // $rootScope.person.name ="root scope";
});

app.controller('ServiceController', ['$scope','githubService',
    function($scope, githubService) {
        $scope.$watch('username', function(newUsername) {
            githubService.events(newUsername)
                .success(function(data, status, headers) {
                    $scope.events = data.data;
                })
        });
    }]);



   app.factory('githubService', ['$http', function($http) {

        var doRequest = function(username, path) {
            return $http({
                method: 'JSONP',
                url: 'https://api.github.com/users/' + username + '/' + path + '?callback=JSON_CALLBACK'
            });
        }
        return {
            events: function(username) { return doRequest(username, 'events'); },
        };
    }]);