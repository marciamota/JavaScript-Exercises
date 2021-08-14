// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

// Examples
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37

// lessThan100(83, 34) ➞ false
// // 83 + 34 = 117

// lessThan100(3, 77) ➞ true

// function lessThan100(numbA, numbB){
// 	return (numbA + numbB) < 100; 
// }
// console.log(lessThan100(20,81));


// ###################################################################################################
// function printArray(number) {
// 	var newArray = [];
  
// 	for(var i = 1; i <= number; i++) {
// 	  newArray.push(i);
// 	}
  
// 	return newArray;
//   }
// console.log(printArray(5));

// ###################################################################################################
// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. 
// The farmer breeds three species:

// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. 
// You have to implement a function that returns the total number of legs of all the animals.

// Examples
// animals(2, 3, 5) ➞ 36

// animals(1, 2, 3) ➞ 22

// animals(5, 2, 8) ➞ 50

// function legsCount(chickens, cows, pigs){
// 	return (chickens *2) + (cows * 4) + (pigs * 4); 
// }
// console.log(legsCount(5,2,8));

// ###########################################################################################
// JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.

// Consider a && b:

// a is checked if it is true or false.
// If a is false, false is returned.
// b is checked if it is true or false.
// If b is false, false is returned.
// Otherwise, true is returned (as both a and b are therefore true ).
// The && operator will only return true for true && true.

// Make a function using the && operator.

// Examples
// and(true, false) ➞ false

// and(true, true) ➞ true

// and(false, true) ➞ false

// and(false, false) ➞ false

function and (resultA, resultB){
	return resultA && resultB;
}
console.log(and(true));

// function and2 (resultA){
// 	return !resultA;
// }
// console.log(and2(true));

// Using the "&&" Operator