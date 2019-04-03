/**
 *
 * 011 - titleCaseSentence
 *
 *
 */

// Return string with first letter of each word capitalized

// 1. You should start by splitting the string into an array of words.
// 2. Split the sentence
// 3. You will need to create a new string with pieces of the previous
//    one and at the end merge everything into a single string again.
//    In replace method, give first argument as the position of the first
//    letter using charAt. For second argument write a function to return the
//    capitalized letter as the replacement.

// Starting function code
function titleCase(str) {
  return str;
}

titleCase("I'm a little tea pot");

// Basic solution

String.prototype.replaceAt = function(index, character) {
  return this.substr(0, index) + character + this.substr(index + character.length);
};

function titleCase(str) {
  let newTitle = str.split(" ");
  let updatedTitle = [];

  for (var st in newTitle) {
    updatedTitle[st] = newTitle[st]
      .toLowerCase()
      .replaceAt(0, newTitle[st].charAt[0].toUpperCase());
  }
  return updatedTitle.join(" ");
}

titleCase("I'm a little tea pot");

// We are modifying the replaceAt function using prototype to facilitate the use of the program.
// Split the string by white spaces, and create a variable to track the updated title. Then we
// use a loop to turn turn the first character of the word to uppercase and the rest to
// lowercase. by creating concatenated string composed of the whole word in lowercase with the
// first character replaced by it’s uppercase.

// Intermediate solution

function titleCase(str) {
  let convertToArray = str.LowerCase().split(" ");
  let result = convertToArray.map(function(val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });

  return result.join(" ");
}

titleCase("I'm a little teapot");

// We are making entire string lowercase and then converting it into array. Then we are
// using map function to replace the lowercase character with uppercase. Finally, we are
// returning the string using join method.

// Advanced solution
let titleCase = str => str.toLowerCase().replace(/(^|\s)\S/g, N => N.toUpperCase());

// The solution works by first lowercasing all the characters in the string and then only uppercasing the first character of each word.

// Lowercase the whole string using str.toLowerCase(). Replace every word’ first character to uppercase using .replace.

// Search for character at the beginning of each word i.e. matching any character following a
// space or matching the first character of the whole string, by using the following pattern.

// Regex explanation:

// Find all non-whitespace characters (\S)

// At the beginning of string (^)

// Or after any whitespace character (\s)

// The g modifier searches for other such word pattern in the whole string and replaces them.

// This solution works with national symbols and accented letters as illustrated by following
// examples international characters: ‘бабушка курит трубку’ // -> ‘Бабушка Курит Трубку’
// accented characters: ‘località àtilacol’ // -> ‘Località Àtilacol’
