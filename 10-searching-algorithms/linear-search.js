/**
 * Ju Ho Kim
 * Date: Apr. 14th. 2025
 * 
 * Problem:
 * Write a function called linearSearch which accepts an array and a value,
 * and returns the index at which the value exists.
 * If the value does not exist in the array, return -1.
 * Don't use indexOf to implement this function!
 * 
 */

// Solution
function linearSearch(arr, val) {
    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
      // If current element matches the value we're looking for
      if (arr[i] === val) {
        // Return its index
        return i;
      }
    }
    // If we finish the loop without finding the value, it doesn't exist in the array
    return -1;
  }