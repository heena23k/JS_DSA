const input  = prompt("Enter the input string ");
const vowel = ['a','e','i','o','u'];
const findVowel = [];

for(let char of input.toLowerCase()){
    if(vowel.includes(char)){
        findVowel.push(char);
        
        
    }
}
console.log("Vowel is",findVowel);

