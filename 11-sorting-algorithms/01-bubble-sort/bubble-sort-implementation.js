/**
 * Bubble Sort Implementation
 * 
 * This function sorts an array using the bubble sort algorithm.
 * Time Complexity: O(n^2) - where n is the length of the array
 * Space Complexity: O(1) - constant additional space
 * 
 * @param {Array} arr - The array to be sorted
 * @param {Function} comparator - Optional custom comparator function
 * @returns {Array} - The sorted array (sorted in place)
 */

function bubbleSort(arr, comparator) {
    // If comparator is not a function, use default numeric comparator
    if (typeof comparator !== 'function') {
      comparator = function(a, b) {
        return a - b; // Default: sort numbers from smallest to largest
      };
    }
    
    let noSwaps; // Optimization flag to exit early if array is already sorted
    
    // Outer loop - each pass places one more item at the end
    for (let i = arr.length; i > 0; i--) {
      noSwaps = true;
      
      // Inner loop - compare adjacent elements and swap if needed
      for (let j = 0; j < i - 1; j++) {
        // Use the comparator to determine order
        if (comparator(arr[j], arr[j + 1]) > 0) {
          // Swap elements
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          noSwaps = false; // A swap was made
        }
      }
      
      // If no swaps were made in a full pass, array is sorted
      if (noSwaps) break;
    }
    
    return arr;
  }