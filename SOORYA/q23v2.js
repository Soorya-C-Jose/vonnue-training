
// function compare(arr, exp) {
//     if (arr.length === exp.length) {
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] !== exp[i])
//                 return false
//         }
//         return true
//     }
//     return false
// }

function compare(got, exp) {
    if (got === exp) {
        return true
    } else {
        return false
    }
}



function arrayReverse(arr) {
    let reversed = []
    let length = arr.length;
    if (arr.length <= 0) {
        return 0
    }
    for (let i = length - 1; i >= 0; i--) {
        reversed += arr[i]
       console.log(reversed)
    }
    return reversed
}

function TestCase() {
    let TestCase = [
        {
            "arr": [3, 2, 5],
            "exp": [5, 2, 3]
        },
        {
            "arr": [4, 3, 6, 3, 2, 1],
            "exp": [1, 2, 3, 6, 3, 4]
        },
        {
            "arr": [],
            "exp": 0
        }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        let Result = arrayReverse(TestCase[i].arr);
        let got = compare(Result, TestCase[i].exp);
        if (got) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}
TestCase()