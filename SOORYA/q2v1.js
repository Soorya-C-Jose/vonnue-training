function compareInput(got, exp) {
    if (got === exp) {
        return true
    } else {
        return false
    }
}

function checkLetter(letter) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i < vowels.length; i++) {
        if (i === vowels()) {
            return true
        } else {
            return false
        }
    }
}
console.log(checkLetter('a'))

//TestCases
function TestCase() {
    let TestCase = [
        {
            "x": a,
            "exp": vowel
        },
        {
            "x": w,
            "exp": consonant
        },
        {
            "x": r,
            "exp": consonant
        },
        {
            "x": o,
            "exp": vowel
        },
        {
            "x": s,
            "exp": consonant
        }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        let result = checkLetter(TestCase[i].x)
        let got = compareInput(result, TestCase[i].exp)
        console.log(TestCase[i].exp)
        if (got) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}
TestCase()

