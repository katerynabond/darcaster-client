HourlyWeatherController.$inject = ['WeatherService', 'images'];

function HourlyWeatherController(weather, images){
      this.lat = 0;
      this.lon = 0;
      this.location = 'city';
      this.imageLookup = images.lookup;

      //functions
      this.search = function search(){
        weather.getHourlyWeather(this.lat, this.lon)
               .then(hourlyWeather => this.weatherData = hourlyWeather);
      }; //is a promise
      this.searchByCity = function searchByCity(){
        weather.getHourlyWeatherByLocation(this.location)
               .then(hourlyWeather => this.weatherData = hourlyWeather);

      };

}
module.exports = HourlyWeatherController;
