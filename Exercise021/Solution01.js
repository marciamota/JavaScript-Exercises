// # Exercise 021
// # Exercise description
// Create a function that takes the age in years and returns the age in days.

// Examples
// calcAge(65) ➞ 23725

// calcAge(0) ➞ 0

// calcAge(20) ➞ 7300
// Notes
// Use 365 days as the length of a year for this challenge.

function yearsToDays(age){
    return age * 365;
}
console.log(yearsToDays(45));

const marciaAge = 38;
console.log(yearsToDays(marciaAge));