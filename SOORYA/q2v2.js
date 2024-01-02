function checkVowel(letter) {
    if (typeof (letter) !== String) {
        return 0
    }
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    //length = vowels.length
    for (let i = 0; i <= vowels.length; i++) {
        console.log(i)
        if (letter === vowels[i]) {
            return true
        } else {
            return false
        }
    }
}
console.log(checkVowel('u'))

function TestCase() {
    let TestCase = [
        {
            "x": "s",
            "exp": false
        },
        {
            "x": 'e',
            "exp": true
        },
        {
            "x": "A",
            "exp": true
        },
        {
            "x": '10',
            "exp": 0
        },

    ]

    for (let i = 0; i < TestCase.length; i++) {
        let Result = checkVowel(TestCase[i].exp);
        //console.log(Result)
        if (Result === TestCase[i].exp) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}

TestCase()