/**
 * 002 - Reverse a String
 *
 * @param {*} str
 */

function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

reverseString("hello");

// arrow function

let reverseString = str => {
  return str
    .split("")
    .reverse()
    .join("");
};
