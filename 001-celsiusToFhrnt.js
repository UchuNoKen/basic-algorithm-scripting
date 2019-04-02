/**
 * 001 - Convert Celsius to Fahrenheit
 *
 * @param {*} celsius
 */

function convertToF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;

  return fahrenheit;
}

convertToF(30);

// using arrow function

let convertToF = celsius => {
  let fahrenheit = celsius * (9 / 5) + 32;

  return fahrenheit;
};

convertToF(30);
