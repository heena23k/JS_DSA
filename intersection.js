let arr1  = [3,4,5,6,7,8];
let arr2 = [9,5,4,3,2,8];

let intersection  = arr1.filter(value=>arr2.includes(value));
console.log("Intersection will be:",intersection);
