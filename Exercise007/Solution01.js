// # Exercise 7.1
// Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

// Find the kth positive integer that is missing from this array.

// ## Example 1:
// Input: arr = [2,3,4,7,11], k = 5
// 1 2 3 4 5 6 7 8 9 10
// Output: 9
// Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.

// solution 7.1
// const arr = [2,3,4,7,11];
// const k = 5;
// let found = false;
// let currentInteger = 1;
// let missingIntegerCount = 0;
// while (!found) {
//     if (!arr.includes(currentInteger)) {
//         missingIntegerCount++;
//     }
//     if (missingIntegerCount == k) {
//         console.log("the " + k + "th missing integer is the number " + currentInteger)
//         found = true;
//     }
//     currentInteger++;
// }

// solution 7.2
const arr = [2,3,4,7,11];
const k = 5;
let found = false;
let currentInteger = 1;
let missingIntegerCount = 0;
while (!found) {
    if (!arr.includes(currentInteger)) {
        missingIntegerCount++;
        if (missingIntegerCount == k) {
            console.log("the " + k + "th missing integer is the number " + currentInteger);
            found = true;
        }
    }
    currentInteger++;
}

// solution 7.3
// const arr = [2,3,4,7,11];   // arr.length = 5;
// const k = 5;
// let missingIntegerCount = 0;
// for (let i=1; i <= (k + arr.length); i++) {
//     if (!arr.includes(i)) {
//         missingIntegerCount++;
//         if (missingIntegerCount == k) {
//             console.log("the " + k + "th missing integer is the number " + i);
//             break;
//         }
//     }
// }
