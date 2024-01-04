function checkVowel(x) {
    if (typeof (x) !== "string") {
        return 0
    }
    if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u' || x === 'A' || x === 'E' || x === 'I' || x === 'O' || x === 'U') {
        return "Vowel"
    }
    return "consonant"
}

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
        {
            "x": 5,
            "exp": 0
        }

    ]

    for (let i = 0; i < TestCase.length; i++) {
        let Result = checkVowel(TestCase[i].x);
        if (Result === TestCase[i].exp) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}

// TestCase()



/***********************************************/

function noOfVowel(string) {
    let count = 0;
    if (typeof (string) !== "string") {
        return 0
    }
    for (let i = 0; i < string.length; i++) {
        if (checkVowel(string[i]) === "Vowel") {
            count++;
        }
    }
    return count;
}

function TestCase1() {
    let TestCase1 = [
        {
            "x": "rainbow",
            "exp": 3
        },
        {
            "x": "available",
            "exp": 5
        },
        {
            "x": "why",
            "exp": 0
        },
        {
            "x": 134,
            "exp": 0
        }
    ]

    for (let i = 0; i < TestCase1.length; i++) {
        let Result = noOfVowel(TestCase1[i].x);
        if (Result === TestCase1[i].exp) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}
TestCase1()