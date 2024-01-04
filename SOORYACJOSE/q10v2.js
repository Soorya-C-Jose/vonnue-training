function noOfVowels(string) {
    let count = 0;
    if (typeof (string) !== "string") {
        return 0
    }
    for (let i = 1; i < string.length; i++) {
        if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u' || string[i] === 'A' || string[i] === 'E' || string[i] === 'I' || string[i] === 'O' || string[i] === 'U') {
            count++
        }
    }
    return count
}


//TestCases
function TestCase() {
    let TestCase = [
        {
            "x": "hello",
            "exp": 2
        },
        {
            "x": "responsibility",
            "exp": 5
        },
        {
            "x": "why",
            "exp": 0
        },
        {
            "x": "",
            "exp": 0
        },
        {
            "x": 675,
            "exp": 0
        }
    ]
    for (let i = 0; i < TestCase.length; i++) {
        let Result = noOfVowels(TestCase[i].x);
        if (Result === TestCase[i].exp) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}

TestCase()