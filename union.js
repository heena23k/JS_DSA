let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];
let combined = arr1.concat(arr2);
console.log("Before union ",combined);


let union  = [...new Set(combined)];

console.log(" After Union:", union);
