// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?


const isPrime = (n) => {
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            return false;
        }
    };
    return true;
};

const generatePrime = num => {
    const arr = [];
    let i = 2;
    while (arr.length <= num) {
        if (isPrime(i)) {
            arr.push(i);
        };
        i = i === 2 ? i + 1 : i + 2;
    };
    return arr;
};

console.log(generatePrime(10001));