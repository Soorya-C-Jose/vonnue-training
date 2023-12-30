function compare(got, exp) {
    if (got === exp) {
        return true
    } else {
        return false
    }
}

function palindromeOrNot(string) {
    let length = string.length;
    for (let i = length - 1; i > 0; i--) {
        if (string[i] === string[length - 1 - i]) {
            return true
        } else {
            return false
        }
    }
}

console.log(palindromeOrNot("foo"))

function TestCase() {
    let TestCase = [
        {
            "string": "level",
            "exp": true
        },
        {
            "string": "malayalam",
            "exp": true
        },
        {
            "string": "mountain",
            "exp": false
        }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        let Result = palindromeOrNot(TestCase[i].string)
        let got = compare(Result, TestCase[i].exp)
        if (got) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}

TestCase()


