/**
 * Binary Search
 * saves a lot of time comparing to the Linear Search
 * (only works on sorted array)
*/

/**
 * Ju Ho Kim
 * Date: Apr. 14th. 2025
 * 
 * Problem:
 * Write a function called binarySearch which accepts a sorted array and a value
 * and returns the index at which the value exists. 
 * Otherwise, return -1.
 * 
 * This algorithm should be more efficient than linearSearch
 * how to implement it 
 * - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
 * - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/
 * 
 * Time Complexity: O(log n)
 * 
 */

// Solution
function binarySearch(arr, val) {
    // Set initial left and right pointers
    let left = 0;
    let right = arr.length - 1;
    
    // Continue searching while left pointer is less than or equal to right pointer
    while (left <= right) {
      // Find the middle index
      const mid = Math.floor((left + right) / 2);
      
      // If the middle element is our target, return its index
      if (arr[mid] === val) {
        return mid;
      }
      
      // If target is less than middle element, search left half
      if (val < arr[mid]) {
        right = mid - 1;
      } 
      // If target is greater than middle element, search right half
      else {
        left = mid + 1;
      }
    }
    
    // If we've exited the loop without finding the value, it doesn't exist in the array
    return -1;
  }

  binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15)