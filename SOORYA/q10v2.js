function noOfVowels(string) {
    if (typeof (string) !== string) {
        return 0
    }
    let count = 1;
    let VowelString = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    for (let i = 1; i < string.length; i++) {
        if (string[i] === VowelString[i]) {
            count++
        }
    }
    return count
}
//console.log(noOfVowels("chair"))

//TestCases
function TestCase() {
    let TestCase = [
        {
            "x": "invalid",
            "exp": 3
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
            "x": 10,
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