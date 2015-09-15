/*
The Pluralizer

Write a function named pluralize that:
- takes 2 arguments, a noun and a number.
- returns the number and pluralized form, like "5 cats" or "1 dog".

Call that function for a few different scores and log the result to make sure it works.
- Bonus: Make it handle a few collective nouns like "sheep" and "geese".
*/

// write your solution here...

function pluralize(noun, number) {

  if (number > 1)
  {
    if (noun == "goose")
    {
      console.log(number + " geese");
    }

    else if (noun == "sheep")
    {
      console.log(number + " " + noun);
    }

    else
    {
    console.log(number + " " + noun + "s");
    }
  }
  else
  {

      console.log(number + " " + noun);

  }
}

pluralize("dog", 1);
pluralize("cat", 5);
pluralize("goose", 3);
pluralize("sheep", 1);
