// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

const largestPalindromeProduct = () => {
    let productArray = []
    let palindrome = []

    for (i = 1; i < 1000; i++) {
        for (j = 1; j < 1000; j++) {
            productArray.push(i * j)
        }
    }

    for (k = 0; k < productArray.length; k++) {
        let product = productArray[k].toString()
        let reverse = productArray[k].toString().split('').reverse().join('')
        if (product === reverse) {
            palindrome.push(product)
        }

    }

    console.log(Math.max.apply(Math, palindrome))
}

largestPalindromeProduct()