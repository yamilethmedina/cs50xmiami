/*
The Geometrizer

Create 2 functions that calculate properties of a circle, using the definitions here:
http://math2.org/math/geometry/circles.htm

Create a function called calcCircumfrence:
- Pass the radius to the function.
- Calculate the circumference based on the radius, and output "The circumference is NN".

Create a function called calcArea:
- Pass the radius to the function.
- Calculate the area based on the radius, and output "The area is NN".
*/

// write your solution here...

function calcCircumfrence(radius) {

  var circumfrence = (radius * 2) * 3.141592;
  console.log("The circumfrence is " + circumfrence + ".");

}

function calcArea(radius) {

  var area = (radius * radius) * 3.141592;
  console.log("The area is " + area + ".");
}

calcCircumfrence(6);
calcArea(6);
