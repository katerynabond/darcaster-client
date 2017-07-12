MainController.$inject = ['WeatherService'];

function MainController(weather){
  this.message = 'hello from angular';
  this.weatherData = weather.getCurrentWeather();
}

module.exports = MainController;
