const clearDay = require('../../images/clear-day.png');

CurrentWeatherController.$inject = ['WeatherService']; //magic for us

function CurrentWeatherController(weather){
  this.lat = 0;
  this.lon = 0;
  this.imageLookup = {
    'clear-day': clearDay
  };
  //functions
  this.search = function search(){
    weather.getCurrentWeather(this.lat, this.lon)
           .then(currentWeather => this.weatherData = currentWeather); //is a promise
  };

}
module.exports = CurrentWeatherController;
