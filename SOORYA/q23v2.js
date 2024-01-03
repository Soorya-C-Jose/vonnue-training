
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

function arrayReverse(arr) {
    let reversed = []
    let length = arr.length;
    if (arr.length <= 0) {
        return 0
    }
    for (i = length - 1; i >= 0; i--) {
        reversed[i] = i
    }
    return reversed
}
console.log([1, 2, 3])

function TestCase() {
    let TestCase = [
        {
            "arr": [3, 2, 5],
            "exp": [5, 2, 3]
        },
        {
            "arr": [4, 3, 6, 3, 2, 1],
            "exp": [1, 2, 3, 6, 3, 4]
        },
        {
            "arr": [],
            "exp": 0
        }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        let Result = arrayReverse(TestCase[i].arr);
        let got = compareArray(Result, TestCase[i].exp);
        if (got) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}
TestCase()