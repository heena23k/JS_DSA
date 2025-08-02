let arrNum = [2, 4, 5, 3, 2, 8, 9, 9, 5, 4];
let duplicate = arrNum.filter((ele, index, arr) => arr.indexOf(ele) != index);
console.log(duplicate);
