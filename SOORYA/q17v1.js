function rollingNumber() {
    let number = Math.floor(Math.random() * 6) + 1
    let die = Math.floor(Math.random() * 6) + 1
    do {
        if (number === die) {
            return true
        } else {
            return false
        }

    } while (number <= 6 && die <= 6)
}


//TestCase
function TestCase() {
    let TestCase = [
        {
            "number": 6,
            "die": 2,
            "exp": false
        },
        {
            "number": 4,
            "die": 4,
            "exp": true
        }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        let Result = rollingNumber(TestCase[i].number, TestCase[i].die)
        if (Result === TestCase[i].exp) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}

TestCase()