function compare(got, exp) {
    if (got === exp) {
        return true
    } else {
        return false
    }
}

function findFact(n) {
    if (typeof (n) !== 'number') {
        return "invalid"
    }
    let fact = n;
    if (n <= 0) {
        return -1
    }
    for (let i = n - 1; i > 0; i--) {
        fact = fact * i
    }
    return fact
}

//testcases
function TestCase() {
    let TestCase = [
        {
            "n": 5,
            "exp": 120
        },
        {
            "n": 3,
            "exp": 6
        },
        {
            "n": 4,
            "exp": 24
        },
        {
            "n": -2,
            "exp": -1
        },
        {
            "n": "fact",
            "exp": "invalid"
        }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        let Result = findFact(TestCase[i].n);
        let got = compare(Result, TestCase[i].exp);
        if (got) {
            console.log("Test Case " + [i + 1] + " is passed");
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}
TestCase()