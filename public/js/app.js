var app = angular.module('peopleware', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('signup', {
            url: "/",
            templateUrl: "views/signup.html",
            controller: SignupCtrl
        })
        .state('login', {
            url: "/login",
            templateUrl: "/views/login.html",
            controller: LoginCtrl
        })
        .state('home', {
            url: "/home",
            templateUrl: "/views/home.html"
        })
        .state('campaign', {
            url: "/campaign",
            templateUrl: "/views/campaign.html"
        })
        .state('profile', {
            url: "/profile",
            templateUrl: "/views/profile.html"
        });
    $urlRouterProvider.otherwise('/');

});

app.run(function($rootScope, $location, $route, AuthService) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
        if (AuthService.isLoggedIn() === false) {
            $location.path('/login');
        }
    });
});
