function compare(got, exp) {
    if (got === exp) {
        return true
    } else {
        return false
    }
}


function evenNumber(num) {
    let evenArr = []
    if (num <= 0) {
        return 0
    }
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            evenArr[i] = i
            console.log(evenArr)
        }
    }
    return evenArr
}
console.log(evenNumber(5))

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
        {
            "num": -2,
            "exp": 0
        }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        let Result = evenNumber(TestCase[i].x);
        let got = compare(Result, TestCase[i].exp[i]);
        if (got) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}

TestCase()