function compare(got, exp) {
    if (got === exp) {
        return true
    } else {
        return false
    }
}

function multiplicationTable(n) {
    let multiplication = [];
    for (let i = 1; i <= 10; i++) {
        multiplication[i - 1] = (n * i)
    }
    return multiplication
}


//TestCase
function TestCase() {
    let TestCase = [
        {
            "n": 2,
            "exp": [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
        },
        {
            "n": 7,
            "exp": [7, 14, 21, 28, 35, 42, 49, 56, 63, 70]
        },
        {
            "n": 10,
            "exp": [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
        }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        let Result = multiplicationTable(TestCase[i].n);
        let got = compare(Result[i], TestCase[i].exp[i]);
        if (got) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}

TestCase()