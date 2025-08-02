const students = [
  { name: "Heena", age: 11 },
  { name: "Aman", age: 12 },
  { name: "Riya", age: 11 },
  { name: "Rahul", age: 13 },
  { name: "Sneha", age: 12 },
  { name: "Kabir", age: 14 },
  { name: "Pooja", age: 13 },
  { name: "Arjun", age: 11 },
  { name: "Meena", age: 12 },
  { name: "Deva", age: 14 },
];
// using filter method 
const filterItem= students.filter((item)=>{
    return item.age>12;
})
console.log(filterItem);


// using find method
console.log("Find method");

const findItem = students.find((item)=>{
    return item.age>12;
})
console.log(findItem);
