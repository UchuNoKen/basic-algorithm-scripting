/**
 *
 * 007 - Repeat String
 *
 * @param {*} str
 * @param {*} num
 */

// 1. You can’t edit strings, you will need to create a variable to store the new string.
// 2. Create a loop to repeat the code as many times as needed.
// 3. Make the variable created store the current value and append the word to it.

// Starting function code
function repeatStringNumTimes(str, num) {
  // repeat after me
  return str;
}

repeatStringNumTimes("abc", 3);

// basic solution <-----
// Create an empty string variable to store the repeated word.
// Use a while loop or for loop to repeat code as many times as needed according to num
// Then we just have to add the string to the variable created on step one, and increase or
// decrease num depending on how you set the loop.
// At the end of the loop, return the variable for the repeated word.

function repeatStringNumTimes(str, num) {
  var accumulatedStr = "";

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }

  return accumulatedStr;
}

// intermediate solution <-----
// This solution uses recursion.
// We check if num is negative and return an empty string if true.
// Then we check if it’s equal to 1 and in that case we return the string itself.
// If not, we add the string to a call of our function with num being decreased by 1,
// which will add another str and another.. until eventually num is 1. And return that
// whole process.

function repeatStringNumTimes(str, num) {
  if (num < 0) return "";
  if (num === 1) return str;
  else return str + repeatStringNumTimes(str, num - 1);
}

repeatStringNumTimes("abc", 3);

// arrow function
let repeatStringNumTimes = (str, num) => {
  if (num < 0) return "";
  if (num === 1) return str;
  else return str + repeatStringNumTimes(str, num - 1);
};

repeatStringNumTimes("abc", 3);

// advanced solution <-----
// This solution takes a declarative approach.
// It is similar to the third solution, except it uses the ternary operator form
// of the if statement.
function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : "";
}

repeatStringNumTimes("abc", 3);
