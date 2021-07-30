// # Exercise 012
// # Exercise description
// A palindrome is a word, which reads the same backward as forward. Some examples of palindromes are: "kayak", 
// "radar", "mom".
// Write a function: class Solution that, given two integers N and K, 
// returns a palindrome of length N which consists of K distinct lower-case letters (az
// Examples:
// 1. Given N = 5, K = 2, your function may return "abbba". There are many other possibilities; 
// for example, it could also return "zdzdz". 
// On the other hand, "aaaaa" is an incorrect answer as it contains only one distinct letter.
// 2. Given N = 8, K = 3, your function may return "ppsccspp".
// 3. Given N = 3, K = 2, your function may return "opo".
// Assume that:
// N is an integer within the range [1..200];
// K is an integer within the range [1..26];
// Creation of the required palindrome is always possible.
// In your solution, focus on correctness. 
// The performance of your solution will not be the focus of the assessment.

const N = 15;
const K = 3;

// 1. select the distinct letters (selectedChars)
// 2. find what is the half of N rounded up to enarest integer (halfN)
// 3. divide halfN by K to know how many times to repeat selectedChars (selectedCharsRepetition)
// 4. create part of the left side of the palindrome by 
// concatenating selectedChars as many times defined by selectedCharsRepetition
// 5. calculate remainder of jalfN / K to know how many extra letters to add (extraChars)
// 6. add the necessary extra characters to left side of palindrome
// 7A. if N is odd make the right side equal to the left side but removing the rightmost character.
// 7B. if N is even make the right side equal to the left side.
// 8. reverse the right side.
// 9. join left and right side to form the palindrome.
// 10 return palindrome

function solution(N, K) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const selectedChars = alphabet.slice(0, K); // 1. select the distinct letters (selectedChars)
    const halfN = Math.ceil(N / 2); // 2. find what is the half of N rounded up to nearest integer (halfN)
    
    let leftSidePalindrome = '';
    let rightSidePalindrome;

    const selectedCharsRepetition = Math.floor(halfN / K); // 3. divide halfN by K (and round down to integer) to know how many times to repeat selectedChars (selectedCharsRepetition)
    // 4. create part of the left side of the palindrome by 
    // concatenating selectedChars as many times defined by selectedCharsRepetition
    for (let i = 1; i <= selectedCharsRepetition; i++) {
        leftSidePalindrome += selectedChars;
    }

    const extraChars = halfN % K; // 5. calculate remainder of jalfN / K to know how many extra letters to add (extraChars)
    leftSidePalindrome += selectedChars.slice(0, extraChars); // 6. add the necessary extra characters to left side of palindrome

    if (N % 2 == 1) { // 7A. if N is odd make the right side equal to the left side but removing the rightmost character.
        // N % 2 == 1 is way to find if a number is odd or even
        rightSidePalindrome = leftSidePalindrome.slice(0, -1);
    } else { // 7B. if N is even make the right side equal to the left side.
        rightSidePalindrome = leftSidePalindrome;
    }

    // reverting rightSidePalindrome
    rightSidePalindrome = rightSidePalindrome.split("").reverse().join(""); // 8. reverse the right side.
    const palindrome = leftSidePalindrome + rightSidePalindrome; // 9. join left and right side to form the palindrome.
    return palindrome; // 10 return palindrome
}

console.log(solution(N, K));

