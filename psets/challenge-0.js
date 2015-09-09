/*
The Calculator

- Write a function called squareNumber that will take one argument (a number),
  square that number, and return the result.
  It should also log a string like "The result of squaring the number 3 is 9."

- Write a function called halfNumber that will take one argument (a number),
  divide it by 2, and return the result.
  It should also log a string like "Half of 5 is 2.5.".

- Write a function called percentOf that will take two numbers,
  figure out what percent the first number represents of the second number,
  and return the result. It should also log a string like "2 is 50% of 4."

- Write a function called areaOfCircle that will take one argument (the radius),
  calculate the area based on that, and return the result.
  It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
  - Bonus: Round the result so there are only two digits after the decimal.

Write a function that will take one argument (a number) and perform the following operations,
  using the functions you wrote earlier:
  - Take half of the number and store the result.
  - Square the result of #1 and store that result.
  - Calculate the area of a circle with the result of #2 as the radius.
  - Calculate what percentage that area is of the squared result (#3).
*/

// write your solution here...
var squareNumber = function(number) {
  var numberSquared = number * number;
  var squareResult = "The result of squaring the number " + number + " is " + numberSquared + ".";
  console.log(squareResult);
  return numberSquared;
}

squareNumber(3);

var halfNumber = function(number) {
  var numberHalved = number / 2;
  var halfResult =  "Half of " + number + " is " + numberHalved + ".";
  console.log(halfResult);
  return numberHalved;
}

halfNumber(5);

var percentOf = function(number1, number2) {

  var result = (number1 / number2) * 100;
  var percentText = number1 + " is " + result + "% of " + number2 + ".";
  console.log(percentText);
  return result;
}

percentOf(2, 4);

var areaOfCircle = function(radius) {
  var area = 3.14 * (radius * radius);
  var areaResult = "The area for a circle with radius " + radius + " is " + area + "."
  console.log(areaResult);
  return area;
}

areaOfCircle(6);


var math = function(number) {

  var half = halfNumber(number);
  console.log(half);
  var square = squareNumber(half);
  console.log(square);
  var area = areaOfCircle(square);
  console.log(area);
  var percent = percentOf(area, square);
  console.log(percent);
}

math(30);
