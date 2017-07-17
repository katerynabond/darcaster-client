
CurrentWeatherController.$inject = ['WeatherService', 'images']; //magic for us

function CurrentWeatherController(weather, images){
  this.lat = 0;
  this.lon = 0;
  this.imageLookup = images.lookup;

  //functions
  this.search = function search(){
    weather.getCurrentWeather(this.lat, this.lon)
           .then(currentWeather => this.weatherData = currentWeather); //is a promise
  };

}
module.exports = CurrentWeatherController;
