

function compareNumber(got, exp) {
    if (got === exp) {
        return true
    } else {
        return false
    }
}

function convergentNumber(n) {
    let resultValue = 0;
    for(let i = 0; i <= resultValue; i++) {
        if(n !== 1) {
            if(n % 2 === 0) {
                n = n / 2
            } else {
                n = (3 * n) + 1
            }
            resultValue++
        }
    }
    return resultValue
}


//console.log(convergentNumber(2))
function TestCase() {
    let TestCase = [
        {
            "x": 2,
            "exp": 1
        },
        {
            "x": 3,
            "exp": 7
        },
        {
            "x": 4,
            "exp": 2
        },
        {
            "x": 5,
            "exp": 5
        },
        {
            "x": 6,
            "exp": 8
        }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        let Result = convergentNumber(TestCase[i].x)
        let got = compareNumber(Result, TestCase[i].exp)
        if (got) {
            console.log("Test case " + [i + 1] + " is passed")
        } else {
            console.log("Test case " + [i + 1] + " is failed")
        }
    }
}

TestCase()

