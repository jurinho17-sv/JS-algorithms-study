// Frequency Counter Pattern

/**
 * ANAGRAMS
 * Given two strings, write a function to determine if the second string is an anagram of the first.
 * An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman
 */

function validAnagram(str1, str2) {
    // Quick check: if lengths don't match, can't be anagrams
    if (str1.length !== str2.length) {
      return false;
    }
    
    // Create a single frequency counter
    const lookup = {};
    
    // Count frequency of each character in str1
    for (let char of str1) {
      lookup[char] = (lookup[char] || 0) + 1;
    }
    
    // Decrement frequency for each character in str2
    for (let char of str2) {
      // If character doesn't exist or count is 0, not an anagram
      if (!lookup[char]) {
        return false;
      }
      lookup[char]--;
    }
    
    return true;
  }

validAnagram('anagram', 'nagaram')


// // Example 1
// function same(arr1, arr2) {
//     if(arr1.length !== arr2.length) {
//         return false;
//     }
//     let frequencyCounter1 = {}
//     let frequencyCounter2 = {}

//     // two loops (O(n)) are much better than one nested loop (O(n^2))
//     for(let val of arr1) {
//         frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
//     }
//     for(let val of arr2) {
//         frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
//     }

//     for(let key in frequencyCounter1) {
//         if(!(key ** 2 in frequencyCounter2)) {
//             return false
//         }
//         if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
//             return false
//         }
//     }
//     console.log(frequencyCounter1);
//     console.log(frequencyCounter2);
//     return false
// }

// same([1,2,3,2], [9,1,4,4])