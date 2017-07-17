/*jshint esversion: 6*/
const clearDay = require('../images/clear-day.png');
const partlyCloudyDay = require('../images/partly-cloudy-day.svg');
const rain = require('../images/rain.svg');

ImageService.$inject = [];

function ImageService(){
  const imageLookup = {
    'clear-day': clearDay,
    'partly-cloudy-day': partlyCloudyDay,
    'rain': rain
  };

  return {
    lookup: imageLookup,
  };
}

module.exports = ImageService;
