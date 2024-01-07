function numberOfWords(string) {
    if(typeof(string) !== 'string') {
        return "invalid"
    }
    let length = string.length;
    let spaces = " ";
    let counter = 1
    for (let i = 1; i <= length; i++) {
        if (string[i] === spaces) {
            counter++
        }
    }
    return counter
}

//TestCases
function TestCase() {
    let TestCase = [
        {
            "x": "the sky is blue",
            "exp": 4
        },
        {
            "x": "objects are collection of values",
            "exp": 5
        },
        {
            "x": 1434,
            "exp": "invalid"
        }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        let Result = numberOfWords(TestCase[i].x)
        if (Result === TestCase[i].exp) {
            console.log("Test Case " + [i + 1] + " is passed");
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}

TestCase()