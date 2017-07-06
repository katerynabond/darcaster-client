const angular = require('angular');

//create our application
const app = angular.module('darcaster-client', []); //setter syntax

//
app.controller('MainController', MainController);

MainController.$inject = ['$scope'];

function MainController($scope){
  $scope.message = 'hello from angular';
}
