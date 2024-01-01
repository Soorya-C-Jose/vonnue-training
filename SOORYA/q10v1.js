function compare(got, exp) {
    if (got === exp) {
        return true
    } else {
        return false
    }
}

function countVowels(string) {
    //let vowelString = ['a', 'e', 'i', 'o', 'u']
    let i;
    let count = 1;
    for (i = 0; i <= string.length; i++) {
        console.log(i)
        if (string[i] === vowelString[i]) {
            console.log(string[i])
            count++
            return count
        } else {
            return -1
        }


        // if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u') {
        //     count ++
        //     return count = string[i]
        // } else {
        //    // return -1
        // }
    }


}
console.log(countVowels('woo'))

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