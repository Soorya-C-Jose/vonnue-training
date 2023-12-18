
function compareNumbers() {
    if (got === exp) {
        return true
    } else {
        return false
    }
}

function primeNumber(num) {
    for (let i = 2; i > 1; i++) {
        if ((num / num === 0) && (num / 1 === 0)) {
            return true
        } else {
            return false
        }
    }
}

//TestCases

function TestCase() {
    let TestCase = [
        {
            "x": 2,
            "exp": true
        },
        {
            "x": 4,
            "exp": false
        },
        {
            "x": 10,
            "exp": false
        },
        {
            "x": 5,
            "exp": true
        }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        result = primeNumber(TestCase[i].x, TestCase[i].y)
        got = compareNumbers(result, TestCase[i].exp)
        if (got) {
            console.log("Test case " + [i + 1] + " is passed");
        } else {
            console.log("Test case " + [i + 1] + " is failed")
        }
    }
}

TestCase()