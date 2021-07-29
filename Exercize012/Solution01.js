// # Exercise 012
// # Exercise description
// Days of the week are represented as three-letter strings ("Mon","Tue","Wed","Thu","Fri"."Sat","Sun")
// Write a function solution that, given a string S representing the day of the week 
// and an integer K (between 0 and 500, inclusive), returns the day of the week that is K days later.
// For example, 
// given S = "Mon" and K = 0, the function should return "Mon"
// given S = "Wed" and K = 2, the function should return "Fri"
// Given S = "Sat" and K = 23, the function should return "Mon"

var S = "Wed";
var K = 15;

function solution(dayOfTheWeek, K) {
    const weekDays = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
    let weekDayNumeral = weekDays.indexOf(dayOfTheWeek);
    let remainder = K % 7;
    return weekDays[weekDayNumeral + remainder];
}

console.log(solution(S, K));