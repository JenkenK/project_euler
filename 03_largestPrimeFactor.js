// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

const largestPrimeFactor = (number) => {
    primeArray = []

    for (i = 2; i <= number; i++) {
        if (number % i === 0) {
            for (j = 2; j <= i / 2; j++) {
                if (i % j === 0) {
                    isPrime = false
                } else {
                    isPrime = true
                }
            }

            if (isPrime == true) {
                number /= i
                primeArray.push(i)
            }
        }
    }

    console.log(Math.max.apply(Math, primeArray))
}

largestPrimeFactor(600851475143)