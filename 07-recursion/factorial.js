// // Non-recursive way
//
// function factorial(num) {
//     let total = 1;
//     for(let i = num; i > 1; i--){
//         total *= i
//     }
//     return total;
// }
// factorial(4)

// Recursive way
function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
    // 1 is end of the road
}

factorial(5);

console.log(factorial(5));