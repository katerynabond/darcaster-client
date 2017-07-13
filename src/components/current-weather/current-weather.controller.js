const clearDay = require('../../images/clear-day.png');
MainController.$inject = ['WeatherService'];

function MainController(weather){

  this.message = 'hello from angular';
  this.imageLookup = {
    'clear-day': clearDay
  }

      weather.getCurrentWeather(29, -81)
              .then(currentWeather => this.weatherData = currentWeather);


}

module.exports = MainController;
