// # Exercise 5.1
// # Exercise description
// detect if a given word is palindrome

// ## Example 1:
// Input: 
//     word = 'asa';
// Output: 
//     true

// ## Example 2:
// Input: 
//     word = 'norte';
// Output: 
//     false

// // Solution 5.1.1
// var word = 'asa';
// var splitString = word.split("");
// var reverseArray = splitString.reverse();
// // console.log(reverseArray);
// var joinArray = reverseArray.join("");
// // console.log(joinArray);
// if (word == joinArray) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// Solution 5.1.2
// var myWord = 'casa';
// function isPalindrome(word) {
//     var splitString = word.split("");
//     var reverseArray = splitString.reverse();
//     var joinArray = reverseArray.join("");
//     // if (word == joinArray) {
//     //     return 'yes';
//     // } else {
//     //     return 'no';
//     // }
//     return (word == joinArray);
// }
// console.log(isPalindrome(myWord));

// Solution 5.1.3
var myWord = 'asa';
function isPalindrome(word) {
    var joinArray = word.split("").reverse().join("");
    return (word == joinArray);
}
console.log(isPalindrome(myWord));
