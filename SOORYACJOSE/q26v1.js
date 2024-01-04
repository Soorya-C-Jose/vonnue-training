
function studentScore(score) {
    if (typeof (score) !== "number") {
        return 0
    }
    return score > 60 ? 'pass' : 'fail'
}

//Testcases

function TestCase() {
    let TestCase = [
        {
            "score": 62,
            "exp": "pass"
        },
        {
            "score": 60,
            "exp": "fail"
        },
        {
            "score": 98,
            "exp": 'pass'
        },
        {
            "score": 10,
            "exp": "fail"
        },
        {
            "score": "50",
            "exp": 0
        }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        let Result = studentScore(TestCase[i].score)
        if (Result === TestCase[i].exp) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}

TestCase()