// # Exercise description
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// ## Example 1:
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

const nums = [1,2,3,4];
let resultado = [];
const numsLength = nums.length;
console.log(numsLength);
var tempSum;
for(let i = 0; i < numsLength; i++){
    tempSum = 0;
    for(let j = 0; j <= i; j++){
        tempSum += nums[j];
    }
    resultado.push(tempSum);
};
// resultado.push(1); //resultado posicao one  
// resultado.push(1+2); //resultado posicao two
// resultado.push(1+2+3); //resultado posicao three
// resultado.push(1+2+3+4); //resultado posicao four
console.log(resultado);