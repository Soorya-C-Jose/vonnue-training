function compare(got, exp) {
    if (got === exp) {
        return true
    } else {
        return false
    }
}

function numberIsPrime(num) {
    if (typeof (num) !== "number") {
        return 0
    }
    if (num <= 1) {
        return -1;
    }
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}



//testcases
function TestCase() {
    let TestCase = [
        {
            "num": 2,
            "exp": true
        },
        {
            "num": 10,
            "exp": false
        },
        {
            "num": 5,
            "exp": true
        },
        {
            "num": 12,
            "exp": false
        },
        {
            "num": 0,
            "exp": -1
        },
        {
            "num": "str",
            "exp": 0
        }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        let Result = numberIsPrime(TestCase[i].num);
        let got = compare(Result, TestCase[i].exp)
        if (got) {
            console.log("TestCase " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}
TestCase()