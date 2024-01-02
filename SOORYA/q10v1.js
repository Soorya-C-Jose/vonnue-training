function compare(got, exp) {
    if (got === exp) {
        return true
    } else {
        return false
    }
}

function countVowels(string) {
    // let vowelString = ['a', 'e', 'i', 'o', 'u']
    // let i;
    // let count = 1;
    // for (i = 1; i <= string.length; i++) {
    //     console.log(i)
    //     //console.log(i)
    //     if (string[i] === vowelString[i]) {
    //         console.log(string[i])
    //         count++
    //         //return count
    //     } else {
    //         return -1
    //     }
    // }

    //  let vowelString = ['a', 'e', 'i', 'o', 'u']
    // let i;
    // let count = 1;

    //     if (string[i] === vowelString[0] || string[i] === vowelString[1] || string[i] === vowelString[2] || string[i] === vowelString[3] || string[i] === vowelString[4]) {
    //         console.log(vowelString[0])
    //         count ++
    //         return count = string[i]
    //     } else {
    //     //    /return -1
    //     }


    let i = 0;
    let count = 1;
    let vowelString = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < string.length; i++) {
        if (string[i] === vowelString[i]) {
            count++
        }
        return count;
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