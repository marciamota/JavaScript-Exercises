// # Exercise 017
// # Exercise description
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.



// starting from the left compare the first letter of each word, 
// if the letter is the same for all the words then add it to prefix and continue with the next letter
// if one of the words doesn;t have the same letter then return the current prefix

const str2 = ['789x256','789y2gvjk','789z227jhd'];

function prefixo (words) {
    let prefix = ""; 
    let equalLetter;
    for (let i = 0; i < words[0].length; i++) {
        equalLetter = true;
        for (let j = 1; j < words.length; j++) {
            if (words[0].charAt(i) != words[j].charAt(i)) {
                equalLetter = false;
                break;
            }
        }
        if(equalLetter){
            prefix += words[0].charAt(i);
        } else {
            break;
        }
    }
    return prefix;
}
console.log(prefixo(str2))