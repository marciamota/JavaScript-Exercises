// # Exercise 6.1
// Given an array arr of dogs cats and birds, count how many dogs, cats and birds there are in the array.

// ## Example 1:
// Input: arr = ['dog', 'cat', 'dog', 'cat']
// Output: there are 2 dog, 2 cat, 0 bird

// Solution 8.1
// const animals = ['dog', 'cat', 'dog', 'cat'];
// let animalsCount = {
//     dog: 0,
//     cat: 0,
//     bird: 0
// }
// let currentAnimal;
// for (let i = 0; i < animals.length; i++) {
//     currentAnimal = animals[i];
//     animalsCount[currentAnimal]++;
// }
// console.log(animalsCount);

// // Solution 8.2
// const animals = ['dog', 'cat', 'dog', 'cat'];
// let countDog = 0;
// let countCat = 0;
// let countBird = 0;

// let currentAnimal;
// for (let i = 0; i < animals.length; i++) {
//     currentAnimal = animals[i];
//     if (currentAnimal == 'dog') {
//         countDog++;
//     } else if (currentAnimal == 'cat') {
//         countCat++;
//     } else if (currentAnimal == 'bird') {
//         countBird++;
//     } else {
            // console.log('don\'t know this animal');
        // }
// }
// console.log('dog: ' + countDog + ', cat: ' + countCat + ', bird: ' + countBird);

// // Solution 8.3
// const animals = ['dog', 'cat', 'dog', 'cat', 'fish'];
// let countDog = 0;
// let countCat = 0;
// let countBird = 0;
// let currentAnimal;
// for (let i = 0; i < animals.length; i++) {
//     currentAnimal = animals[i];
//     switch (currentAnimal) {
//         case 'dog':
//             countDog++;
//             break;
//         case 'cat':
//             countCat++;
//             break;
//         case 'bird':
//             countBird++;
//             break;
//         default:
//             console.log('don\'t know this animal');
//     }
// }
// console.log('dog: ' + countDog + ', cat: ' + countCat + ', bird: ' + countBird);

// # Exercise 8.2
// Given an array arr of animals of many species, count the animals of each species.

// ## Example 2:
// Input: arr = ['dog', 'cat', 'dog', 'cat', 'sheep', 'snake']
// Output: there are 2 dog, 2 cat, sheep 1, snake 1

// const animals = ['dog', 'cat', 'dog', 'cat', 'sheep', 'snake'];

// let animalsCount = {};
// let species = [];
// let currentAnimal;
// for (let i = 0; i < animals.length; i++) {
//     currentAnimal = animals[i];
//     species = Object.keys(animalsCount);
//     if (!species.includes(currentAnimal)) {
//         animalsCount[currentAnimal] = 1;
//     } else {
//         animalsCount[currentAnimal]++;
//     }
// }
// species = Object.keys(animalsCount);
// console.log(animalsCount);
// let message = 'I have ';
// let currentSpecies;
// for (let i = 0; i < species.length; i++) {
//     currentSpecies = species[i];
//     message += animalsCount[currentSpecies] + " " + currentSpecies + ", ";
// }
// console.log(message);
// for (const animal in animalsCount) {
//     console.log('I have ' + animalsCount[animal] + " " + animal);
// }

// # Exercise 8.2 part 2
// having a list of animal quantities in the format below, return the type of animal
// with more individuals
// Example
// input: let animalsCount = {
//     dog: 2,
//     cat: 3,
//     bird: 1
// }
// output: 3 cat

// solution 8.2 part 2.1
// let animalsCount = {
//     dog: 2,
//     cat: 3,
//     fish: 3,
//     bird: 1
// }
// let animalWithMostIndividuals = ''; //  dog, cat
// let speciesQuantity = 0; // 2, 5, 10
// for (const animal in animalsCount) {
//     if (speciesQuantity < animalsCount[animal]) {
//         animalWithMostIndividuals = animal;
//         speciesQuantity = animalsCount[animal];
//     }
// }
// console.log('i have ' + speciesQuantity + ' ' + animalWithMostIndividuals);

// solution 8.2 part 2.2
// let animalsCount = {
//     dog: 2,
//     cat: 3,
//     fish: 3,
//     bird: 1
// }
// let animalWithMostIndividuals = ''; //  dog, cat
// let speciesQuantity = 0; // 2, 5, 10
// const species = Object.keys(animalsCount);
// let currentAnimal;
// for (let i = 0; i < species.length; i++) {
//     currentAnimal = species[i];
//     if (speciesQuantity < animalsCount[currentAnimal]) {
//         animalWithMostIndividuals = currentAnimal;
//         speciesQuantity = animalsCount[currentAnimal];
//     }
// }
// console.log('i have ' + speciesQuantity + ' ' + animalWithMostIndividuals);

// solution 8.2 part 2.3
let animalsCount = {
    dog: 2,
    cat: 3,
    fish: 3,
    bird: 1
}
let animalWithMostIndividuals = ''; //  dog, cat
let speciesQuantity = 0; // 2, 5, 10
for (const [animal, animalQuantity] of Object.entries(animalsCount)) {
    if (speciesQuantity < animalQuantity) {
        animalWithMostIndividuals = animal;
        speciesQuantity = animalQuantity;
    }
}
console.log('i have ' + speciesQuantity + ' ' + animalWithMostIndividuals);