function checkVowel(x) {
    // if (typeof (x) !== String) {
    //     return 0
    // }

    if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u' || x === 'A' || x === 'E' || x === 'I' || x === 'O' || x === 'U') {
        return "Vowel"
    } else {
        return "Consonant"
    }
}

// console.log(checkVowel('i'))

//TestCase
function TestCase() {
    let TestCase = [
        {
            "x": "s",
            "exp": "consonant"
        },
        {
            "x": 'e',
            "exp": "Vowel"
        },
        {
            "x": 'A',
            "exp": "Vowel"
        },
        // {
        //     "x": '10',
        //     "exp": 0
        // },

    ]

    for (let i = 0; i < TestCase.length; i++) {
        let Result = checkVowel(TestCase[i].exp);
        console.log(Result)
        console.log(TestCase[i].exp)
        if (Result === TestCase[i].exp) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}

TestCase()