// using concat method 

let arr1 = [1,5,8];
let arr2 = [9,7,6];

// let merged = arr1.concat(arr2);
let merged = [...arr1,...arr2];

console.log(merged);
