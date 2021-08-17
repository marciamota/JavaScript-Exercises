// Create a function that returns true when num1 is equal to num2; otherwise return false.

// Examples
// isSameNum(4, 8) ➞ false

// isSameNum(2, 2) ➞  true

// isSameNum(2, "2") ➞ false

// function numEqual(num1, num2){
// 	return num1 === num2;
// }
// console.log(numEqual(2,"2"));

//#################################################################################################
// Create a function that takes the number of wins, draws and losses and calculates the number of points a 
// football team has obtained so far.

// wins get 3 points
// draws get 1 point
// losses get 0 points
// Examples
// footballPoints(3, 4, 2) ➞ 13

// footballPoints(5, 0, 2) ➞ 15

// footballPoints(0, 0, 1) ➞ 0

// function footballPoints(wins, draws, losses){
// 	return (wins * 3) + (draws * 1) + (losses * 0);
// }
// console.log(footballPoints(10,5,1));

// ##################################################################################################
// Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

// Examples
// convert(1, 3) ➞ 3780

// convert(2, 0) ➞ 7200

// convert(0, 0) ➞ 0

// function convert(hours, minutes){
// 	return (hours * 60 * 60) + (minutes * 60);
// }
// console.log(convert(2,4));

// ################################################################################################
function isSeven(x) {
	return x=="7"?"yes":"no";
}
console.log(isSeven(7));

// Fix the Expression