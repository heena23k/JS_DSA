// function fibonic(n){
//     if(n<0){
//         console.log("Invalid");
//         return -1;
        
//     }
//     let num1= 0;
//     console.log(num1);
//     let num2 = 1;
//     console.log(num2);
//     let sum;
//     for(let i= 2;i<n;i++){
//         sum = num1+num2;
//         console.log(sum);
//         num1 = num2;
//         num2 = sum;
        
//     }
    
//     return sum;
    
    
// }
// fibonic(5);


// if print in th arr
function getFibonacciArray(n) {
  if (n < 0) {
    console.log("Inavlid");
    
  };

  let result = [0];
  if (n === 1) return result;

  result.push(1);

  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result;
}

console.log(getFibonacciArray(-8)); // [0, 1, 1, 2, 3, 5, 8]
