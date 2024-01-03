function compareString(Result, exp) {
        if (Result[i] === exp[i]) {
            return true
        } else {
            return false
        }

}



function reverse(string) {
    let rev = " ";
    let length = string.length;
    if (length <= 0) {
        return 0
    }
    for (let i = length - 1; i >= 0; i--) {
        rev += string[i]
        //console.log(string[i])
    }
    return rev
}
//console.log(reverse("hello"));

function TestCase() {
    let TestCase = [
        {
            "x": "welcome",
            "exp": "emoclew"
        },
        {
            "x": "hello",
            "exp": "olleh"
        },
        {
            "x": "woo",
            "exp": "oow"
        },
        {
            "x": "",
            "exp": 0
        }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        let Result = reverse(TestCase[i].x)
        console.log(Result)
        if (Result === TestCase[i].exp) {
            console.log("TestCase " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}

TestCase()