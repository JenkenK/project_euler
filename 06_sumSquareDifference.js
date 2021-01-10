// The sum of the squares of the first ten natural numbers is 1^2 + 2^2 + ... + 10^2 = 385,

// The square of the sum of the first ten natural numbers is, (1 + 2 + ... + 10)^2 = 55^2 = 3025

// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is  3025 - 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.


let squaredNumbers = []
let naturalNumbers = []

for (i = 1; i <= 100; i++) {
    naturalNumbers.push(i)
    squaredNumbers.push(i ** 2)
}

const sumOfSquare = squaredNumbers.reduce((acc, current) => acc + current)
const squareOfSum = (naturalNumbers.reduce((acc, current) => acc + current)) ** 2

console.log(squareOfSum - sumOfSquare)