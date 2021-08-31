// Create a function that calculates the area of a rectangle. If the arguments are invalid, your function must return -1.

// Examples
// area(3, 4) ➞ 12

// area(10, 11) ➞ 110

// area(-1, 5) ➞ -1

// area(-3, 5) ➞ -1

// area(-3, -5) ➞ -1

// area(3, -5) ➞ -1

// area(0, 2) ➞ -1

// function area (base, height){
//     if (base > 0 && height > 0) {
//         return base * height;
//     }
//     // if (base <= 0 || height <= 0){
//     //     return base * height;
//     // } 
//     return -1;
// }
// console.log(area(1,0));

// ##########################################################################################
// Given two strings, firstName and lastName, return a single string in the format "last, first".

// Examples
// concatName("First", "Last") ➞ "Last, First"

// concatName("John", "Doe") ➞ "Doe, John"

// concatName("Mary", "Jane") ➞ "Jane, Mary"

// function concatName(lastname, firstname){
//     return lastname + ', ' + firstname;
// }
// console.log(concatName("Gael","Mary"));

// ##################################################################################################

// Create a function that evaluates an equation.

// Examples
// eq("1+2") ➞ 3

// eq("6/(9-7)") ➞ 3

// eq("3+2-4") ➞ 1

// function eq (str){ 
//     return eval(str);
// }
// console.log(eq("2*3"));

// #############################################################################################
// Solve the Equation
// Create a function that takes an equation (e.g. "1+1"), and returns the answer.

// Examples
// equation("1+1") ➞ 2

// equation("7*4-2") ➞ 26

// equation("1+1+1+1+1") ➞ 5

// function equation (str){
//     return eval(str);
// }
// console.log(equation("8/4+2"));

// #############################################################################################
// Upvotes vs Downvotes
// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

// Examples
// getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13

// getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31

// getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0


// function getVoteCount(votes){
//     return votes.upvotes - votes.downvotes;
// }

// console.log(getVoteCount( {upvotes: 133, downvotes: 132} ));

// var jsobject1 = {
//     upvotes: 132,
//     downvotes: 132
// }

// console.log(jsobject1.upvotes);

// var JSObject = {
//     cachorro: {
//         nome: 'tutty',
//         dona: 'marcia',
//         gosta: ['parque', 'fugir']
//     },
//     periquitinho: {
//         nome: 'juquinha',
//         dona: 'patiriva',
//         gosta: ['banho', 'barulho']
//     }
// }

// console.log(JSObject.cachorro.dona);
// console.log(JSObject['cachorro']['dona']);
// console.log(JSObject['cachorro'].dona);

// #############################################################################################
// Century Crisis
// Scientists have discovered that in four decades, the world will EXPLODE! It will also take three decades to 
// make a spaceship to travel to a new planet that can hold the entire world population.

// You must calculate the number of people there will be in three decades from now.

// The variable population is the world population now.
// Assume that every month, someone gives birth to more people n.
// Return the number of people there will be when the spaceship is complete.

// Examples
// futurePeople(256, 2) ➞ 976

// futurePeople(3248, 6) ➞ 5408

// futurePeople(5240, 3) ➞ 6320

// function futurePeople(initialPeopleCount, birthsPerMonth){
//     const months = 360;
//     return initialPeopleCount + (birthsPerMonth * months);
// }
// console.log(futurePeople(1000, 2));

// quanto dinheiro em 30 anos sem gastar. salvo ate agora x e vai salvar na variavel savings.

// function money (salario, dinheirosalvo){
//     const months = 360;
//     return dinheirosalvo + (salario * months);
// }
// console.log(money(8000,200000));

// Century Crisis