
function compare(got, exp) {
    if(got === exp) {
        return true
    } else {
        return false;
    }
}

function mathOperations(num1, operation , num2) {
do {
    if(operation === " +") {
        return num1 + num2
    } else if(operation === "-" ) {
        return num1 - num2
    }
} while ( num1 > 0 && num2 > 0)
}


console.log(mathOperations(10 + 20))

function TestCase() {
    let TestCase = [
        {
            "x": 30,
            "y": 20,
            "operation": "+",
            "exp": 50
        },
        {
            "x": 30,
            "y": 20,
            "operation": "-",
            "exp": 10
        },
        {
            "x": 10,
            "y": 2,
            "opeartion": "*",
            "exp": 20
        },
        {
            "x": 10,
            "y": 5,
            "operation": "/",
            "exp": 2

        }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        let Result = mathOperations(TestCase[i].x, TestCase[i].y, TestCase[i].operation);
        let got = (Result, TestCase[i].exp)
        if (got === TestCase[i].exp) {
            console.log("Test Case " + [i + 1] + " is passed");
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}
TestCase()