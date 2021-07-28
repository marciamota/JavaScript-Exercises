var i = 0;
i++; // increment i by 1
i--; // decrement i by 1

var x = []; // create empty array
var y = ['w', 'q']; // create aray with values
console.log(y[0]); // x[0] get value of position 0 of the array
y.push('t'); // adds the value "t" to the end of the array

var z = ['x','y','x'];
z.length; // returns the size of the array, in this case 3

// create function: keyword function name_of_function (input values to the function inside parenthesis)
// body of function inside curly brackets
function myFunction(parA, parB) { 
    // body of the function
    console.log(parA)
}

// (let i = start; i condition to end; how to move/change i)
var myArray = ['x','y','x'];
for (let i = 0; i < myArray.length; i++){

}

// another for that works for arrays
var myArray = ['x','y','x'];
for (elementFromMyArray in myArray){ // takes one by one each element of myArray and executes the body of the for
    console.log(elementFromMyArray);
}

// (conditions to check inside parenthesis) body of if inside curly brackets
if (i == 0) { // for comparison use 2 or 3 =, example == or ===

}

// (conditions to check inside parenthesis) body of while inside curly brackets
while (i == 0 || i == 3) { // || or, && and

}

// includes check if the given value exists in the array, returns true or false 
const A = [2, 3, -2, 5, -3];
A.includes(1);

// includes check if the given value exists in the string, returns true or false 
const B = 'hello world';
B.includes('wo');