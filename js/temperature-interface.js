var Weather = require('./../js/weather.js').weatherModule;

var displayKelvin = function(city, tempData) {
  $('.showTemp').append("The temperature in " + city + " is " + tempData + "K");
}

var displayCelsius = function(city, tempData) {
  tempData = tempData - 273.15;
  $('.showTemp').append("The temperature in " + city + " is " + tempData + "C");
}

var displayFahrenheit = function(city, tempData) {
  tempData = (tempData * 1.8) - 459.67;
  $('.showTemp').append("The temperature in " + city + " is " + tempData + "F");
}




$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#temperatureLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");

    if ( $("input[name=degreetype]:checked").val() === 'kelvin' ) {
      currentWeatherObject.getTemperature(city, displayKelvin);
    } else if ( $("input[name=degreetype]:checked").val() === 'celsius' ) {
      currentWeatherObject.getTemperature(city, displayCelsius);
    } else if ( $("input[name=degreetype]:checked").val() === 'fahrenheit' ) {
      currentWeatherObject.getTemperature(city, displayFahrenheit);
    }




// End Document Ready and Click
  });
});
