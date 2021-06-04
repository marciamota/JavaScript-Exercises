// # Exercise 2.1
// # Exercise description
// given an array of numbers, find if any combination of 2 numbers in the array are equal another given number

// ## Example 1:
// Input: 
//     sumToFind = 5;
//     numbers = [1,3,6,2]
// Output: 
//     3 + 2 = 5
//     if there is no such combinatio output 'sum not found'

// solution 2.1.1

// var sumToFind = 5;
// var numbers = [1,3,6,2];
// var sumFound = false;
// for (let i = 0; i < numbers.length -1; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
        
//         console.log(`other way, i=${i},j=${j}, ${numbers[i]}+${numbers[j]}`)
//         console.log("i="+i+",j="+j+", "+numbers[i]+"+" + numbers[j]);
        
//         console.log(numbers[i]+numbers[j]);
//         console.log(numbers[i]+numbers[j]==sumToFind);
//         if (numbers[i]+numbers[j]==sumToFind){
//             console.log("sum found: " + numbers[i] + " + " + numbers[j] + " = " + sumToFind);
//             sumFound = true;
//             break;
//         };
//     }
//     if (sumFound){
//         break;
//     };
// }

// if (!sumFound){
//     console.log("sum not found");
// };

// solution 2.1.2
// var sumToFind = 7;
// var numbers = [1,3,6,2];
// var secondNumber;
// var sumFound = false;
// for (let i = 0; i < numbers.length -1; i++) {
//     secondNumber = sumToFind - numbers[i];
//     if (numbers.indexOf(secondNumber) != -1) {
//         console.log('sum found: ' + numbers[i] + ' + ' + secondNumber + ' = ' + sumToFind);
//         sumFound = true;
//         break;
//     }
// }

// if (!sumFound){
//     console.log("sum not found");
// };

// solution 2.1.3
// var sumToFind = 7;
// var numbers = [1,3,6,2];
// var secondNumber;
// var sumFound = false;
// let i = 0;
// while (i < numbers.length -1 && !sumFound) {
//     secondNumber = sumToFind - numbers[i];
//     if (numbers.indexOf(secondNumber) != -1) {
//         console.log('sum found: ' + numbers[i] + ' + ' + secondNumber + ' = ' + sumToFind);
//         sumFound = true;
//     }
//     i++
// }

// if (!sumFound){
//     console.log("sum not found");
// };

const sumToFind = 5;
const numbers = [1,3,6,2];
let numberToFind; 
let sumNotFound = true;
for (let i = 0; i < numbers.length; i++) {
    numberToFind = sumToFind - numbers[i];
    if (numbers.indexOf(numberToFind) != -1) {
        console.log('sum found: ' + numbers[i] + ' + ' + numberToFind + ' = ' + sumToFind);
        sumNotFound = false;
        break;
    }
}

if (sumNotFound) {
    console.log('sum not found');
}