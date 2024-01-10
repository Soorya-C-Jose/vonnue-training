function reduce(number) {
    if (typeof (number) !== "number") {
        return 'invalid'
    } else if (number < 360) {
        return number
    }
    else if (number === 360) {
        return 0
    }
    let current = 360
    while (number > current) {
        number = number - current
    }
    return number
}


function findFact(num) {
    let fact = reduce(num) * (6.28 / 360)
    return fact
}


function seqMax() {

}





/***********************/

function findExponent(num, exponent) {
    if (num === 0 && exponent === 0) {
        return 0
    } else if (exponent === 0) {
        return 1
    } else if (exponent < 0) {
        return -1
    }
    let count = 0
    let value;
    let initial = num
    while (count !== (exponent - 1)) {
        value = num * initial;
        count++
        num = value
    }
    return value

}

console.log(findExponent(2,69))
console.log(1999999999999999)

