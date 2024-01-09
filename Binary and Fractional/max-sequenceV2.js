function compareArray(Result, exp) {
    length = exp.length
    for (let i = length - 1; i >= 0; i++) {
        if (Result[i] !== exp[i]) {
            return false
        } else {
            return true
        }
    }
}



function convergence(num) {
    initialValue = num
    let newNum;
    let element = 0;
    let result = 0
    if (typeof (num) !== 'number') {
        return 'invalid'
    }
    if (num <= 0) {
        return [0]
    } else if (num === 1) {
        return 3
    }

    while (num !== 1) {
        result++
        if (num % 2 === 0) {
            newNum = num / 2
            result[element] = newNum
        } else {
            newNum = (3 * num) + 1
            result[element] = newNum
        }
        num = newNum
    }
    return [initialValue, result]
}


function TestCase() {
    let TestCase = [
        {
            "x": 5,
            "exp": [5, 5]
        },
        {
            "x": "str",
            "exp": "invalid"
        },
        {
            "x": 6,
            "exp": [6, 8]
        },
        {
            "x": 3,
            "exp": [3, 7]
        },
        {
            "x": 0,
            "exp": [0]
        }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        let result = convergence(TestCase[i].x);
        let got = compareArray(result, TestCase[i].exp)
        if (got) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}
// TestCase()



/**********************************************************************************/

function findMaxSequence(min, max) {
    let convergeSequence = []
    let position = 0
    let maxLength = 0;
    if (typeof (min) !== 'number') {
        return 'invalid'
    } else if (typeof (max) !== 'number') {
        return 'invalid'
    }
    let i = min;
    while (i <= max) {
        converge = convergence(i)
        convergeSequence[position] = converge
        position++
        i++
    }

    // for (let i = 0; i < convergeSequence.length; i++) {
    //     console.log(convergeSequence.length)
    //     if (maxLength < convergeSequence[i]) {
    //         maxLength = convergeSequence[i]
    //     }
    //     console.log(maxLength)
    // }
    return convergeSequence
}

console.log(findMaxSequence(3, 9))

function tcsMax() {
    let tcsMax = [
        {
            "min": 2,
            "max": 4,
            "exp": [3, 7]
        },
        {
            "min": 3,
            "max": 6,
            "exp": [6, 8]
        },
        {
            "min": 2,
            "max": "string",
            "exp": 'invalid'
        }

    ]
    for (let i = 0; i < tcsMax.length; i++) {
        let result = findMaxSequence(tcsMax[i].min, tcsMax[i].max);
        let got = compareArray(result, tcsMax[i].exp)
        if (got) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}

// tcsMax()

