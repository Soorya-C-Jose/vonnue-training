function removeSpaes(string) {
    let length = string.length
    let space = " "
    for (let i = 1; i < length; i++) {
        if (string[i] === space) {

        }
    }
    return
}
console.log(removeSpaes("we ghg kjdk jwkdj"))

//Test cases
function TestCase() {
    let TestCase = [
        {
            "x": "go away",
            "exp": "goaway"
        },
        {
            "x": "good morning",
            "exp": "goodmorning"
        },
        {
            "x": "welcome",
            "exp": "welcome"
        }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        let Result = removeSpaes(TestCase[i].x);
        if (Result, TestCase[i].exp) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}
TestCase()