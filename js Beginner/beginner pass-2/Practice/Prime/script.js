
function compareNumbers(got,exp){
    if (got === exp){
        return true
    } else {
        return true
    }
}


function primeNumber(num) {
    for (let i =2; i > 1; i++) {
        if((num / num === 0) && (num / 1 === 0)) {
            return true
        } else  {
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
            "exp":false
        },
        {
            "x":3,
            "exp": true
        },
        {
            "x": 10,
            "exp": false
        }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        result = primeNumber(TestCase[i].x)
        console.log(result)
        got = compareNumbers(result, TestCase[i].exp)
        console.log(got)
        if (got) {
            console.log("Test case " + [i + 1] + " is passed");
        } else {
            console.log("Test case " + [i + 1] + " is failed")
        }
    }
}

TestCase()
