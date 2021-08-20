// In this challenge, you must verify the equality of two different values given the parameters a and b.

// Both the value and type of the parameters need to be equal. The possible types of the given parameters are:

// Numbers
// Strings
// Booleans (false or true)
// Special values: undefined, null and NaN
// What have you learned so far that will permit you to do two different checks (value and type) with a single statement?

// Implement a function that returns true if the parameters are equal, and false if they are not.

// Examples
// checkEquality(1, true) ➞ false
// // A number and a boolean: the value and type are different.

// checkEquality(0, "0") ➞ false
// // A number and a string: the type is different.

// checkEquality(1,  1) ➞ true
// // A number and a number: the type and value are equal.

// function checkEquality(parA,parB){
// 	return parA === parB;
// }
// console.log(checkEquality(2,2));
// // ########################################################################################################
// Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.

// To illustrate:

// profitableGamble(0.2, 50, 9)
// ... should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.

// Examples
// profitableGamble(0.2, 50, 9) ➞ true

// profitableGamble(0.9, 1, 2) ➞ false

// profitableGamble(0.9, 3, 2) ➞ true

// function profitGamble(prob, prize, pay){
// 	return (prob * prize) > pay;
// }
// console.log(profitGamble(0.9, 1, 2));

// ###########################################################################################################

// Create a function that takes a boolean variable flag and returns it as a string.

// Examples
// boolToString(true) ➞ "true"

// boolToString(false) ➞ "false"

// let bool = true;
// bool.toString()    convert boolean to string;

// function boolToString(myBoolean){
// 	return myBoolean.toString();
// }
// console.log(boolToString(true));

// #################################################################################################

// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

// Examples
// frames(1, 1) ➞ 60

// frames(10, 1) ➞ 600

// frames(10, 25) ➞ 15000

// function frames (min, FPS){
// 	return FPS * 60 * min;
// }
// console.log(frames(30,15));

// ###################################################################################################

// A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.

// Create a function which calculates the amount of fuel it needs, given the distance.

// Examples
// calculateFuel(15) ➞ 150

// calculateFuel(23.5) ➞ 235

// calculateFuel(3) ➞ 100

// function calculateFuel(distance){
// 	let neededFuel = distance * 10;
// 	if (neededFuel > 100){
// 		return neededFuel;
// 	} else {
// 		return 100;
// 	};
// 	// return Math.max(100, distance * 10);
// }
// console.log(calculateFuel(1));
// ##############################################################################################
// Create a function that returns the given argument, but by using an arrow function.

// An arrow function is constructed like so:

// arrowFunc=(/*parameters*/)=>//code here
// arrowFunc = (parameter, parB) => {
// 	return parameter + parB;
// }
// console.log(arrowFunc("hello", " Marcia"));
// #################################################################################################
// Create a function that will handle simple math expressions. The input is an expression in the form of a string.

// Examples
// calculator("23+4") ➞ 27

// calculator("45-15") ➞ 30

// calculator("13+2-5*2") ➞ 5

// calculator("49/7*2-3") ➞ 11

// function calculator(expression) {
// 		return eval(expression);
// }
// console.log(calculator("2*4+3-2-1"))


// Buggy Code (Part 4)
function greeting(name) {
	
	if (name == "Mubashir") {
		return "Hello, my Love!";
	}
	return "Hello, " + name + "!";
}
console.log(greeting("Marcia"));