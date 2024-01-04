function evenOrOdd(num) {
    if (typeof (num) !== "number") {
        return 0
    }
    return num % 2 === 0 ? "even" : "odd"
}

function TestCase() {
    let TestCase = [
        {
            "num": 10,
            "exp": "even"
        },
        {
            "num": 15,
            "exp": "odd"
        },
        {
            "num": "12",
            "exp": 0
        },
        {
            "num": "str",
            "exp": 0
        }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        let Result = evenOrOdd(TestCase[i].num)
        if (Result === TestCase[i].exp) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}

TestCase()