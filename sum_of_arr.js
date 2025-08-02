let arr = [1,2,3,4,6,7];
// let sum = 0;
// for(let i =0;i<arr.length;i++){
//     sum = sum+arr[i];

// }
// console.log("Sum is:",sum);


//🔥 2nd approach 

let Ans  = arr.reduce((sum,num)=>sum+num,0);
console.log("Sum will be:",Ans);

