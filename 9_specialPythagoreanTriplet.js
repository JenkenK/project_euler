// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

// for (let number in [...Array(5).keys()]) {
//     console.log(number)
// }
// console.log([...Array(5).keys()])

let a = 1;
let b = 2;
let c = Math.sqrt(a * a + b * b);
let sum = a + b + c;
while (sum != 1000) {
    if (sum > 1000) {
        a++;
        b = a + 1;
    } else {
        b++;
    }
    c = Math.sqrt(a * a + b * b);
    sum = a + b + c;
}

console.log(a);
console.log(b);
console.log(c);
console.log(a * b * c);