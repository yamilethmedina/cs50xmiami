/*
Verbing

Create a function called verbing.

It should take a single argument, a string.
If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
in which case it should add 'ly' instead.
If the string length is less than 3, it should leave it unchanged.

For example:

  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'

*/

function verbing(word) {
  // write your solution here...
  if (word.length >= 3)
  {
    var substring = word.substring(word.length - 3, word.length);
    if (substring === 'ing')
      // end of word ends in -ing)
    {
      word = word + 'ly';
      // add -ly
    }
    else
    {
      word = word + word.slice(-1) + 'ing';
      // add -ing
    }
  }
  console.log(word);
}

verbing("swim");
verbing("swimming");
verbing("go");
