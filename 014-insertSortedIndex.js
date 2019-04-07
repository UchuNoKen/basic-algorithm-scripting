/**
 *
 * 014 - Where do I Belong
 *
 * @param {Array} arr
 * @param {Number} num
 */

// Return the lowest index a value (second argument) should be inserted into an
// an array(first argument) once it has been sorted

// This can be a tricky problem to understand. You need to find where in the array
// a number should be inserted by order, and return the index where it should go.

// 1. The first thing to do is sort the array from lower to bigger, just to make the
//    code easier. This is where sort comes in, it needs a callback function so you have to
//    create it.

// 2. Once the array is sorted, then just check for the first number that is bigger and return the index.

// 3. If there is no index for that number then you will have to deal with that case too.

// Function starter code
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  return num;
}

getIndexToIns([40, 60], 50);

// Basic solution
function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num) return a;
  }

  return arr.length;
}

// First sort the array using .sort(callbackFuntion) to sort it by lowest to highest, from
// left to right. Then I use a for loop to compare the items in the array starting from the
// smallest one. When an item on the array is greater than the number we are comparing against,
// then we return the index as an integer.

// basic arrow function
let getIndexToIns = (arr, num) => {
  arr.sort((a, b) => {
    return a - b;
  });

  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num) return a;
  }

  return arr.length;
};

// intermediate solution
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort((a, b) => {
    return a - b;
  });
  return arr.indexOf(num);
}

// First we add the number num to the array using push() which adds it as the last element of
// the array. Then we use sort() with the callback function function(a, b){return a-b} to sort
// the numbers in ascending order. Lastly we return the postion or index of num in the array
// with the indexOf() function.

// chained solution

function getIndexToIns(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}

getIndexToIns([1, 3, 4], 2); // 1

// We use method-chaining to invoke one method after another to solve the problem in a single
// line. First we merge arr and num by invoking the arr.concat(num) method
// Then we use sort() with the callback arrow function (a, b) => return a-b to sort the numbers
// in ascending order
// Lastly we return the postion or index of num in the array with the indexOf() method
