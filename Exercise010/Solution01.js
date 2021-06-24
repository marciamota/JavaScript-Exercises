// // #Exercise 10
// // create a function that simulates a toss coin

// // Example:
// // the function must randomly return head or tails

// // Soulution 10.1

// function coinToss() {
//     if (Math.random() > 0.5) {
//         return "heads";
//     }
//     return "tails";
// }

// var resultados = [];
// for (let i = 0; i < 10; i++) {
//     resultados.push(coinToss())
// }
// console.log(resultados);

// // #Exercise 10
// // create a function that simulates a dice

// // Example:
// // the function must randomly return 1, 2, 3, 4, 5, 6

// // Soulution 10.1

// function dice() {
//     const randomNumber = Math.random();
//     const randomNumberUpTo6 = 6 * randomNumber;
//     const randomIntegerFrom1to6 = Math.ceil(randomNumberUpTo6);
//     return randomIntegerFrom1to6;
//     // return Math.ceil(6 * Math.random());
// }

// var resultados = [];
// for (let i = 0; i < 10; i++) {
//     resultados.push(dice())
// }
// console.log(resultados);

// #Exercise 10
// create a function that picks a random element from an array

// Example:
// the function must randomly return an element from this array
// const food = ['pizza', 'hot dog', 'spaghetti']

// Soulution 10.1
const food = ['pizza', 'hot dog', 'spaghetti', 'mixto'];

function randomPick(myArray) {
    const randomNumber = Math.random();
    const randomNumberUpToX = myArray.length * randomNumber;
    const randomInteger = Math.floor(randomNumberUpToX);
    // randomInteger 0 1 2 3
    return myArray[randomInteger];
    // return Math.ceil(6 * Math.random());
}

var resultados = [];
for (let i = 0; i < 10; i++) {
    resultados.push(randomPick(food))
}
console.log(resultados);