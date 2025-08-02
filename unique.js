const arr = [1, 2, 2, 3, 4, 4, 5,6,7,6];

const uniqueValues = arr.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(uniqueValues); // [1, 2, 3, 4, 5]
