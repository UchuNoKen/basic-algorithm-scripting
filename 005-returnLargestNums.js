/**
 * 005 - Return Largest Number from Array
 *
 * @param {*} arr
 */

// 1. You will need to keep track of the array with the answer and the largest number of each
//    sub-array.

// 2. You can work with multidimensional arrays by Array[Index][SubIndex]

// 3. Pay close attention to the timing of the storing of variables when working with loops

// Basic solution

function largestOfFour(arr) {
  var results = [];
  for (var n = 0; n < arr.length; n++) {
    var largestNumber = arr[n][0];
    for (var sb = 1; sb < arr[n].length; sb++) {
      if (arr[n][sb] > largestNumber) {
        largestNumber = arr[n][sb];
      }
    }

    results[n] = largestNumber;
  }

  return results;
}

// arrow function
let largestOfFour = arr => {
  let results = [];

  for (var n = 0; n < arr.length; n++) {
    let largestNumber = arr[n][0];
    for (var sb = 1; sb < arr[n].length; sb++) {
      if (arr[n][sb] > largestNumber) {
        largestNumber = arr[n][sb];
      }
    }

    results[n] = largestNumber;
  }

  return results;
};

// Intermediate solution

let largestFour = arr => {
  return arr.map(group => {
    return group.reduce((prev, current) => {
      return current > prev ? current : prev;
    });
  });
};

/* 
  we map all items within the main array to a new array using Array.prototype.map() and return 
    this array as the final result
  within each inner array, we reduce its contents down to a single value using Array.prototype.reduce()
    the callback function passed to the reduce method takes the previous value and the current value and 
  compares the two values
    if the current value is higher than the previous value we set it as the new previous value 
  for comparison with the next item within the array or returns it to the map method callback 
    if it’s the last item
*/

// Advanced Code Solution:
let largestOfFour = arr => {
  return arr.map(Function.apply.bind(Math.max, null));
};

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
