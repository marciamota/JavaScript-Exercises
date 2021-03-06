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
// function greeting(name) {
	
// 	if (name == "Mubashir") {
// 		return "Hello, my Love!";
// 	}
// 	return "Hello, " + name + "!";
// }
// console.log(greeting("Marcia"));

// Create a function that takes two arguments. Both arguments are integers, a and b. 
// Return true if one of them is 10 or if their sum is 10.

// Examples
// makesTen(9, 10) ➞ true

// makesTen(9, 9) ➞ false

// makesTen(1, 9) ➞ true

// function makesTen(a, b){
// 	return (a + b == 10) || (a == 10) || (b == 10);
// }
// console.log(makesTen(11, 2));

// (c && d) || f || (h && (q && p))

// Buggy Code (Part 2)

// #################################################################################################

// Given two arguments, return an array which contains these two arguments.

// Examples
// makePair(1, 2) ➞ [1, 2]

// makePair(51, 21) ➞ [51, 21]

// makePair(512124, 215) ➞ [512124, 215]

// function makePair(Arg1, Arg2){
    // let myArray = [];
    // myArray.push(Arg1);
    // myArray.push(Arg2);
    // myArray.push('test');
    // return myArray;
//     return [Arg1,Arg2];
// }
// console.log(makePair(12,24));

// #############################################################################################

// Create a function that takes two strings as arguments and return either true or false depending on 
// whether the total number of characters in the first string is equal to the total number of characters 
// in the second string.

// Examples
// comp("AB", "CD") ➞ true

// comp("ABC", "DE") ➞ false

// comp("hello", "edabit") ➞ false


// function comp(arg1,arg2){
//     return arg1.length == arg2.length;
// }
// console.log (comp("bird", "cat"));

// ################################################################################################
// Create a function that returns true if a string is empty and false otherwise.

// Examples
// A string containing only whitespaces " " does not count as empty.
// isEmpty("") ➞ true

// isEmpty(" ") ➞ false

// isEmpty("a") ➞ false

// function isEmpty(word){
//     return word == ('');
//     // return word.length == 0;
// }
// console.log(isEmpty('yyy'));

// ##########################################################################################
// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

// Examples
// divisibleByFive(5) ➞ true

// divisibleByFive(-55) ➞ true

// divisibleByFive(37) ➞ false

// function divByFive(num1){
//     console.log(num1 % 5);
//     return (num1 % 5) === 0;
// }
// console.log(divByFive(18));

//##############################################################################################
// Create a function that takes an integer and return true if it's divisible by 100, otherwise return false.

// Examples
// divisible(1) ➞ false

// divisible(1000) ➞ true

// divisible(100) ➞ true

// function divisible(int1){
//     return (int1 % 100) == 0;
// }
// console.log(divisible(1000));

// #################################################################################################
// Write a function that returns the length of a string. Make your function recursive.

// Examples
// length("apple") ➞ 5

// length("make") ➞ 4

// length("a") ➞ 1

// length("") ➞ 0

// function longo (name){
//     return name.length;
// }
// console.log(longo("friend"));

// function longo2(str) {
//     if (str == '') {
//         return 0;
//     } else {
//         return 1 + longo2(str.slice(0, -1))
//     }
// }
// console.log(longo2('ola'));

// function factorial(num) {
//     if (num == 1) {
//         return num;
//     } else {
//         return num * factorial(num - 1);
//     }
// }
// console.log(factorial(3));

// ############################################################################################
// Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.

// Examples
// dividesEvenly(98, 7) ➞ true
// // 98/7 = 14

// dividesEvenly(85, 4) ➞ false
// // 85/4 = 21.25

// function dividesEvenly(arg1, arg2){
//     return (arg1 % arg2) == 0;
// }
// console.log(dividesEvenly(21,4));

// ######################################################################################################

// Create a function that takes a string and returns it as an integer.

// Examples
// stringInt("6") ➞ 6

// stringInt("1000") ➞ 1000

// stringInt("12") ➞ 12

// function stringInt(string1){
//    return parseInt(string1);
// }
// console.log(stringInt("20"));

// Return a String as an Integer





