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

/*  new regExp([^^], gi);
  s = s.replace(/[^^]l/g, '') */

  /* var toReplace = s[0];
  s = s.replace(toReplace, '*') */

// var regexp = /(s[0])(*)/g; //Example

/* function escapeRegExp(string) {
    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
} */


// var find = s[0];
//if (s[0] === new RegExp(s[0], 'gi'))
// {
//   console.log("It worked");
// }
//   var re = new RegExp(s[0], 'gi');
//
// for (var i = 1; i < s.length; i++)
// {
//   //  console.log(s[i]);
//     if (false) //s[i] == re = new RegExp(s[0], 'gi')
//       {
//         s[i] = '*';
//         console.log(s[i]);
//       }

  var re = new RegExp(s[0], 'gi');
  var substring = s.substring(1, s.length);
  s = s[0] + substring.replace(re, '*');

//equals string = "something foo bar red  foo bar RED red pink   foo bar RED red"

  console.log(s);
}

fixStart("Sally sells seashells by the seashore");
