const input = prompt("Enter the number that are separated by commas");
let arr= input.split(',').map(Number);
let reversed=  arr.reverse();
console.log("Reversed arrays is:",reversed);
