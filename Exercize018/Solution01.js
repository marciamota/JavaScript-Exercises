// Create a function that takes two numbers as arguments and return their sum.

function sumNumbers(x, y){
    return x + y;
}
console.log(sumNumbers(1,2));

const a = 4;
const b = 7;
console.log(sumNumbers(a, b));
console.log(4);
console.log(a);

// Create a function that takes two numbers as arguments (x and y) and return their x -y.


function subNumber (x, y){
    return x - y;
}
console.log(subNumber(2, 1));
// Write a function that takes an integer minutes and converts it to seconds.

function myTime(min) {
    return min * 60;
}
console.log(myTime(20));

// Write a function that takes an integer hours and converts it to seconds.

function myHour(hour){
    let minutes = hour * 60;
    let seconds = minutes * 60;
    // return seconds;
    return hour * 60 * 60;
}
console.log(myHour(24));

// Write a function that takes an integer days and converts it to seconds.

function myDays(days){
    let horas = days * 24;
    let minutes = horas * 60;
    let seconds = minutes * 60;
    return seconds;
    // return days * 24 * 60 * 60;
}
console.log(myDays(30));
const dayCount = 15;
console.log(myDays(dayCount));

// Write a function that takes an integer years and converts it to seconds.

function myYear(year){
    return year * 365 * 24 * 60 * 60;
}
console.log(myYear(45));

function myYear2(year){
    return myDays(year * 365);
}

console.log(myYear2(2));

// calculate how many seconds oliver has lived more than marcia
console.log(myYear(45 - 38));



// Write a function that takes an integer kg and converts it to grams.

function kilosToGrams(kilos){
    return kilos * 1000;
}
console.log(kilosToGrams(10));