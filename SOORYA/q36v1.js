
function toCompare(got, exp) {
    if (got === exp) {
        return true
    } else {
        return false
    }
}


function reverseString(string) {
    let reversed = '';
    let length = string.length;
    for (let i = length - 1; i >= 0; i--) {
        reversed = (string[i]);
        console.log(reversed)
    }

}
console.log(reverseString("hello"))

//TestCases
function TestCase() {
    let TestCase = [
        {
            "x": "hello",
            "exp": "olleh"
        },
        {
            "x": "welcome",
            "exp": "emoclew"
        },
        {
            "x": "happy",
            "exp": "yppah"
        }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        let Result = reverseString(TestCase[i].x);
        let got = toCompare(Result, TestCase[i].exp);

        if (got) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }

}
TestCase()