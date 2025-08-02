const arr  = [1, 2, 3, null, 4, 5, 6];   // or undefined instead of null
const neat = arr.filter(item => item != null); // keeps everything except null & undefined
console.log(neat); // [1, 2, 3, 4, 5, 6]
