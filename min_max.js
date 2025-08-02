let arr = [1,4,6,7,876,345,654];
// ---1st approach
// let minVal = Math.min(...arr);
// console.log("Min:",minVal);

// let maxVal = Math.max(...arr);
// console.log("max:",maxVal);

// ----2nd approach--
// using sort ASCENDING AND descending

arr.sort((a,b)=>a-b)
let minVal =arr[0];

console.log("min value is:",arr[0]);

// for max value we sort descending order
arr.sort((a,b)=>b-a);
let maxVal = arr[0];

console.log("max value is:",arr[0]);

