let word1 = prompt("Enter the first string");
let word2= prompt("Enter the second string");

function isAnagram(str1,str2){
 str1 = str1.toLowerCase().replace(/\s/g, '');
str2 = str2.toLowerCase().replace(/\s/g, '');

if(str1.length!==str2.length){
    return false;
    console.log("Length must be equal both string ");
    
}

let sorted1 = str1.split('').sort().join('');
let sorted2 = str2.split('').sort().join('');
return sorted1===sorted2;
console.log("String is anagram");

}

if(isAnagram(word1,word2)){
    alert(`"${word1}" and "${word2}" are anagram!`);
}

else{
     alert(`"${word1}" and "${word2}" are not anagram!`);

}