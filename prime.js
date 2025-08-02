const input = prompt("Enter the Number");
const number = Number(input);

if (number <= 1) {
    console.log(`${number} is not a prime number`);
} else {
    let isPrime = true;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log("This is a prime number");
    } else {
        console.log("This is not a prime number");
    }
}
