var guitarApp = angular.module('GuitarApp', ['ngRoute','templates', 'ngSlider', 'ngAudio', 'ngResource']);

guitarApp.config(function ($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'HomeCtrl'
        });
    $locationProvider.html5Mode(true);
});