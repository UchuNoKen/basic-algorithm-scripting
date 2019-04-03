/**
 *
 * 009 - Finders Keepers
 *
 * @param {*} arr
 * @param {*} func
 */
// Create function to iterate an array(first arg) and return the first element
// that returns true(second argument).  If none pass, return undefined

// 1. Looking through the array can be done with a for loop.
// 2. num is passed to the function. We will need to set it to the elements we
//    want to check with the function.
// 3. Do not forget, if none of the numbers in the array pass the test, it should return undefined.

// Basic solution

function findElement(arr, func) {
  let num = 0;

  for (var i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

// Challenge asks us to look through array. This is done using a for loop.
// The num variable is being passed into the function, so we set it to each index in our array.
// The pre-defined function already checks each number for us, so if it is “true”, we return that num.
// If none of the numbers in the array pass the function’s test, we return undefined.
