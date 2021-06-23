// fibonacci starting in 1
// function fibonacci (num) {
//     let arr = [];
//     let first = 0;
//     let second = 1;
//     let sum = 1;

//     while(num > 0) {
//         arr.push(sum);
//         sum = first + second;
        

//         first = second;
//         second = sum; 
        
//         num = num - 1;
//     }
//     return arr;
// }
// console.log(fibonacci(5));

// // fibonacci starting in 0
// function fibonacci (num) {
//     let arr = [];
//     let first = 0;
//     let second = 1;
//     let sum = 0;

//     for (let i = 1; i<=num; i++) {
//         if (i == 1) {
//             arr.push(0);
//         } else if (i == 2) {
//             arr.push(1);
//         } else {
//             sum = first + second;
//             arr.push(sum);
    
//             first = second;
//             second = sum; 
//         }
//     }
//     return arr;
// }
// console.log(fibonacci(7));

// fibonacci starting in 0
function fibonacci (num) {
    let arr = [];
    let first = 0;
    let second = 1;
    let sum = 1;

    for (let i = 1; i<=num; i++) {
        if (i == 1) {
            arr.push(0);
        } else {
            arr.push(sum);
            sum = first + second;
            
            first = second;
            second = sum; 
        }
    }
    return arr;
}
console.log(fibonacci(7));