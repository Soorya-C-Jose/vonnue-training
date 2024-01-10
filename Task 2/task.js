//factorial

function findFact(num) {
    let factorial = num
    if (num === 0) {
        return 1
    } else if (num < 0 || num > 21) {
        return -1
    } else if (typeof (num) !== 'number') {
        return 'invalid'
    }
    for (let i = num - 1; i > 0; i--) {
        factorial = factorial * i
    }
    return factorial
}

function TestCase() {
    let TestCase = [
        {
            "num": 5,
            "exp": 120
        },
        {
            "num": 3,
            "exp": 6
        },
        {
            "num": 4,
            "exp": 24
        },
        {
            "num": 0,
            "exp": 1
        },
        {
            "num": -10,
            "exp": -1
        },
        {
            "num": "not a number",
            "exp": 'invalid'
        },
        {
            "num": 22,
            "exp": -1
        }
    ]
    for (let i = 0; i < TestCase.length; i++) {
        let result = findFact(TestCase[i].num);
        if (result === TestCase[i].exp) {
            console.log("TestCase " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}
// TestCase()




/**************************************************/

//exponenet

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

function tcsOfExpo() {
    let tcsOfExpo = [
        {
            "num": 2,
            "exponent": 3,
            "exp": 8
        },
        {
            "num": 5,
            "exponent": 3,
            "exp": 125
        },
        {
            "num": 5,
            "exponent": 0,
            "exp": 1
        },
        {
            "num": 0,
            "exponent": 0,
            "exp": 0
        },
        {
            "num": 4,
            "exponent": -2,
            "exp": -1
        }
    ]

    for (let i = 0; i < tcsOfExpo.length; i++) {
        let result = findExponent(tcsOfExpo[i].num, tcsOfExpo[i].exponent);
        if (result === tcsOfExpo[i].exp) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}
// tcsOfExpo()


/********************************************************************/

function reduce(number) {
    if (typeof (number) !== "number") {
        return 'invalid'
    } else if (number < 360) {
        return number
    } else if (number === 360) {
        return 0
    }
    let current = 360
    while (number > current) {
        number = number - current
    }
    return number
}


function findFactor(num) {
    let fact = reduce(num) * (6.28 / 360)
    return fact
}
console.log(findFactor(460))



function tcsOfReduce() {
    let tcsOfReduce = [
        {
            "num": 480,
            "exp": 120
        },
        {
            "num": 1000,
            "exp": 280
        },
        {
            "num": 360,
            "exp": 0
        },
        {
            "num": "number",
            "exp": 'invalid'
        },
        {
            "num": 240,
            "exp": 240
        }
    ]
    for (let i = 0; i < tcsOfReduce.length; i++) {
        let result = reduce(tcsOfReduce[i].num);
        if (result === tcsOfReduce[i].exp) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}

tcsOfReduce()




/**************************************************************************/

//seqMax
function seqMax(x, num) {
    //let num = num of terms
    (findFactor(x)) - ((findExponent(x, 3)) / (findFact(3))) + ((findExponent(x, 5)) / (findFact(5)))
}
// console.log(seqMax(x,3))