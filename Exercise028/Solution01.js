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

//######################################################################
// Equality Check
// In this challenge, you must verify the equality of two different values given the parameters a and b.

// Both the value and type of the parameters need to be equal. The possible types of the given parameters are:

// Numbers
// Strings
// Booleans (false or true)
// Special values: undefined, null and NaN
// What have you learned so far that will permit you to do two different checks 
// (value and type) with a single statement?

// Implement a function that returns true if the parameters are equal, and false if they are not.

// Examples
// checkEquality(1, true) ➞ false
// // A number and a boolean: the value and type are different.

// checkEquality(0, "0") ➞ false
// // A number and a string: the type is different.

// checkEquality(1,  1) ➞ true
// // A number and a number: the type and value are equal.

// function checkEquality(para, parb){
//     return para === parb;
// }
// console.log(checkEquality(2, true));

// #######################################################################################
// Profitable Gamble
// Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; 
// otherwise return false.

// To illustrate:

// profitableGamble(0.2, 50, 9)
// ... should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.

// Examples
// profitableGamble(0.2, 50, 9) ➞ true

// profitableGamble(0.9, 1, 2) ➞ false

// profitableGamble(0.9, 3, 2) ➞ true

// function profitableGamble(prob, prize, pay){
//     return (prob * prize) > pay;
// }
// console.log(profitableGamble(0.9, 3, 2));

// ####################################################################################
// Boolean to String Conversion
// Create a function that takes a boolean variable flag and returns it as a string.

// Examples
// boolToString(true) ➞ "true"

// boolToString(false) ➞ "false"

// function boolToString(boolA){
//     return '"' + boolA.toString() + '"'; 
// }
// console.log(boolToString(false));

// ###########################################################################################
// Frames Per Second
// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

// Examples
// frames(1, 1) ➞ 60

// frames(10, 1) ➞ 600

// frames(10, 25) ➞ 15000

// function frames(fps, minutes){
//     return (minutes * 60 * fps) 
// }
// console.log(frames(10,10));

// #########################################################################################

// Using Arrow Functions
// Create a function that returns the given argument, but by using an arrow function.

// An arrow function is constructed like so:

// arrowFunc=(/*parameters*/)=>//code here
// Examples
// arrowFunc(3) ➞ 3

// arrowFunc("3") ➞ "3"

// arrowFunc(true) ➞ true

// function arrowFunc(parA){
//     return parA;
// }
// arrowFunc=(parA)=>{
//     return parA;
// }
// console.log(arrowFunc(true));

// ####################################################################################
// Miserable Parody of a Calculator
// Create a function that will handle simple math expressions. 
// The input is an expression in the form of a string.

// Examples
// calculator("23+4") ➞ 27

// calculator("45-15") ➞ 30

// calculator("13+2-5*2") ➞ 5

// calculator("49/7*2-3") ➞ 11

// function calculate (string){
//     return eval(string)
// }
// console.log(calculate("23+4"));

// ###########################################################
// Buggy Code (Part 4)

// function greeting(name) {
//     if(name == "Mubashir") {
//       return "Hello, my Love!";      
//     }
//     return "Hello, " + name + "!";
//   }
//   console.log(greeting("Maria"));

// ####################################################################################
// Two Makes Ten
// Create a function that takes two arguments. Both arguments are integers, a and b. 
// Return true if one of them is 10 or if their sum is 10.

// Examples
// makesTen(9, 10) ➞ true

// makesTen(9, 9) ➞ false

// makesTen(1, 9) ➞ true

// function makes10(a, b){
//     return (a && b) == 10 || (a + b) == 10;
// }
// console.log(makes10(9, 9));

// ##################################################################################################
// Let's Fuel Up!
// A vehicle needs 10 times the amount of fuel than the distance it travels. 
// However, it must always carry a minimum of 100 fuel before setting off.

// Create a function which calculates the amount of fuel it needs, given the distance.

// Examples
// calculateFuel(15) ➞ 150

// calculateFuel(23.5) ➞ 235

// calculateFuel(3) ➞ 100

// function calculateFuel(fueldistance){
//     let neededFuel = fueldistance *10;
//     if (neededFuel > 100) {
//         return neededFuel;
//     } else {
//         return 100;
//     }
// }        
// console.log(calculateFuel(3));

// #############################################################################################
// Pair Management
// Given two arguments, return an array which contains these two arguments.

// Examples
// makePair(1, 2) ➞ [1, 2]

// makePair(51, 21) ➞ [51, 21]

// makePair(512124, 215) ➞ [512124, 215]

// function makePair(a, b){
//     let myArray = [];
//     myArray.push(a);
//     myArray.push(b);
//     return myArray;
//     return [a,b];
// }
// console.log(makePair(51, 21));

// ######################################################################################
// Compare Strings by Count of Characters
// Create a function that takes two strings as arguments and return either true or false depending on whether 
// the total number of characters in the first string is equal to the total number of characters 
// in the second string.

// Examples
// comp("AB", "CD") ➞ true

// comp("ABC", "DE") ➞ false

// comp("hello", "edabit") ➞ false

// function comp(first, second){
//     return first.length == second.length;
// }
// console.log(comp("AB", "GHCD"));

// ###############################################################################
// Is the String Empty?
// Create a function that returns true if a string is empty and false otherwise.

// Examples
// isEmpty("") ➞ true

// isEmpty(" ") ➞ false

// isEmpty("a") ➞ false

// function isEmpty(x){
//     return x == [""];
// }
// console.log(isEmpty(" "));

// ##########################################################################
// Check if an Integer is Divisible By Five
// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

// Examples
// divisibleByFive(5) ➞ true

// divisibleByFive(-55) ➞ true

// divisibleByFive(37) ➞ false

// function divisibleByFive(num1){
//     return (num1 % 5) === 0;
// }
// console.log(divisibleByFive(12));

// #################################################################################
// Multiple of 100
// Create a function that takes an integer and return true if it's divisible by 100, otherwise return false.

// Examples
// divisible(1) ➞ false

// divisible(1000) ➞ true

// divisible(100) ➞ true

// function divisible(num1){
//     return num1 % 100 === 0;
// }
// console.log(divisible(100));

// ########################################################################################
// Recursion: Length of a String
// Write a function that returns the length of a string. Make your function recursive.

// Examples
// length("apple") ➞ 5

// length("make") ➞ 4

// length("a") ➞ 1

// length("") ➞ 0

// function length(comprimento){
//     return comprimento.length;
// }
// console.log(length("a"));
// ###########################################################################################
// Let's Fuel Up!
// A vehicle needs 10 times the amount of fuel than the distance it travels. However, 
// it must always carry a minimum of 100 fuel before setting off.

// Create a function which calculates the amount of fuel it needs, given the distance.

// Examples
// calculateFuel(15) ➞ 150

// calculateFuel(23.5) ➞ 235

// calculateFuel(3) ➞ 100

// function calculateFuel(distance){
//     if (distance * 10 < 100){
//         return 100;
//     } // > 100
//     return distance * 10;
// }

// function calculateFuel(distance){
//     return Math.max(100, distance * 10);
// }
// console.log(calculateFuel(10000));

// function calculateFuel(fueldistance){
//     let neededFuel = fueldistance * 10;
//     if (neededFuel > 100) {
//         return neededFuel;
//     } else { // <100
//         return 100;
//     }
// } 
// #################################################################################################
// Pair Management
// Given two arguments, return an array which contains these two arguments.

// Examples
// makePair(1, 2) ➞ [1, 2]

// makePair(51, 21) ➞ [51, 21]

// makePair(512124, 215) ➞ [512124, 215]

// function makePair(argA, argB){
//     return [argA, argB];
// }
// console.log(makePair("free", true));

// ##################################################################################################
// Divides Evenly
// Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.

// Examples
// dividesEvenly(98, 7) ➞ true
// // 98/7 = 14

// dividesEvenly(85, 4) ➞ false
// // 85/4 = 21.25

// function dividesEvenly(a , b){
//     return a % b == 0;
// }
// console.log(dividesEvenly(20, 4));

// ######################################################################################
// Return a String as an Integer
// Create a function that takes a string and returns it as an integer.

// Examples
// stringInt("6") ➞ 6

// stringInt("1000") ➞ 1000

// stringInt("12") ➞ 12

// function stringInt(arg){
//     return parseInt(arg);
// }
// console.log(stringInt("6"));

// ##########################################################################################
// Area of a Rectangle
// Create a function that calculates the area of a rectangle. If the arguments are invalid, your 
// function must return -1.

// Examples
// area(3, 4) ➞ 12

// area(10, 11) ➞ 110

// area(-1, 5) ➞ -1

// area(0, 2) ➞ -1

// function area(base, height){
//     if (base > 0 && height > 0) { 
//         return base * height;
//     } else {
//         return -1;
//     }
// }
// console.log(area(-1, 5));

// ################################################################################

// Concatenate First and Last Name into One String
// Given two strings, firstName and lastName, return a single string in the format "last, first".

// Examples
// concatName("First", "Last") ➞ "Last, First"

// concatName("John", "Doe") ➞ "Doe, John"

// concatName("Mary", "Jane") ➞ "Jane, Mary"


// function concatName(first, last){
//     // let str = last + ", " + first;
//     // return str;
//     return last + ", " + first;
// }
// console.log(concatName("oliver", "garcia"));

// #############################################################################

// Evaluate an Equation
// Create a function that evaluates an equation.

// Examples
// eq("1+2") ➞ 3

// eq("6/(9-7)") ➞ 3

// eq("3+2-4") ➞ 1

// function eq(arg){
//     return eval(arg);
// }
// console.log(eq('3+2-4'));

// ################################################################

// Solve the Equation
// Create a function that takes an equation (e.g. "1+1"), and returns the answer.

// Examples
// equation("1+1") ➞ 2

// equation("7*4-2") ➞ 26

// equation("1+1+1+1+1") ➞ 5

// function equation(calculate){
//     return eval(calculate); 
// }
// console.log(equation("7* 4-2"));

// ######################################################################################

// Upvotes vs Downvotes
// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. 
// This is calculated by subtracting the number of downvotes from upvotes.

// Examples
// getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13

// getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31

// getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0

// function getVoteCount(votes){
//     return votes.upvotes - votes["downvotes"];
// }
// console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));

// ######################################################################################

// Century Crisis
// You must calculate the number of people there will be in three decades from now.

// The variable population is the world population now.
// Assume that every month, someone gives birth to more people n.
// Return the number of people there will be when the spaceship is complete.

// Examples
// futurePeople(256, 2) ➞ 976

// futurePeople(3248, 6) ➞ 5408

// futurePeople(5240, 3) ➞ 6320

// function futureMoney(currentSave, monthlySafe){
//     return currentSave + monthlySafe * 12 * 30;
// }
// console.log(futureMoney(400000, 5000));

// ####################################################################################

// Return Negative
// Create a function that takes a number as an argument and returns negative of that number. 
// Return negative numbers without any change.

// Examples
// returnNegative(4) ➞ -4

// returnNegative(15) ➞ -15

// returnNegative(-4) ➞ -4

// returnNegative(0) ➞ 0

// function returnNegative(num){
//     return -num;
// }
// console.log(returnNegative(4));

// #####################################################################

// Reverse an Array
// Write a function to reverse an array.

// Examples
// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]

// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]

// reverse([]) ➞ []

// function myReverse(myArray){
//     return myArray.reverse();
// }
// console.log(myReverse([5,6,7,8]));

// ####################################################################

// Movie Theatre Admittance
// Write a function that checks whether a person can watch an MA15+ rated movie. 
// One of the following two conditions is required for admittance:

// The person is at least 15 years old.
// They have parental supervision.
// The function accepts two parameters, age and isSupervised. Return a boolean.

// Examples
// acceptIntoMovie(14, true) ➞ true

// acceptIntoMovie(14, false) ➞ false

// acceptIntoMovie(16, false) ➞ true

// function acceptIntoMovies(age, isSupervised){
//     return age > 15 || isSupervised;
// }
// console.log(acceptIntoMovies(14, false));

// ###########################################################################

// function incrementItems(arr) {
// 	for (let i = 0; i < arr.length; i++){
//         arr[i] = arr[i] + 1
//     }
//     return arr;
//     	}
// console.log(incrementItems([0,2]));

// #############################################################################
// Moving House
// I'd like to calculate how long on average I've lived in a single house.

// Given a person's age and the number of times they've moved house as moves, 
// return the average number of years that they've spent living in the same house.

// Examples
// yearsInOneHouse(30, 1) ➞ 15

// yearsInOneHouse(15, 2) ➞ 5

// yearsInOneHouse(80, 0) ➞ 80

// function yearsInOnHouse(age, mudancas){
//     return Math.round(age / (mudancas + 1));
//     }
// console.log(yearsInOnHouse(80,2));

// ################################################################################

// Drinks Allowed?
// A bartender is writing a simple program to determine whether he should serve drinks to someone. 
// He only serves drinks to people 18 and older and when he's not on break.

// Given the person's age, and whether break time is in session, create a function which returns 
// whether he should serve drinks.

// Examples
// shouldServeDrinks(17, true) ➞ false

// shouldServeDrinks(19, false) ➞ true

// shouldServeDrinks(30, true) ➞ false

// function shouldServeDrinks(age, breakTime){
//     return age > 18 && !breakTime;
// }
// console.log(shouldServeDrinks(19, false));

// ############################################################################################

// Format I: Template String
// Write a template string according to the following example:

// Example
// const a = "John";
// const b = "Joe";
// const c = "Jack";
// const template = "your template string" ➞ "Their names were:  John,  Joe  and  Jack."

// const a = "John";
// const b = "Joe";
// const c = "Jack";
// const template = `Their names were ${a}, ${b} and ${c}.`;

// console.log(template);

// ############################################################################################

// Arrow Functions
// add2 = (x) => x + 2; 
// console.log(add2);
// // ############################################################################################
// Using Ternary Operators
// It is written in the format:
// condition ? result_if_true : result_if_false
// Ternary operators are often more compact than multi-line if statements, and are useful for simple conditional tests.
// For example:
// is_nice = true
// // Using ternary operator.
// state = is_nice ? "nice" : "not nice"
// // Equivalent code using multi-line if statements.
// if (is_nice)
//   state = "nice"
// else
//   state = "not nice"
// Write a function that uses the ternary operator to return "yeah" if bool is true, and "nope" otherwise.

// Examples
// yeah_nope(true) ➞ "yeah"

// yeah_nope(false) ➞ "nope"

// function yeah_nope(istrue){
//     return istrue? "yeah" : "nope";
// }
// console.log(yeah_nope(false));

// #############################################################################################

// Minimal IV: if-else if-else Inferno
// code tab
// function equilbrium (x) {
// 	if (x > 0) return "positive"
// 	else if (x < 0) return "negative"
// 	}
// return true;

// ##############################################################################################
// Is the String Odd or Even?
// Given a string, return true if its length is even or false if the length is odd.

// Examples
// oddOrEven("apples") ➞ true
// // The word "apples" has 6 characters.
// // 6 is an even number, so the program outputs true.

// oddOrEven("pears") ➞ false
// // "pears" has 5 letters, and 5 is odd.
// // Therefore the program outputs false.

// oddOrEven("cherry") ➞ true

// function oddOrEven(x) {
//     return (x.length % 2 == 0);
// }
// console.log(oddOrEven("cherrys"));

// #####################################################################################

ES6: Destructuring Arrays I




























































































































































































































