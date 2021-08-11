// # Exercise 021
// # Exercise description
// Create a function that takes an array containing only numbers and return the first element.

// Examples
// getFirstValue([1, 2, 3]) ➞ 1

// getFirstValue([80, 5, 100]) ➞ 80

// getFirstValue([-500, 0, 50]) ➞ -500
// Notes
// The first element in an array always has an index of 0.

// const myArray = [1,2,3];

// function getFirstValue(x){
//     return x[0];
// }

// console.log(getFirstValue([5,7,1]));

// console.log(getFirstValue(myArray));

// function returnThisArray() {
//     return [11,9, 0];
// }

// console.log( getFirstValue( returnThisArray() ) );

// #################################################################################
// Create a function that takes voltage and current and returns the calculated power.

// Examples
// circuitPower(230, 10) ➞ 2300

// circuitPower(110, 3) ➞ 330

// circuitPower(480, 20) ➞ 9600
// Notes
// Requires basic calculation of electrical circuits (see Resources for info).

// function calculatePower(voltage, current){
//     return voltage * current;
// }
// console.log(calculatePower(2,2));

// const volts = 20;
// const amps = 100;

// console.log(calculatePower(volts,amps));

//#########################################################################
// Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

// Examples
// nextEdge(8, 10) ➞ 17

// nextEdge(5, 7) ➞ 11

// nextEdge(9, 2) ➞ 10
// Notes
// (side1 + side2) - 1 = maximum range of third edge.
// The side lengths of the triangle are positive integers.
// Don't forget to return the result.

// function nextEdge(ladoA, ladoB){
//     return (ladoA + ladoB) -1;
// }
// console.log(nextEdge(6,10));

// const side1 = 5;
// const side2 = 10;

// console.log(nextEdge(side1, side2));

// ######################################################################
// There is a single operator in JavaScript, 
// capable of providing the remainder of a division operation. 
// Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

// Examples
// remainder(1, 3) ➞ 1

// remainder(3, 4) ➞ 3

// remainder(-9, 45) ➞ -9

// remainder(5, 5) ➞ 0
// Notes
// The tests only use positive and negative integers.

// function remainder (parA, parB){
//     return parA % parB;
// }
// console.log(remainder(10,2));

// const numA = 10;
// const numB = 3;
// console.log(remainder(numA, numB));

// ######################################################################################
// Create a function that takes length and width and finds the perimeter of a rectangle.

// Examples
// findPerimeter(6, 7) ➞ 26

// findPerimeter(20, 10) ➞ 60

// findPerimeter(2, 9) ➞ 22

// function findPerimeter(length, width){
//     return (length * 2 )+ (width *2);
// }
// console.log(findPerimeter(4,8));

// const L = 9;
// const W = 3;

// console.log(findPerimeter(L, W));

// ###################################################################################
// Write a function that returns the string 
// "something" joined with a space " " and the given argument a.

// Examples
// giveMeSomething("is better than nothing") ➞ "something is better than nothing"

// giveMeSomething("Bob Jane") ➞ "something Bob Jane"

// giveMeSomething("something") ➞ "something something"
// Notes
// Assume an input is given.

function givemeSomething(aThing){
    return "something " + aThing;
}
console.log(givemeSomething('Marcia'));

const frase = 'coisa';

console.log(givemeSomething(frase));

console.log(givemeSomething(12));