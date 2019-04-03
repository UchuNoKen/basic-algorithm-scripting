/**
 * 012 - Slice and Splice
 * @param {*} arr1
 * @param {*} arr2
 * @param {*} n
 */

// Use slice and splice to copy each element of the first array into the second
//   array in order
// Begin inserting elements at index 'n' of the second array
// Return result, input arrays should remain the same

// 1. Create a copy of the second array inside of the function. This will ensure that the
//    original array is not mutated. This can be done by using the slice operation on the second
//    array, and assign it to a variable.

// 2. Loop through all of the items in the first array. For each item in the first array splice
//    it into the copied array in the index given as argument.

// 3. Increment the index after performing the splice.

// Function starter code
function frankenSplice(arr1, arr2, n) {
  return arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// Basic solution
function frankenSplice(arr1, arr2, n) {
  let arr2Copy = arr2.slice();

  for (var i = 0; i < arr1.length; i++) {
    arr2Copy.splice(n, 0, arr1[i]);
    n++; // increment n as well
  }

  return arr2Copy;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// Our goal is to take all of the elements from arr1 and insert them into arr2 starting with
// index position n. At the same time we must ensurethat neither arr or arr2 have been mutated.

// Using the slice() function we can create an exact replica of arr2 and assign the result
// of the operation to a variable, arr2Copy.

// Now that we have an array that we can mutate on, we can iterate through every item in
// the first array. For each item in the first array we can use the splice() function to
// insert the item into index n of arr2Copy.

// We increment the index n by one. This will ensure that every item from the arr1 is inserted
// into arr2Copy in the proper index position.

// Finally, we return the arr2Copy and end the function.
