function fact(n){
    if(n===1||n===0){
        return n;
    }
    else
  return n*fact(n-1);
}
console.log(fact(5));


// -----2nd Approach----🔥🔥🔥

// const EnterInput = prompt("Enter the number");      
// let fact = 1;
// if(EnterInput<0){
//   console.log(`Invalid`);
  
// }
// else{
//   for(let i=1;i<=EnterInput;i++){
//     fact = fact*i;
//   }
//   console.log("Factorial will be:",fact);

// }



