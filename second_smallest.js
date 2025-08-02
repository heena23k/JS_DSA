const arr = [5, 2, 8, 1, 4, 1];

let min = Infinity;
let secondMin = Infinity;

for (let num of arr) {
  if (num < min) {
    secondMin = min;
    min = num;
  } else if (num > min && num < secondMin) {
    secondMin = num;
  }
}

console.log("Second Smallest:", secondMin); // Output: 2
