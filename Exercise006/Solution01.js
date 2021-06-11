// # Exercise 6.1
// # Exercise description
// You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

// Return true if a and b are alike. Otherwise, return false.

// ## Example 1:
// Input: s = "book"
// Output: true
// Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.

const phrase = 'MarciaxyOliver';
const leftHalf = phrase.slice(0, phrase.length /2);
const rightHalf = phrase.slice(phrase.length /2);
const vowels = ['a','e','i','o','u','A','E','I','O','U'];
let vowelsLeftCount = 0;
let vowelsRightCount = 0;
for (let i = 0; i < leftHalf.length; i++) {
    if (vowels.includes(leftHalf[i])) {
        vowelsLeftCount++;
    }
    if (vowels.includes(rightHalf[i])) {
        vowelsRightCount++;
    }
}
if (vowelsLeftCount == vowelsRightCount) {
    console.log('halves are alike');
} else {
    console.log('halves are not alike');
}