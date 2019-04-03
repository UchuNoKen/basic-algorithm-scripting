/**
 *
 * 010 - Boolean Primitive
 *
 *
 */

// Check if a value is a boolean primitive

// 1. You will need to check for the type of the parameter to see if it is a boolean.
// 2. To check for the type of a parameter, you can use typeof.
// 3. Since you must return true or false you can use if statements or just have it return
//    the boolean used for the if statement.

function boolWho(bool) {
  if (typeof bool === "boolean") {
    return true;
  }

  return false;
}

boolWho(null);

// concise arrow function
let boolWho = bool => (typeof bool === "boolean" ? true : false);
