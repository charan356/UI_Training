//var app = angular.module('flapperNews', []);
var app = angular.module('flapperNews', ['ui.router']);



app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/home.html',
            controller: 'MainCtrl',
            //resolve: {
            //    postPromise: ['posts', function (posts) {
            //        return posts.getAll();
            //    }]
            //}
        })
        .state('posts', {
            url: '/posts/{id}',
            templateUrl: '/post.html',
            controller: 'PostsController as postsCtrl',
            resolve: {
                post: ['$stateParams', 'posts', function ($stateParams, posts) {
                    return posts.getPost($stateParams.id);
                }]
            }
        })
        .state('login', {
            url: '/login',
            templateUrl: '/login.html',
            controller: 'AuthController as authCtrl',
            onEnter: ['$state', 'auth', function ($state, auth) {
                if (auth.isLoggedIn()) {
                    $state.go('home');
                }
            }]
        })
        .state('register', {
            url: '/register',
            templateUrl: '/register.html',
            controller: 'AuthController as authCtrl',
            onEnter: ['$state', 'auth', function ($state, auth) {
                if (auth.isLoggedIn()) {
                    $state.go('home');
                }
            }]
        });

    $urlRouterProvider.otherwise('home');
}]);



app.controller('MainCtrl', [
    '$scope',
    function($scope){
        $scope.test = 'Hello world!';

        //$scope.posts = [
        //    'post 1',
        //    'post 2',
        //    'post 3',
        //    'post 4',
        //    'post 5'
        //];

      //  $scope.posts = posts.posts;
        $scope.siva="hello world";
        $scope.posts = [
            {title: 'post 1', upvotes: 5},
            {title: 'post 2', upvotes: 2},
            {title: 'post 3', upvotes: 15},
            {title: 'post 4', upvotes: 9},
            {title: 'post 5', upvotes: 4}
        ];

        $scope.posts.push({
            title: $scope.title,
            link: $scope.link,
            upvotes: 0,
            comments: [
                {author: 'Joe', body: 'Cool post!', upvotes: 0},
                {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
            ]
        });


        //$scope.addPost = function(){
        //   if(!$scope.title || $scope.title === '') { return; }
        //    $scope.posts.push({title: $scope.title, upvotes: 0});
        //    $scope.title = '';
        //};

        $scope.addPost = function(){
            if(!$scope.title || $scope.title === '') { return; }
            $scope.posts.push({
                title: $scope.title,
                link: $scope.link,
                upvotes: 0
            });
            $scope.title = '';
            $scope.link = '';
        };


        $scope.incrementUpvotes = function(post) {
            post.upvotes += 1;
        };





    }]);







app.controller('PostsCtrl', [
    '$scope',
    '$stateParams',
    'posts',
    function($scope, $stateParams, posts){

        $scope.post = posts.posts[$stateParams.id];
        $scope.addComment = function(){
            if($scope.body === '') { return; }
            $scope.post.comments.push({
                body: $scope.body,
                author: 'user',
                upvotes: 0
            });
            $scope.body = '';
        };

    }]);


app.controller('AuthController', ['$state', 'auth', function ($state, auth) {
    this.user = {};

    this.register = function () {
        auth.register(this.user)
            .error(function (error) {
                this.error = error;
            }).then(function () {
                $state.go('home');
            });
    };

    this.logIn = function () {
        auth.logIn(this.user)
            .error(function (error) {
                this.error = error;
            }).then(function () {
                $state.go('home');
            });
    };
}]);



app.controller('NavController', ['auth', function (auth) {
    this.isLoggedIn = auth.isLoggedIn;
    this.currentUser = auth.currentUser;
    this.logOut = auth.logOut;
}]);

