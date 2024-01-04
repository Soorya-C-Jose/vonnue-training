
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
    let reversed = [0]
    let length = arr.length;
    let j = 0
    if (length < 0) {
        return []
    }
    for (i = length - 1; i >= 0; i--) {
        reversed[j] = arr[i]
        j++
    }
    return reversed
}

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
            "exp": [0]
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