// if missing number is one 

// let arr = [1,3,4,5,6,7];
// let n = Math.max(...arr)
// let Result = [];

// // using reduce function
// let actualSum = arr.reduce((sum,arr)=>sum+arr,0);
// let totalSum = (n*(n+1)/2);

// let missing = totalSum-actualSum;
// console.log("Missing number is:",missing);




//  if missing number is more than one ✌✌

let arr = [5,7,8,9];
let e = Math.max(...arr);
let s = Math.min(...arr);

let missing = [];

// traverse the arr
for(let i=s;i<=e;i++){
    if(!arr.includes(i))
        missing.push(i);
}
console.log(("Missing number are:",missing));
