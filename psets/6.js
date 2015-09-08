/*

MixUp

Create a function called mixUp. It should take in two strings,
and return the concatenation of the two strings (separated by a space) slicing out
and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long.

For example:
  mixUp('mix', pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
*/

function mixUp(a, b) {
  // write your solution here...



  var newCharsZero = a.slice(0, 2);
  var newCharsOne = b.slice(0, 2);

  /* str = str.split('');
str[3] = 'h';
str = str.join(''); */

  a[0] = newCharsOne[0];
  a[1] = newCharsOne[1];

  b[0] = newCharsZero[0];
  b[1] = newCharsZero[1];

/*  var newWordZero = a.replace()

  var newWordOne = */
  a = a.substr(2);

  a = newCharsOne.concat(a);

  b = b.substr(2);

  b = newCharsZero.concat(b);


  console.log(a + ", " + b);
}

mixUp('dog', 'dinner');
mixUp('mix', 'pod');
