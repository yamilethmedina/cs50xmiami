/*

Not Bad

Create a function called notBad that takes a single argument, a string.
It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

For example:

  notBad('This dinner is not that bad!'): 'This dinner is good!'
  notBad('This movie is not so bad!'): 'This movie is good!'
  notBad('This dinner is bad!'): 'This dinner is bad!'

*/

function notBad(sentence) {
  // write your solution here...

  var not = sentence.indexOf('not');
  // sentence.search(/not/wi);
  // console.log(not);
  var bad = sentence.indexOf('bad');
  // sentence.search(/bad/wi);
  // console.log(bad);

  if (not === -1 && bad === -1 && not < bad)

  {

    // substitute not...bad with good

    var sentence1 = sentence.slice(0, not);
    var sentence2 = sentence.slice(bad + 3);
    sentence = sentence1 + 'good' + sentence2;
    // var substring = sentence.substring(not - 1, bad + 1);
    // console.log(substring);
    // sentence = str.replace(/substring/i, "good");
    console.log(sentence);

    // substring = "good";
    // console.log(substring);
  //  sentence = sentence + substring;


  }
  else
  {
    console.log(sentence);
  }
}

notBad("This new Justin Bieber song is not too bad.");
notBad("This ice cream is really bad.");
notBad("Stop, drop, shut em down open up shop.");
