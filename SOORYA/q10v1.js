function compare(got, exp) {
    if (got === exp) {
        return true
    } else {
        return false
    }
}

function countVowels(String) {
     let vowelString = ['a', 'e', 'i', 'o', 'u']
    if(String === vowelString[0]) {
        return -1
    }
    
    let n = vowelString
    for (let i = n; i <= String.length; i++) {
        console.log(i)
    }

}
console.log(countVowels('why'))

//TestCases
function TestCase() {
    let TestCase = [
        {
            "x": "welcome",
            "exp": 3
        },
        {
            "x": "sandwich",
            "exp": 2
        },
        {
            "x": "why",
            "exp": -1
        }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        let Result = countVowels(TestCase[i].x);
        let got = compare(Result, TestCase[i].exp);
        if (got) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}
TestCase()