//var app = angular.module('flapperNews', []);
var app = angular.module('flapperNews', ['ui.router']);



app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/home.html',
            controller: 'MainCtrl',
            resolve: {
                postPromise: ['posts', function (posts) {
                    return posts.getAll();
                }]
            }
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
    '$scope','posts',
    function($scope , posts){

        this.currentPost = {}

        this.getPosts = function () {
            return posts.posts;
        };

        this.getPost = function (id) {
            return posts.getPost(id);
        };

        this.addPost = function () {
            if (!this.currentPost.title || this.currentPost.title == '') {
                return;
            }
            this.currentPost.upvotes = 0;
            posts.addPost(this.currentPost);
            this.currentPost = {};
        };

        this.incrementUpvote = function (post) {
            posts.incrementUpvote(post);
        };






     /*   $scope.test = 'Hello world!';

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
*/




    }]);




app.factory('posts', ['$http', function ($http) {
    var service = {
        posts: []
    };

    service.getAll = function () {
        return $http.get('/posts')
            .success(function (data) {
                angular.copy(data, service.posts);
            });
    };

    service.getPost = function (id) {
        return $http.get('/posts/' + id)
            .then(function (res) {
                return res.data;
            });
    };

    service.addPost = function (post) {
        return $http.post('/posts', post, {

        }).success(function (data) {
            service.posts.push(data);
        });
    };

    service.incrementUpvote = function (post) {
        return $http.put('/posts/' + post._id + '/upvote', null, {
        }).success(function (data) {
            post.upvotes += 1;
        });
    };

    service.addComment = function (post, comment) {
        return $http.post('/posts/' + post._id + '/comments', comment, {
        }).success(function (data) {
            post.comments.push(data);
        });
    };

    service.incrementUpvoteComment = function (post, comment) {
        return $http.put('/posts/' + post._id + '/comments/' + comment._id + '/upvote', null, {
        }).success(function (data) {
            comment.upvotes += 1;
        })
            .error(function (err) {
                window.alert(err);
            });
    };

    return service;
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

