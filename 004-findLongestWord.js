/**
 * 004 - Find Longest Word
 *
 * @param {*} num
 */

// Split the string into an array of words

// Keep track globall of the greatest current length

// Get the length of elements on the array

// basic solution

function findLongestWordLength(str) {
  var words = str.split(" ");
  var maxLength = 0;

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}

// arrow function

let findLongestWordLength = str => {
  let words = str.split(" ");
  let maxLength = 0;

  words.forEach(word => {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  });

  return maxLength;
};

// intermediate solution

let findLongestWordLength = s => {
  // split the string
  return s.split(" ").reduce((x, y) => {
    // reduce the string by returning the word longer than y.length
    return Math.max(x, y.length);
  }, 0);
};

// advanced solution

function findLongestWordLength(str) {
  //split the string into individual words
  //(important!!, you'll see why later)
  str = str.split(" ");

  //str only has 1 element left that is the longest element,
  //return the length of that element
  if (str.length == 1) {
    return str[0].length;
  }

  //if the first element's length is greater than the second element's (or equal)
  //remove the second element and recursively call the function)
  if (str[0].length >= str[1].length) {
    str.splice(1, 1);
    return findLongestWordLength(str.join(" "));
  }

  //if the second element's length is greater thant the first element's start
  //call the function past the first element
  if (str[0].length <= str[1].length) {
    // from the first element to the last element inclusive.
    return findLongestWordLength(str.slice(1, str.length).join(" "));
  }
}
//     for(var i = 0; i < words.length; i++){
//         // if word length is longer than current maxLength
//         if(words[i].length > maxLength){
//             // assign current word length to maxLength
//             maxLength = words[i].length
//         }
//     }

//     return maxLength;
// }
