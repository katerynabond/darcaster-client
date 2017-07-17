const weatherData = require('../../mocks/weather.json');
WeatherService.$inject = ['$http'];

function WeatherService($http){
  const baseUrl = 'https://sheltered-badlands-87459.herokuapp.com/weather/';
  return{
    //label    function name
    getCurrentWeather: getCurrently,
    getCurrentWeatherByLocation: getCurrentlyByLocation

  };
function getCurrently(lat, lon){
  const url = `${baseUrl}${lat},${lon}`;
  return $http.get(url)
              .then(response => {
                return response.data.currently;
              });
}

function getCurrentlyByLocation(location){
  const url = `${baseUrl}location/${location}`;
  return $http.get(url)
              .then(response => {
                return response.data.currently;
              });
}



}



module.exports = WeatherService;
