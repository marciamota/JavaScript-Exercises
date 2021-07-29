// # Exercise 012
// # Exercise description

// Write a function solution that, given an array A of N integers, 
// returns the largest integer K > 0 such that both values K and −K (the opposite number) exist in the array A. 
// If there is no such integer, the function should return 0.
// Examples:
// 1. Given A = [3, 2, −2, 5, −3], the function should return 3 (both 3 and −3 exist in array A).
// 2. Given A = [1, 1, 2, −1, 2, −1], the function should return 1 (both 1 and −1 exist in array A).
// 3. Given A = [1, 2, 3, −4], the function should return 0 (there is no such K for which both values K and −K exist in array A).
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000,000..1,000,000,000</span>]
const A = [2, 7, -2, 5, -7];

// inicializaqr a resposta com zero (assumir que no existe o numero que cumple as condicoes)
// um por um pegar un numero do array (chamado numero atual)
// ver se e maior que zero
// ver se existe o negsativo
// ver se e maior que a resposta anterior
// se todo o anterior se cumple entao atualizar resposta com o numero atual
// quando tiver checado todos os numeros a funcao retorna a resposta

// function solution(A) {
//     var answer = 0; //inicializar a resposta com zero (assumir que no existe o numero que cumple as condicoes)
//     var currentNumber;
//     for (let i = 0; i < A.length; i++){ // um por um pegar un numero do array (chamado numero atual)
//         currentNumber = A[i]; // A[i] takes the value that is in the position i of the array
//         if (currentNumber > 0 && // ver se e maior que zero
//             A.includes(-currentNumber) && // ver se inclui o negsativo
//             currentNumber > answer) { // ver se e maior que a resposta anterior

//             answer = currentNumber; // se todo o anterior se cumple entao atualizar resposta com o numero atual
//         }
//     }
//     return answer; // quando tiver checado todos os numeros a funcao retorna a resposta
// }

// console.log(solution(A));

function solution(A) {
    var answer = 0; //inicializar a resposta com zero (assumir que no existe o numero que cumple as condicoes)
    for (currentNumber of A){ // um por um pegar un numero do array (chamado numero atual)
        if (currentNumber > 0 && // ver se e maior que zero
            A.includes(-currentNumber) && // ver se inclui o negsativo
            currentNumber > answer) { // ver se e maior que a resposta anterior
            answer = currentNumber; // se todo o anterior se cumple entao atualizar resposta com o numero atual
        }
    }
    return answer; // quando tiver checado todos os numeros a funcao retorna a resposta
}

console.log(solution(A));