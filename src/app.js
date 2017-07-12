const angular = require('angular');


//services
const WeatherService = require('./services/weather.service');

//components
const CurrentWeatherComponent = require('./components/current-weather/index.js');


//create our application
angular.module('darcaster-client', []); //setter syntax

angular.module('darcaster-client') //getter syntax ()
       .factory('WeatherService', WeatherService)
       .component('currentWeather', CurrentWeatherComponent);
