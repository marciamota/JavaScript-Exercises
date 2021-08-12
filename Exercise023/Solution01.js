// Create a function that takes a number as its only argument and returns true 
//if it's less than or equal to zero, otherwise return false.

// Examples
// lessThanOrEqualToZero(5) ➞ false

// lessThanOrEqualToZero(0) ➞ true

// lessThanOrEqualToZero(-2) ➞ true

// function lessThanOrEqualToZero(numA){
//     return numA <= 0;
// }
// console.log(lessThanOrEqualToZero(0));

// ######################################################################################

// Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).

// Examples
// sumPolygon(3) ➞ 180

// sumPolygon(4) ➞ 360

// sumPolygon(6) ➞ 720
// Notes
// n will always be greater than 2.
// The formula (n - 2) x 180 gives the sum of all the measures of the angles of an n-sided polygon.

// function sumPolygon(nPolygon){
//     return (nPolygon - 2) * 180;
// }
// console.log(sumPolygon(3));

// #####################################################################################

// You are counting points for a basketball game, 
// given the amount of 2-pointers scored and 3-pointers scored, 
// find the final points for the team and return that value.

// Examples
// points(1, 1) ➞ 5

// points(7, 5) ➞ 29

// points(38, 8) ➞ 100

// function points(pointers2,pointers3){
//     return (pointers2 * 2) + (pointers3 *3);
// }
// console.log(points(38,8));

// ################################################################################
// debug
// Basic Variable Assignment
function nameString(name){
	var b = "Edabit";
	var result = name + b;
  	return result
}