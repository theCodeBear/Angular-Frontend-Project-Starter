'use strict';

angular.module('ngPrototype')

.controller('HomeCtrl', HomeCtrl);

HomeCtrl.$inject = [];

function HomeCtrl() {

  let vmHome = this;

  vmHome.header ='Home';


}