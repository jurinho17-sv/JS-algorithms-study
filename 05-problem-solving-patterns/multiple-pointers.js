// Multiple Pointer Pattern

/**
 * Ju Ho Kim
 * Date: Apr. 14th. 2025
 * 
 * Problem: Multiple Pointers - countUniqueValues
 * Implement a function called countUniqueValues, which accepts a sorted array,
 * and counts the unique values in the array.
 * There can be negative numbers in the array, but it will always be sorted.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * 
 */

// Solution
function countUniqueValues(arr) {
    // Edge case: empty array has 0 unique values
    if (arr.length === 0) return 0;
    
    // Initialize count to 1 (for the first element)
    let uniqueCount = 1;
    
    // Use a single loop to count unique values
    for (let i = 1; i < arr.length; i++) {
      // If current element is different from previous, it's a new unique value
      if (arr[i] !== arr[i-1]) {
        uniqueCount++;
      }
    }
    
    return uniqueCount;
}
