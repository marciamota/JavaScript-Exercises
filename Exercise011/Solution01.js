// # Exercise 011
// # Exercise description
// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

 

// Example 1:

// Input: x = 121
// Output: true

// Solution 011
var x = 121;
var numAsString = x.toString()
var splitString = numAsString.split("");
var reverseArray = splitString.reverse();
// console.log(reverseArray);
var joinArray = reverseArray.join("");
// console.log(joinArray);
if (numAsString == joinArray) {
    console.log(true);
} else {
    console.log(false);
}

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
// var myWord = 'asa';
// function isPalindrome(word) {
//     var joinArray = word.split("").reverse().join("");
//     return (word == joinArray);
// }
// console.log(isPalindrome(myWord));

// Solution 5.1.4
// witthout using inbuilt functions
// const myWord = 'casa';
// let reversedWord = '';
// for (let i = myWord.length - 1; i >= 0; i--) {
//     reversedWord += myWord[i];
// }
// const resposta = (myWord == reversedWord);
// console.log("is " + myWord + " palindrom? " + resposta)

// // Solution 5.1.5
// // witthout using inbuilt functions
// const myWord = 'asa';
// var isPalindrome = true;
// for (let i = 0; i < myWord.length / 2; i++) {
//     console.log('forward count: ' + i + ', backward count: ' + (myWord.length - 1 - i))
//     console.log('letra esquerda ' + myWord[i] + ' letra direita ' + myWord[myWord.length - 1 - i])
//     if (myWord[i] != myWord[myWord.length - 1 - i]) {
//         isPalindrome = false;
//         break;
//     }
// }
// console.log("is " + myWord + " palindrom? " + isPalindrome);

