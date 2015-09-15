/*
The Age Calculator part 2

Forgot how old you are? Calculate it!

Write a function named calculateAge that:
- takes 2 arguments: birth year, current year.
- calculates the 2 possible ages based on those years.
- outputs the result to the screen like so: "You are either NN or NN"
- Call the function three times with different sets of values.
- Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
*/

// write your solution here...

function calculateAge(birthYear) {

  var today = new Date();
  var currentYear = today.getFullYear();
  var possibleAge = currentYear - birthYear;


  console.log("You are either " + (possibleAge - 1) + " or " + possibleAge + " years old.");
}

calculateAge(1986);
calculateAge(1993);
calculateAge(2004);
