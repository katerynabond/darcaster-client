const angular = require('angular');


//services
const WeatherService = require('./services/weather.service');
const ImageService = require('./services/image.service');
//components
const CurrentWeatherComponent = require('./components/current-weather/index');
const HourlyWeatherComponent = require('./components/hourly-weather/index');
//create our application
angular.module('darcaster-client', []) //setter syntax
       .factory('WeatherService', WeatherService)
       .factory('images', ImageService)
       .component('currentWeather', CurrentWeatherComponent)
       .component('hourlyWeather', HourlyWeatherComponent);
