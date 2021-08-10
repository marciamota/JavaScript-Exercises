// # Exercise 012
// # Exercise description
// Write a function: class Solution { public boolean solution(int[] A); }that, 
// given an array A of N integers, returns true if A contains at least two elements which differ by 1, 
// and false otherwise.
// Examples:
// 1. Given A = [7, 10], the function should return false
// 1. Given A = [7], the function should return false
// 2. Given A = [4, 3], the function should return true
// 3. Given A = [11, 1, 8, 12, 14], the function should return true. Pair of elements which differ by 1 is (11, 12)
// 4. Given A = [4, 10, 8, 5, 9], the function should return true. Pairs of elements which differ by 1 are (4, 5), (10, 9) and (8, 9).
// 5. Given A = [5, 5, 5, 5, 5], the function should return false. There are no two elements in A whose values differ by 1.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [1..1,000,000,000].


// const A = [11, 1, 8, 13, 15];

// step 1. pick number by number
// step 2. compare the picked number with next number and see if they differ by 1.
// step 3. if they differ by 1 hen return true
// step 4. if they don't differ by 1 go repeat from step 2
// step 5. if after checking all numbers none of them differ by 1 then return false

// function solution(A) {
//     for (currentNumber of A){
//         if(A.includes(currentNumber - 1) || A.includes(currentNumber + 1)){
//             return true;
//         }
//     }
//     return false;
// }

// console.log(solution(A));

// solution 2 without includes
const A = [1, 11, 8, 13, 15];
function solution(A) {
    let currentNumber;
    let nextNumber;
    for (let i = 0; i < A.length; i++){
        currentNumber = A[i];
        for (let j = i + 1; j < A.length; j++) {
            nextNumber = A[j];
            if (
                (currentNumber == nextNumber + 1) || 
                (currentNumber == nextNumber - 1)
                ) {
                    return true;
            }
        }
    }
    return false;
}

console.log(solution(A));