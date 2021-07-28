// # Exercise description
// Find if a given character is inside a given string

// ## Example 1:
// Input: 
//     character = 'o';
//     string = 'house of blues'
// Output: true
var charToFind = 'l';
var strToFind = "world";
var str = "Hello world, welcome to the universe. Another world";

// Solution 2.1
var found = false;
for (let i = 0; i < str.length; i++) {
    console.log('position ' + i + ' letra ' + str[i]);
    if(charToFind == str[i]){
        found = true;
        break;
    }
}
console.log(found);

// Solution 2.1.1
// var found = false;
// for (const letra of str) {
//     console.log(letra);
//     if(charToFind == letra){
//         found = true;
//         break;
//     }
// }
// console.log(found);

// Solution 2.2
// var position = -1;
// for (let i = 0; i < str.length; i++) {
//     console.log('position ' + i + ' letra ' + str[i]);
//     if(charToFind == str[i]){
//         position = i;
//         break;
//     }
// }
// console.log(position);

// Solution 2.3
// var contar = 0;
// for (let i = 0; i < str.length; i++) {
//     console.log('position ' + i + ' letra ' + str[i]);
//     if(charToFind == str[i]){
//         contar++;
//     }
// }
// console.log(contar);

// var strToFind = "to";
// var str = "Hello to wow"; //orld, welcome to the universe. Another world";
// Solution 2.4
// var found = false;
// var tempChar;

// let i = 0;
// let j =0;
// let lastStartComp = -1;
// while (i < str.length && !found) {
//     while (j < strToFind.length && i < str.length && !found) {
//         if (strToFind[j] == str[i]) {
//             if (j == 0) {
//                 lastStartComp = i;
//             }
//             if (j == strToFind.length - 1) {
//                 found = true;
//             } else {
//                 j++;
//                 i++;
//             }
//         } else {
//             j = 0;
//             if (lastStartComp != -1) {
//                 i = lastStartComp + 1;
//                 lastStartComp = -1;
//             } else {
//                 i++
//             }
//         }
//     }
// }

// console.log(found);