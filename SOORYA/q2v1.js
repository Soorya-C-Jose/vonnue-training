function compareInput(got, exp) {
    if (got === exp) {
        return true
    } else {
        return false
    }
}

function checkLetter(letter) {
    let vowels = ['a','e','i','o','u']
    for (let i = 0; i < vowels.length; i++) {
        if (letter === vowels[i]) {
            return true
        } else {
            return false
        }
    }
// if(letter === vowels[i]) {
//     return true
// }

}
console.log(checkLetter('a'))

//TestCases
function TestCase() {
    let TestCase = [
        {
            "x": "a",
            "exp": true
        },
        {
            "x": "w",
            "exp": false
        },
        {
            "x": "r",
            "exp": false
        },
        {
            "x": "o",
            "exp": true
        },
        {
            "x": "s",
            "exp": false
        }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        let result = checkLetter(TestCase[i].x)
        console.log(result)
        let got = compareInput(result, TestCase[i].exp)
        //console.log(TestCase[i].exp)
        if (got) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}
TestCase()




/***************************************************/

function checkLetter() {

}


//Testcase for counting vowels


// function TestCase2() {
//     let TestCase2 = [
//         {
//             "x": "rainbow",
//             "exp": 3
//         },
//         {
//             "x": "wonderland",
//             "exp": 3
//         },
//         {
//             "x": "dry",
//             "exp": 0
//         },
//         {
//             "x": "impossible",
//             "exp": 4
//         }
//     ]

//     for(let i = 0; i <TestCase2.length; i++) {
//         let result = checkLetter(TestCase2[i].x);
//         let got = compare(result, TestCase2[i].exp);
//         if(got) {
//             console.log("Test Case "+[i+1]+" is passed");
//         } else {
//             console.log("Test Case "+[i+1]+" is failed")
//         }
//     } 
// }
// TestCase2()