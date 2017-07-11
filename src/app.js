const angular = require('angular');
const weatherData = require('../mocks/weather.json');


//create our application
angular.module('darcaster-client', []); //setter syntax

angular.module('darcaster-client') //getter syntax ()
       .controller('MainController', MainController);

MainController.$inject = [];

function MainController(){
  this.message = 'hello from angular';
  this.weatherData = weatherData.currently;
}
