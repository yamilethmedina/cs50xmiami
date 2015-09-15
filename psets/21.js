/*
The Recipe Card

Never forget another recipe!

- Create an object to hold information on your favorite recipe. It should have
  properties for title (a string), servings (a number),
  and ingredients (an array of strings).

- On separate lines (one console.log statement for each), log the recipe
  information so it looks like:
    Mole
    Serves: 2
    Ingredients:
    cinnamon
    cumin
    cocoa
*/

// write your solution here...

var tandooriChicken = {title: "Tandoori Chicken", servings: "4", ingredients: ["chicken breast", "yogurt", "curry powder"]}

console.log(tandooriChicken["title"]);
console.log("Serves: " + tandooriChicken["servings"]);
console.log("Ingredients:");
console.log(tandooriChicken["ingredients"][0]);
console.log(tandooriChicken["ingredients"][1]);
console.log(tandooriChicken["ingredients"][2]);
