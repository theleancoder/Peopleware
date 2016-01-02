var app = angular.module('peopleware', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('signup', {
      url: "/",
      templateUrl: "views/signup.html"
    })
    .state('login', {
      url: "/login",
      templateUrl: "/views/login.html"
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


});
