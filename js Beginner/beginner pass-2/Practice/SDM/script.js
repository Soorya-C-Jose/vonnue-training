function compareNumber(num1, num2) {
    if(num1 === num2) {
        return true
    } else {
        return false
    }
}

function subtractNumbers (num1, num2) {
    return num1-num2
}

//Test cases
function TestCases() {
    let TestCases = [
        {
            "x":20,
            "y":10,
            "exp": 30
        },
        {
            "x":20,
            "y": -10,
            "exp": 30
        },
        {
            "x": -10,
            "y": 5,
            "exp": -15
        },
        {
            "x": -10,
            "y":-20,
            "exp": 10
        },
        {
            "x": 10,
            "y": 20,
            "exp": -10
        }
    ]

    for(let i = 0; i < TestCases.length; i++) {
        getResult = (subtractNumbers(TestCases[i].x, TestCases[i].y))
        got = compareNumber(getResult, TestCases[i].exp)
        if(got) {
            console.log("Test case "+(i+1)+" is passed")
        } else {
            console.log("Test case "+ (i+1)+" is failed")
        }
    }
}

TestCases()