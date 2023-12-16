function compareNumber(num1, num2) {
    if (num1 === num2) {
        return true
    } else {
        return false
    }
}

function subtractNumbers(num1, num2) {
    return num1 - num2
}

//Test cases
function TestCases() {
    let TestCases = [
        {
            "x": 20,
            "y": 10,
            "exp": 10
        },
        {
            "x": 20,
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
            "y": -20,
            "exp": 10
        },
        {
            "x": 10,
            "y": 20,
            "exp": -10
        }
    ]

    for (let i = 0; i < TestCases.length; i++) {
        getResult = (subtractNumbers(TestCases[i].x, TestCases[i].y))
        got = compareNumber(getResult, TestCases[i].exp)
        if (got) {
            console.log("Test case " + (i + 1) + " is passed")
        } else {
            console.log("Test case " + (i + 1) + " is failed")
        }
    }
}

TestCases()


//****************************************************/

function divideNumbers(num1, num2) {
    let result = num1
    let divisionValue = 0;
    for (let i = 1; result >= num2; i++) {
        result = subtractNumbers(result,num2)
        divisionValue =  i ;
    }
    return divisionValue;
}


//Test cases

function TestCase1() {
    let TestCase1 = [
        {
            "x": 100,
            "y": 5,
            "exp": 20
        },
        {
            "x": 100,
            "y": 2,
            "exp": 50
        },
        {
            "x":20,
            "y":10,
            "exp": 0
        }
    ]

    for (let i = 0; i < TestCase1.length; i++) {
          let Result = divideNumbers(TestCase1[i].x,TestCase1[i].y)
        got = compareNumber(Result, TestCase1[i].exp)
        if (got) {
            console.log("Test case " + (i + 1) + " is passed")
        } else {
            console.log("Test case " + (i + 1) + " is failed")
        }
    }
}

TestCase1()



//*************************************************/


function modNumbers(num1,num2) {

}


//TestCases

function TestCase2() {
let TestCase2 = [
    {
        "x": 10,
        "y": 3,
        "exp":1
    },
    {
        "x": 1,
        "y": 7,
        "exp":1
    },
    {
     "x": 20,
     "y":10,
     "exp": 0   
    },
    {
        "x":28,
        "y":8,
        "exp":4
    }
]

for(let i =0; i < TestCase2.length; i++ ){
    let Result = modNumbers(TestCase2[i].x, TestCase2[i].y)
    got = compareNumber(Result, TestCase2[i].exp)
    if(got) {
        console.log("Test case "+[i+1]+" is passed")
    } else {
        console.log("Test case "+[i+1]+" is failed")
    }
}
}

TestCase2()