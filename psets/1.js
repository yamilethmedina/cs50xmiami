/*
The Age Calculator

Forgot how old someone is? Calculate it!

- Store the current year in a variable.
- Store their birth year in a variable.
- Calculate their 2 possible ages based on the stored values.
- Output them to the screen like so: "They are either NN or NN", substituting the values.
*/

// write your solution here...


var currentyear = 2015;
var birthyear = 1986;

var age1 = currentyear - birthyear;
var age2 = currentyear - birthyear - 1;

console.log("This person is either " + age2 + " or " + age1 + " years old.");
