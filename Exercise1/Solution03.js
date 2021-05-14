// # Exercise description
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// ## Example 1:
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

math = require("mathjs")

const nums = [1, 2, 3, 4];
let resultado = [];
const numsLength = nums.length;
console.log(numsLength);
var tempArray;
var tempSum;
for(let i = 0; i < numsLength; i++){
    tempArray = nums.slice(0, i+1);
    tempSum = math.sum(tempArray);
    resultado.push(tempSum);
    // resultado.push(math.sum(nums.slice(0, i+1)));
};
// resultado.push(1); //resultado posicao zero
// resultado.push(anterior + 2); //resultado posicao one
// resultado.push(anterior + 3); //resultado posicao two
// resultado.push(anterior + 4); //resultado posicao three
console.log(resultado);