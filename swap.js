///🍩🔥🔥 1st approach using third var---

// let a = prompt("Enter the value of a");
// let b = prompt("Enter the value of b");

// let temp = a;
// a=b;
// b = temp;

// console.log("a =", a, ", b =", b);



/// --- 2nd approach --- using arithmetic operation


let a = prompt("Enter the value of a");
 let b = prompt("Enter the value of b");
// using destructing 
[a, b] = [b, a];
// using arithmetic operation 
// a = a + b; // a = 15
// b = a - b; // b = 15 - 10 = 5
// a = a - b; // a = 15 - 5 = 10

console.log("a =", a); // 10
console.log("b =", b); // 5
