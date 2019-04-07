/**
 *
 *
 * 016 - Chunky
 *
 * @param {Array} arr
 * @param {Number} size
 */

// Write a function that splits an array (first argument) into groups the length of
// 'size' (second argument), return the array as a two-dimensional array

// Function starter code
function chunkArrayInGroups(arr, size) {
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

// basic arrow function solution
let chunkArrayInGroups = (arr, size) => {
  let newArray = [];

  for (let i = 0; i < arr.length; i += size) {
    newArray.push(newArray.slice(i, i + size));
  }

  return newArray;
};

// First, we create an empty array arr2 where we will store our ‘chunks’.
// The for loop starts at zero, increments by size each time through the loop, and stops when it reaches arr.length.
// Note that this for loop does not loop through arr. Instead, we are using the loop to generate numbers we can
// use as indices to slice the array in the right locations.
// Inside our loop, we create each chunk using arr.slice(i, i+size), and add this value to arr2 with arr2.push().
// Finally, we return the value of arr2.

// arrow function solution 2

let chunkArrayInGroups = (arr, size) => {
  let _2dArray = [];

  while (arr.length) {
    _2dArray.push(arr.splice(0, size));
  }

  return _2dArray;
};

// Firstly, we create a variable. newArr is an empty array which we will push to.
// Our while loop loops until the length of the array in our test is not 0.
// Inside our loop, we push to the newArr array using arr.splice(0, size).
// For each iteration of while loop, it deletes size number of elements from the front of arr and
// push them as an array to newArr.
// Finally, we return the value of newArr.
