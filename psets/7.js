/*
FixStart

Create a function called fixStart.
It should take a single argument, a string, and return a version where all
occurences of its first character have been replaced with '*',
except for the first character itself. You can assume that the string is at least one character long.

For example:


REGEX!
fixStart('babble'): 'ba**le'
*/

function fixStart(s) {
  // write your solution here...

  new regExp([^^], gi);
  s = s.replace(/[^^]l/g, '')

  /* var toReplace = s[0];
  s = s.replace(toReplace, '*') */

  console.log(s);
}

fixStart("Gotta get him out my hair")
