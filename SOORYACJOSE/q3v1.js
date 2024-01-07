function compareGrade(got, exp) {
    if (got === exp) {
        return true
    } else {
        return false
    }
}


//if the score is between 40 - 50 grade is A
// score == 30 - 39 grade is B
//score = 20 - 29 , grade is C
//score = 10 - 19 , grade is D
//score = 0 - 9 grade is F

function grade(Score) {
    if (typeof (Score) !== "number") {
        return "invalid"
    }
    if (Score <= 50 && Score >= 40) {
        return "A"
    } else if (Score <= 39 && Score >= 30) {
        return "B"
    } else if (Score <= 29 && Score >= 20) {
        return "C"
    } else if (Score <= 19 && Score >= 10) {
        return "D"
    } else if (Score <= 9 && Score >= 0) {
        return "F"
    }
}

console.log(grade(10))


//TestCase
function TestCase() {
    let TestCase = [
        {
            "x": 49,
            "exp": "A"
        },
        {
            "x": 35,
            "exp": "B"
        },
        {
            "x": 22,
            "exp": "C"
        },
        {
            "x": 16,
            "exp": "D"
        },
        {
            "x": 2,
            "exp": "F"
        },
        {
            "x": "str",
            "exp": "invalid"
        }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        let Result = grade(TestCase[i].x)
        let got = compareGrade(Result, TestCase[i].exp)
        if (got) {
            console.log("Test case " + [i + 1] + " is passed")
        } else {
            console.log("Test case " + [i + 1] + " is failed")
        }
    }
}
TestCase()
