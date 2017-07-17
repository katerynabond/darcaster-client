
CurrentWeatherController.$inject = ['WeatherService', 'images']; //magic for us

function CurrentWeatherController(weather, images){
      this.lat = 0;
      this.lon = 0;
      this.location = 'city';
      this.imageLookup = images.lookup;

      //functions
      this.search = function search(){
        weather.getCurrentWeather(this.lat, this.lon)
               .then(currentWeather => this.weatherData = currentWeather);
      }; //is a promise
      this.searchByCity = function searchByCity(){
        weather.getCurrentWeatherByLocation(this.location)
               .then(currentWeather => this.weatherData = currentWeather);

      };

}
module.exports = CurrentWeatherController;
