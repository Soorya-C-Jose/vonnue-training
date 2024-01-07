function compare(got, exp) {
    if (got === exp) {
        return true
    } else {
        return false
    }
}

function checkLeapYear(leapYear) {
    if (typeof leapYear !== 'number') return 'invalid'
    if ((leapYear % 4 === 0)
        return true
    } else {
        return false
    }
}

function TestCase() {
    let TestCase = [
        {
            "year": 2004,
            "exp": true
        },
        {
            "year": 2006,
            "exp": false
        },
        {
            "year": 2012,
            "exp": true
        },
        {
            "year": 2023,
            "exp": false
        },
        {
            "year": "year",
            "exp": "invalid"
        }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        let Result = checkLeapYear(TestCase[i].year);
        let got = compare(Result, TestCase[i].exp);
        if (got) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}
TestCase()
