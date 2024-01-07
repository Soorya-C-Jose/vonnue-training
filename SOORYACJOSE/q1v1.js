
function compareNumber(got, exp) {
    if (got === exp) {
        return true
    }
    else {
        return false
    }
}

function checkNumber(num) {
    if(typeof(num) !== 'number') {
        return "invalid"
    }
    if (num < 0) {
        return false
    } else if (num > 0) {
       return true
    } else if (num === 0) {
        return 0
    }
}


//Test Case 
function TestCase() {
    let TestCase = [
        {
            "num": 10,
            "exp": true
        },
        {
            "num": -10,
            "exp": false
        },
        {
            "num": 0,
            "exp": 0
        },
        {
            "num": "str",
            "exp": "invalid"
        }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        let Result = checkNumber(TestCase[i].num)
        let got = compareNumber(Result, TestCase[i].exp)
        if (got) {
            console.log("Test case " + [i + 1] + " is passed")
        } else {
            console.log("Test case " + [i + 1] + " is failed")
        }
    }
}
TestCase()
