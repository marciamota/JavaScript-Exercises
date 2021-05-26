// # Exercise description
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// ## Example 1:
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

const nums = [1, 2, 3, 4];
let resultado = [];
const numsLength = nums.length;
console.log(numsLength);
if (numsLength > 0) {
    resultado.push(nums[0]);
}
for(let i = 1; i < numsLength; i++){
    resultado.push(resultado[i-1] + nums[i]);
};
// resultado.push(1); //resultado posicao zero
// resultado.push(anterior + 2); //resultado posicao one
// resultado.push(anterior + 3); //resultado posicao two
// resultado.push(anterior + 4); //resultado posicao three
console.log(resultado);