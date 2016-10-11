var apiKey = require('./../.env').apiKey;

Weather = function(){

}

Weather.prototype.getHumidity = function(city, displayFunction) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayFunction(city, response.main.humidity);
  }).fail(function(error) {
    $('.showHumidity').text(error.responseJSON.message);
  });
}

Weather.prototype.getTemperature = function(city, displayFunction) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayFunction(city, response.main.temp);
  }).fail(function(error) {
    $('.showTemp').text(error.responseJSON.message);
  });
}

Weather.prototype.convertCelsius = function(temp) {
  return temp - 273.15;
}

Weather.prototype.convertFahrenheit = function(temp) {
// F = K × 1.8 - 459.67
  return (temp * 1.8) - 459.67;
}


exports.weatherModule = Weather;
