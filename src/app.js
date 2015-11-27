'use strict';

angular.module('ngPrototype', ['ui.router'])

.config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider'];

function config($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: 'states/home/home.html',
    controller: 'HomeCtrl as vmHome'
  })


  $urlRouterProvider.otherwise('/');

};