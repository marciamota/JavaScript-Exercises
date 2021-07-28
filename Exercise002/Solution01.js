// # Exercise description
// Find if a given character is inside a given string

// ## Example 1:
// Input: 
//     character = 'o';
//     string = 'house of blues'
// Output: true
var strToFind = "world";
var str = "Hello world, welcome to the universe. Another world";

// Solution 2.1
var n = str.includes(strToFind, 0);
console.log(n);

// Solution 2.2
n = str.indexOf(strToFind);
console.log(n);

// Solution 2.3
console.log(str);
console.log(str.split(strToFind));
console.log(str.split(strToFind).length);
console.log(str.split(strToFind).length -1);
n = str.split(strToFind).length - 1;
console.log(n);