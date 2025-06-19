/**
 * Selection Sort Implementation and Tutorial
 * ==========================================
 * 
 * Created for: JS-ALGORITHMS-STUDY/11-sorting-algorithms/02-selection-sort
 * 
 * Selection Sort is a simple sorting algorithm that works by repeatedly finding 
 * the minimum element from the unsorted portion and putting it at the beginning.
 * 
 * Time Complexity: O(n²) in all cases (best, average, worst)
 * Space Complexity: O(1) - constant additional space
 * 
 * How Selection Sort Works:
 * 1. Find the smallest element in the array
 * 2. Swap it with the first element
 * 3. Find the second smallest element in the remaining array
 * 4. Swap it with the second element
 * 5. Continue until the entire array is sorted
 */

// =====================================================================
//  BASIC SELECTION SORT IMPLEMENTATION
// =====================================================================

/**
 * Basic Selection Sort function
 * Sorts an array of numbers from smallest to largest
 * 
 * @param {Array} arr - Array of numbers to sort
 * @returns {Array} - The sorted array (sorted in place)
 */
function basicSelectionSort(arr) {
  console.log('Starting basic selection sort with:', arr);
  
  // Outer loop - represents the sorted portion boundary
  // Each iteration adds one more element to the sorted portion
  for (let i = 0; i < arr.length; i++) {
    
    // Assume the current position has the minimum value
    let minIndex = i;
    
    console.log(`\nStep ${i + 1}: Looking for minimum starting from index ${i}`);
    console.log('Current array:', arr);
    console.log('Sorted portion:', arr.slice(0, i), 'Unsorted portion:', arr.slice(i));
    
    // Inner loop - find the actual minimum in the unsorted portion
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
        console.log(`  Found smaller element ${arr[j]} at index ${j}`);
      }
    }
    
    // If we found a smaller element, swap it with the current position
    if (minIndex !== i) {
      console.log(`  Swapping ${arr[i]} at index ${i} with ${arr[minIndex]} at index ${minIndex}`);
      
      // Swap using array destructuring (ES6 feature)
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    } else {
      console.log(`  No swap needed, ${arr[i]} is already the minimum`);
    }
    
    console.log('Array after step:', arr);
  }
  
  console.log('\nFinal sorted array:', arr);
  return arr;
}

// =====================================================================
//  ADVANCED SELECTION SORT WITH COMPARATOR FUNCTION
// =====================================================================

/**
 * Advanced Selection Sort with custom comparator function
 * Similar to the bubble sort you implemented for SEA
 * 
 * @param {Array} arr - Array to sort
 * @param {Function} comparator - Optional custom comparator function
 * @returns {Array} - The sorted array
 */
function selectionSort(arr, comparator) {
  // If comparator is not a function, use default numeric comparator
  // This pattern is similar to your ParkSpot project's sortSpots function
  if (typeof comparator !== 'function') {
    comparator = function(a, b) {
      return a - b; // Default: sort numbers from smallest to largest
    };
  }
  
  console.log('Starting selection sort with comparator');
  
  // Outer loop - each iteration places one more element in correct position
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    
    // Inner loop - find the element that should be at position i
    for (let j = i + 1; j < arr.length; j++) {
      // Use comparator to determine which element is "smaller"
      // If comparator returns negative, arr[j] should come before arr[minIndex]
      if (comparator(arr[j], arr[minIndex]) < 0) {
        minIndex = j;
      }
    }
    
    // Swap if we found a different minimum
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  
  return arr;
}

// =====================================================================
//  TESTING AND EXAMPLES
// =====================================================================

console.log('========== SELECTION SORT EXAMPLES ==========\n');

// Example 1: Basic number sorting
console.log('Example 1: Basic number sorting');
let numbers1 = [64, 34, 25, 12, 22, 11, 90];
basicSelectionSort([...numbers1]); // Use spread operator to avoid modifying original

console.log('\n' + '='.repeat(50) + '\n');

// Example 2: Numbers with advanced function (same result, less verbose)
console.log('Example 2: Numbers with advanced function');
let numbers2 = [4, 20, 12, 10, 7, 9];
console.log('Original:', numbers2);
console.log('Sorted:', selectionSort([...numbers2]));

console.log('\n' + '='.repeat(50) + '\n');

// Example 3: Sorting in descending order
console.log('Example 3: Sorting in descending order');
let numbers3 = [5, 2, 8, 1, 9];
console.log('Original:', numbers3);

// Custom comparator for descending order
function descendingComparator(a, b) {
  return b - a; // Reverse the comparison
}

console.log('Sorted (descending):', selectionSort([...numbers3], descendingComparator));

console.log('\n' + '='.repeat(50) + '\n');

// Example 4: Sorting strings (similar to ParkSpot's string search functionality)
console.log('Example 4: Sorting strings');
let fruits = ['banana', 'apple', 'cherry', 'date'];
console.log('Original fruits:', fruits);

// String comparator function
function stringComparator(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

console.log('Sorted fruits:', selectionSort([...fruits], stringComparator));

console.log('\n' + '='.repeat(50) + '\n');

// Example 5: Sorting objects (similar to ParkSpot's parking spots by price/rating)
console.log('Example 5: Sorting parking spots by price (like ParkSpot)');
let parkingSpots = [
  { name: 'Downtown Garage', price: 3.50, rating: 4.2 },
  { name: 'City Lot', price: 2.00, rating: 3.8 },
  { name: 'Main Street', price: 4.00, rating: 4.5 },
  { name: 'North Side', price: 2.50, rating: 3.5 }
];

console.log('Original spots:', parkingSpots.map(spot => `${spot.name}: $${spot.price}`));

// Sort by price (low to high) - similar to your ParkSpot sortSpots function
function sortByPriceLowToHigh(a, b) {
  return a.price - b.price;
}

let sortedByPrice = selectionSort([...parkingSpots], sortByPriceLowToHigh);
console.log('Sorted by price:', sortedByPrice.map(spot => `${spot.name}: $${spot.price}`));

// Sort by rating (high to low)
function sortByRatingHighToLow(a, b) {
  return b.rating - a.rating;
}

let sortedByRating = selectionSort([...parkingSpots], sortByRatingHighToLow);
console.log('Sorted by rating:', sortedByRating.map(spot => `${spot.name}: ${spot.rating}⭐`));

// =====================================================================
//  COMPARISON WITH BUBBLE SORT
// =====================================================================

console.log('\n' + '='.repeat(50));
console.log('SELECTION SORT vs BUBBLE SORT COMPARISON');
console.log('='.repeat(50) + '\n');

/**
 * Performance comparison function
 * This helps understand when to use which algorithm
 */
function comparePerformance() {
  console.log('SELECTION SORT:');
  console.log('✓ Always makes exactly n-1 swaps (where n is array length)');
  console.log('✓ Good when swapping is expensive operation');
  console.log('✓ Simple to understand and implement');
  console.log('✗ Always O(n²) time, even for sorted arrays');
  console.log('✗ Not stable (equal elements may change relative positions)');
  
  console.log('\nBUBBLE SORT:');
  console.log('✓ Can detect if array is already sorted (with optimization)');
  console.log('✓ Stable sorting algorithm');
  console.log('✓ Best case O(n) for already sorted arrays');
  console.log('✗ Makes many more swaps than selection sort');
  console.log('✗ Generally slower than selection sort');
  
  console.log('\nWhen to use Selection Sort:');
  console.log('- Small arrays (less than 50 elements)');
  console.log('- When memory writes are expensive');
  console.log('- When simplicity is more important than efficiency');
  console.log('- Educational purposes to understand sorting concepts');
}

comparePerformance();

// =====================================================================
//  STEP-BY-STEP VISUALIZATION
// =====================================================================

console.log('\n' + '='.repeat(50));
console.log('STEP-BY-STEP VISUALIZATION');
console.log('='.repeat(50) + '\n');

/**
 * Visual demonstration of selection sort steps
 * This helps understand exactly how the algorithm works
 */
function visualSelectionSort(arr) {
  console.log('Visualizing Selection Sort:');
  console.log('Initial array:', arr);
  console.log('Legend: [sorted part] | [unsorted part] | *minimum*\n');
  
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    
    // Find minimum in unsorted portion
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    
    // Create visual representation
    let visual = [];
    for (let k = 0; k < arr.length; k++) {
      if (k < i) {
        visual.push(`[${arr[k]}]`); // Sorted part
      } else if (k === minIndex) {
        visual.push(`*${arr[k]}*`); // Minimum to be moved
      } else {
        visual.push(arr[k]); // Unsorted part
      }
    }
    
    console.log(`Step ${i + 1}: ${visual.join(' ')}`);
    
    // Perform swap if needed
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      console.log(`         Swapped ${arr[minIndex]} with ${arr[i]}`);
    } else {
      console.log(`         No swap needed`);
    }
  }
  
  console.log(`Final:   [${arr.join('] [')}]`);
  return arr;
}

// Run visualization with a small array
visualSelectionSort([5, 2, 8, 1, 9]);

// =====================================================================
//  PRACTICE EXERCISES FOR INTERVIEW
// =====================================================================

console.log('\n' + '='.repeat(50));
console.log('PRACTICE EXERCISES FOR SEA INTERVIEW');
console.log('='.repeat(50) + '\n');

/**
 * For interview prep
 */
console.log('Suggested practice exercises:');
console.log('1. Implement selection sort without looking at this code');
console.log('2. Modify selection sort to find the maximum instead of minimum');
console.log('3. Count the number of comparisons and swaps made');
console.log('4. Implement selection sort for sorting in descending order');
console.log('5. Sort an array of objects by different properties');
console.log('6. Explain why selection sort is O(n²) in all cases');
console.log('7. Compare selection sort with other O(n²) algorithms');

/**
 * Interview Questions to Practice:
 */
console.log('\nCommon interview questions about Selection Sort:');
console.log('Q: What is the time complexity of selection sort?');
console.log('A: O(n²) in all cases (best, average, worst)');
console.log('');
console.log('Q: What is the space complexity?');
console.log('A: O(1) - only uses a constant amount of extra space');
console.log('');
console.log('Q: Is selection sort stable?');
console.log('A: No, equal elements may change their relative positions');
console.log('');
console.log('Q: When would you use selection sort?');
console.log('A: Small arrays, when memory writes are expensive, educational purposes');

// =====================================================================
//  CONNECTION TO YOUR PARKSPOT PROJECT
// =====================================================================

console.log('\n' + '='.repeat(50));
console.log('CONNECTION TO YOUR PARKSPOT PROJECT');
console.log('='.repeat(50) + '\n');

/**
 * How Selection Sort relates to your ParkSpot catalog project
 */
console.log('In your ParkSpot project, you used Array.sort() in sortSpots():');
console.log('- spotsToDisplay.sort((a, b) => a.price - b.price)');
console.log('- spotsToDisplay.sort((a, b) => b.rating - a.rating)');
console.log('');
console.log('Selection sort works similarly but manually:');
console.log('- Find the spot with lowest price, move it to position 0');
console.log('- Find the spot with next lowest price, move it to position 1');
console.log('- Continue until all spots are in order');
console.log('');
console.log('The comparator functions work the same way:');
console.log('- Return negative if first item should come before second');
console.log('- Return positive if first item should come after second');
console.log('- Return zero if items are equal');

// Final message
console.log('\n' + '='.repeat(50));
console.log('Selection Sort Tutorial Complete! 🎉');
console.log('Practice implementing this algorithm from scratch.');
console.log('Understanding selection sort will help you with:');
console.log('- Algorithm interviews');
console.log('- Understanding how sorting works internally');
console.log('- Building more efficient custom sorting solutions');
console.log('='.repeat(50));