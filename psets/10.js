/*
The Fortune Teller part 2

Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:
- takes 4 arguments: number of children, partner's name, geographic location, job title.
- outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
- Call that function 3 times with 3 different values for the arguments.
*/

// write your solution here...


function tellFortune(children, partner, location, job)

{
  console.log("You will be a " + job + " in " + location + ", and married to " + partner + " with " + children + " kids.");


}

tellFortune(3, "Nathan", "London", "computer programmer");
tellFortune(2, "Kevin", "Los Angeles", "web developer");
tellFortune(0, "Jenna", "New York City", "JavaScript coder");

// /*
// The Fortune Teller
//
// Why pay a fortune teller when you can just program your fortune yourself?
//
// - Store the following into variables:
//   number of children, partner's name, geographic location, job title.
//
// - Output your fortune to the screen like so:
//   "You will be a X in Y, and married to Z with N kids."
// */
//
// // write your solution here...
//
// var children = 5;
// var partner = "Kevin";
// var location = "London";
// var jobtitle = "programmer";
//
// console.log("You will have " + children + " kids with " + partner + " and live in " + location + " while working as a " + jobtitle + ".");
