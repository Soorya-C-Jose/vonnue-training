function compare(Result, exp) {
    let length = exp.length
    for (let i = 1; i < length; i++) {
        if (exp[i] !== Result[i]) {
            return false
        } else {
            return true
        }
    }
}


function evenNumber(num) {
    let evenArr = []
    let position = 0
    if (num < 0) {
        return 0
    }
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            evenArr[position] = i
            position++
        }
    }
    return evenArr
}

function TestCase() {
    let TestCase = [
        {
            "num": 9,
            "exp": [2, 4, 6, 8]
        },
        {
            "num": 7,
            "exp": [2, 4, 6]
        },
        // {
        //     "num": -2,
        //     "exp": 0
        // }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        let Result = evenNumber(TestCase[i].num);
        let got = compare(Result, TestCase[i].exp);
        if (got) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}

TestCase()