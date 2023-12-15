function compareNumber(num1, num2) {
    if (num1 === num2) {
        return true
    }
    else {
        return false
    }
}

function addNumbers(num1, num2) {
    return num1 + num2
}

//Test Cases
function TestCase() {
    let TestCase = [
        //Test Case1
        {
            "x": 10,
            "y": 20,
            "exp": 30
        },
        //Test Case2
        {
            "x": -10,
            "y": 5,
            "exp": -5
        },
        //Test Case3
        {
            "x": 20,
            "y": -6,
            "exp": 14
        },
        //Test Case4
        {
            "x": -15,
            "y": -15,
            "exp": -30
        }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        getResult = (addNumbers(TestCase[i].x, TestCase[i].y))
        got = compareNumber(getResult, TestCase[i].exp)
        if (got) {
            console.log("Test case " + (i + 1) + " is passed")
        } else {
            console.log("Test case " + (i + 1) + " is failed")
        }
    }
}

TestCase()

//**********************************************************/

function multiplyNumbers(num1, num2) {
    let result = 0;
    for (let i = 0; i < num2; i++) {
        result = addNumbers(num1, result)
    }
    return result
}

function TestCase1() {
    let TestCase1 = [
        {
            "x": 10,
            "y": 2,
            "exp": 20
        },
        {
            "x": -10,
            "y": 5,
            "exp": -50
        },
        {
            "x": -8,
            "y": -10,
            "exp": 80
        }

    ]

    for (let i = 0; i < TestCase1.length; i++) {
        getResult = (multiplyNumbers(TestCase1[i].x, TestCase1[i].y))
        got = compareNumber(getResult, TestCase1[i].exp)
        if (got) {
            console.log("Test case " + (i + 1) + " is passed")
        } else {
            console.log("Test case " + (i + 1) + " is failed")
        }
    }
}
TestCase1()