/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

Create a function called celsiusToFahrenheit:
- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".

Create a function called fahrenheitToCelsius:
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

// find a way to round results

// write your solution here...

function celsiusToFahrenheit(celciusTemp) {

  var farenheitTemp = ((celciusTemp * 9) / 5) + 32;
  console.log(celciusTemp + "°C is " + farenheitTemp + "°F.");

}

function fahrenheitToCelcius(farenheitTemp) {

  var celciusTemp = ((farenheitTemp - 32) * 5) / 9;
  console.log(farenheitTemp + "°F is " + celciusTemp + "°C.");

}

celsiusToFahrenheit(10);
fahrenheitToCelcius(80);
