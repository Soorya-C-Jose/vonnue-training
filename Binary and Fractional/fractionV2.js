function subtractNum(num1, num2) {
    return num1 - num2
}
console.log(subtractNum(4, 3))

function findFraction(numarator, denominator) {
    let fraction = numarator
    division = 0
    for (let i = 1; fraction >= denominator; i++) {
        result = subtractNum(fraction, denominator)
        division = i
    }
    return division
}

console.log(findFraction(10, 2))

