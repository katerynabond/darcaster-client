const angular = require('angular');


//services
const WeatherService = require('./services/weather.service');

//components
const CurrentWeatherComponent = require('./components/current-weather/index.js');




angular.module('darcaster-client', []) //setter syntax ()
       .factory('WeatherService', WeatherService)
       .component('currentWeather', CurrentWeatherComponent);
