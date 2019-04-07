/**
 *
 * 015 - Mutations
 *
 * @param {Array} arr
 *
 */

// Function starter code
function mutation(arr) {
  return arr;
}

mutation(["hello", "hey"]);

// my arrow function declarative solution
let mutation = arr => {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(character => {
      return arr[0].toLowerCase().indexOf(character) != -1;
    });
};

// Every will basically give you letter by letter to compare, which we do by using indexOf on the first string.
// indexOf will give you -1 if the current letter is missing. We check that not to be the case, for if this happens
// even once every will be false.
