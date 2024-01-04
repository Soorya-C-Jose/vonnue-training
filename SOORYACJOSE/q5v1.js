function compare(got, exp) {
    if (got === exp) {
        return true
    } else {
        return false
    }
}

function checkLeapYear(leapYear) {
    if ((leapYear % 4 === 0 &&  leapYear % 100 !== 0) || (leapYear % 4 === 0 && leapYear % 400 === 0)) {
        return true
    } else {
        return false
    }
}
console.log(checkLeapYear(2000))

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