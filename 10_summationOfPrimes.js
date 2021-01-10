// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

const isPrime = (n) => {
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            return false;
        }
    };
    return true;
};

let prime = 1
let primeArr = []

for (i = 2; prime <= 2000000; i++) {
    if (isPrime(i)) {
        primeArr.push(i)
        prime = i
    }
}

console.log(primeArr.reduce((acc, current) => acc + current))