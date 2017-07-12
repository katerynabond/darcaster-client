const angular = require('angular');


//services
const WeatherService = require('./services/weather.service');


//create our application
angular.module('darcaster-client', []); //setter syntax

angular.module('darcaster-client') //getter syntax ()
       .controller('MainController', MainController)
       .factory('WeatherService', WeatherService);

MainController.$inject = ['WeatherService'];

function MainController(weather){
  
  this.message = 'hello from angular';
  this.weatherData = weather.getCurrentWeather();
}
