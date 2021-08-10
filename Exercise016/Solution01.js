// # Exercise 016
// # Exercise description
// make a function that shows in teh console the numbers from 999 to 100

// function myNumbers() {
//     for (let i = 999; i >= 100; i--) {
//         console.log(i);
//     }
// }
// myNumbers();

// make a function that shows in teh console the numbers from x to y (y could be greater or less than x)

function myNumbers(x, y) {
    if (x >= y) { // for example x = 10, y = 2
        for (let i = x; i >= y; i--) {
            console.log(i);
        }
    } else { // x < y
        for (let i = x; i <= y; i++) {
            console.log(i);
        }
    }
}

myNumbers(5, 15);