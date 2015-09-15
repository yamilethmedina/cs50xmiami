/*
The World Translator

Write a function named helloWorld that:
- takes 1 argument, a language code (e.g. "es", "de", "en")
- returns "Hello, World" for the given language, for at least 3 languages.
  It should default to returning English.

Call that function for each of the supported languages
and log the result to make sure it works.
*/

// write your solution here...

function helloWorld(languageCode) {

  if (languageCode == "es")
  {
    console.log("Hola, Mundo!");
  }
  else if (languageCode == "en")
  {
    console.log("Hello, World!");
  }
  else if (languageCode == "de")
  {
    console.log("Hallo, Welt!");
  }
  else
  {
    console.log("Hello, World!");
  }
}

helloWorld("en");
helloWorld("es");
helloWorld("de");
helloWorld("ru");
