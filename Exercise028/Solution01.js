// How Edabit Works
// This is an introduction to how challenges on Edabit work. 
// In the Code tab above you'll see a starter function that looks like this:

// function hello() {

// }
// All you have to do is type return "hello edabit.com" between the curly braces { }

// function hello(){
//     return "hello edabit.com";
// }
// console.log(hello());

// ########################################################################################
// Return the Sum of Two Numbers
// Create a function that takes two numbers as arguments and return their sum.

// Examples
// addition(3, 2) ➞ 5

// addition(-3, -6) ➞ -9

// addition(7, 3) ➞ 10

// function addition(num1, num2){
//     return num1 + num2;
// }
// console.log(addition(3,3));


// ##########################################################################################
// Convert Minutes into Seconds
// Write a function that takes an integer minutes and converts it to seconds.

// Examples
// convert(5) ➞ 300

// convert(3) ➞ 180

// convert(2) ➞ 120

// function convert (num1){
//     return num1 * 60;
// }
// console.log(convert(10));

// #####################################################################################
// Return the Next Number from the Integer Passed
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

// Examples
// addition(0) ➞ 1

// addition(9) ➞ 10

// addition(-3) ➞ -2

// function addition (num1){
//     return num1 +1;
// }
// console.log(addition(10));

// #####################################################################################
// Area of a Triangle
// Write a function that takes the base and height of a triangle and return its area.

// Examples
// triArea(3, 2) ➞ 3

// triArea(7, 4) ➞ 14

// triArea(10, 10) ➞ 50

// function triArea (base, height){
//     return (base * height) /2;
// }
// console.log(triArea(10,2));

// #########################################################################################
// Convert Age to Days
// Create a function that takes the age in years and returns the age in days.

// Examples
// calcAge(65) ➞ 23725

// calcAge(0) ➞ 0

// calcAge(20) ➞ 7300

// function calcAge(age){
//     return age * 365;
// }
// console.log(calcAge(20));

// ###########################################################################################
// Return the First Element in an Array
// Create a function that takes an array containing only numbers and return the first element.

// Examples
// getFirstValue([1, 2, 3]) ➞ 1

// getFirstValue([80, 5, 100]) ➞ 80

// getFirstValue([-500, 0, 50]) ➞ -500

// function getFirstValue(myArray){
//     return myArray[0];
// }
// console.log(getFirstValue([25,10,5]));

// ############################################################################################
// Power Calculator
// Create a function that takes voltage and current and returns the calculated power.

// Examples
// circuitPower(230, 10) ➞ 2300

// circuitPower(110, 3) ➞ 330

// circuitPower(480, 20) ➞ 9600

// function circuitPower(voltage, current){
//     return voltage * current;
// }
// console.log(circuitPower(220,10));

// ############################################################################################
// Convert Hours into Seconds
// Write a function that converts hours into seconds.

// Examples
// howManySeconds(2) ➞ 7200

// howManySeconds(10) ➞ 36000

// howManySeconds(24) ➞ 86400

// function howManySeconds (hours){
//     return hours * 60 * 60;
// }
// console.log(howManySeconds(2));

// #################################################################################################

// Maximum Edge of a Triangle
// Create a function that finds the maximum range of a triangle's third edge, 
// where the side lengths are all integers.

// Examples
// nextEdge(8, 10) ➞ 17

// nextEdge(5, 7) ➞ 11

// nextEdge(9, 2) ➞ 10

// function nextEdge (sidea, sideb){
//     return (sidea + sideb) -1;
// }
// console.log(nextEdge(8, 10));

// ############################################################################################

// Return the Remainder from Two Numbers
// There is a single operator in JavaScript, capable of providing the remainder of a division operation. 
// Two numbers are passed as parameters. 
// The first parameter divided by the second parameter will have a remainder, possibly zero. 
// Return that value.

// Examples
// remainder(1, 3) ➞ 1

// remainder(3, 4) ➞ 3

// remainder(-9, 45) ➞ -9

// remainder(5, 5) ➞ 0

// function remainder (num1, num2) {
//     return (num1 % num2);
// }
// console.log(remainder(5, 5));


// #########################################################################################

// Find the Perimeter of a Rectangle
// Create a function that takes length and width and finds the perimeter of a rectangle.

// Examples
// findPerimeter(6, 7) ➞ 26

// findPerimeter(20, 10) ➞ 60

// findPerimeter(2, 9) ➞ 22

// function findPerimeter(length, width) {
//     return (length + width) * 2;
// }
// console.log(findPerimeter(2,9));

// ###################################################################################

// Return Something to Me!
// Write a function that returns the string "something" joined with a space " " and the given argument a.

// Examples
// giveMeSomething("is better than nothing") ➞ "something is better than nothing"

// giveMeSomething("Bob Jane") ➞ "something Bob Jane"

// giveMeSomething("something") ➞ "something something"

// function giveMeSomething (arg1){
//     return "something" + " " + arg1;
// }
// console.log(giveMeSomething("better"));

// #############################################################################################

// Is the Number Less than or Equal to Zero?
// Create a function that takes a number as its only argument and returns true if it's less than 
// or equal to zero, otherwise return false.

// Examples
// lessThanOrEqualToZero(5) ➞ false

// lessThanOrEqualToZero(0) ➞ true

// lessThanOrEqualToZero(-2) ➞ true

// function lessThanOrEqualToZero(arg1){
//     return arg1 <= 0;
// }
// console.log(lessThanOrEqualToZero(5));

// #############################################################################################

// Sum of Polygon Angles
// Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).

// Examples
// sumPolygon(3) ➞ 180

// sumPolygon(4) ➞ 360

// sumPolygon(6) ➞ 720

// function sumPolygon(angle){
//     return (angle - 2) * 180;
// }
// console.log(sumPolygon(6));

// #####################################################################################0908

// Basketball Points
// You are counting points for a basketball game, given the amount of 
// 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

// Examples
// points(1, 1) ➞ 5

// points(7, 5) ➞ 29

// points(38, 8) ➞ 100

// function points(pointa, pointb){
//     return (pointa * 2) + (pointb * 3);
// }
// console.log(points(7, 5));

// ##############################################################################################
// Basic Variable Assignment
// A student learning JavaScript was trying to make a function. His code should concatenate a 
// passed string name with string "Edabit" and store it in a variable called result. 
// He needs your help to fix this code.

// Examples
// nameString("Mubashir") ➞ "MubashirEdabit"

// nameString("Matt") ➞ "MattEdabit"

// nameString("javaScript") ➞ "javaScriptEdabit"

// function nameString(name){
//     var result = name + "Edabit";
//     return result;
// }
// console.log(nameString("Marcia"));

// #############################################################################
// Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

// Examples
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37

// lessThan100(83, 34) ➞ false
// // 83 + 34 = 117

// lessThan100(3, 77) ➞ true

// function lessThan(num1, num2){
//     return (num1 + num2) < 100;
// }
// console.log(lessThan(30, 77));

// ##################################################################################
// The Farm Problem
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

// function animals(chickens,cows,pigs){
//     return (chickens * 2) + (cows * 4) + (pigs * 4);
// }
// console.log(animals(5, 2, 8));

// #######################################################################################
// Make a function using the && operator.

// Examples
// and(true, false) ➞ false

// and(true, true) ➞ true

// and(false, true) ➞ false

// and(false, false) ➞ false

// function and(a, b){
//     return a && b;
// }
// console.log(and(true,false));

// ####################################################################################

// Are the Numbers Equal?
// Create a function that returns true when num1 is equal to num2; otherwise return false.

// Examples
// isSameNum(4, 8) ➞ false

// isSameNum(2, 2) ➞  true

// isSameNum(2, "2") ➞ false

// function isSameNum(num1, num2){
//     return (num1 == num2);
// }
// console.log(isSameNum(2, 2));

// ######################################################################################

// Football Points
// Create a function that takes the number of wins, draws and losses and calculates the number of 
// points a football team has obtained so far.

// wins get 3 points
// draws get 1 point
// losses get 0 points
// Examples
// footballPoints(3, 4, 2) ➞ 13

// footballPoints(5, 0, 2) ➞ 15

// footballPoints(0, 0, 1) ➞ 0

// function footballPoints(wins, draws, losses){
//     return (wins * 3) + (draws * 1) + (losses * 0);
// }
// console.log(footballPoints(5, 0, 2));

// #######################################################################################
// Convert Hours and Minutes into Seconds
// Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

// Examples
// convert(1, 3) ➞ 3780

// convert(2, 0) ➞ 7200

// convert(0, 0) ➞ 0

// function convert(hours, minutes){
//     return (hours * 60 * 60) + (minutes * 60) ;
// }
// console.log(convert(1, 3));

// Convert Hours and Minutes into Seconds


















































































