// const input =  prompt("Enter the number");
// const number = Number(input);

// console.log(`Factors of ${number} are:`);

// for (let i = 1; i <= number; i++) {
//     if (number % i === 0) {
//         console.log(i);
//     }
// }


const input = prompt("Enter a number:");
const number = Number(input);

function findFactors(num) {
    let factors = [];

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }

    return factors;
}

const result = findFactors(number);
console.log(`Factors of ${number} are:`, result);
