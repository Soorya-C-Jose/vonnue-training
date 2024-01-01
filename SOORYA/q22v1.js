function compare(Result, exp) {
    if (Result.length === exp.length) {
        for (let i = 0; i < Result.length; i++) {
            if (Result[i] !== exp[i])
                return false
        }
        return true
    }
    return false
}


function removeDuplicate(arr, ele) {
    let length = arr.length;
    if (arr.length <= 0) {
        return 0
    }
    for (let i = 0; i < length; i++) {
        if (arr[i] === ele) {

            console.log(arr[i])
            break;
        }
        return String;
    }
}
console.log(removeDuplicate([1, 2, 4, 1, 4], 1))
//TestCases
function TestCase() {
    let TestCase = [
        {
            "x": [1, 23, 3, 4, 3, 6, 3],
            "y": 3,
            "exp": [1, 23, 4, 6]
        },
        {
            "x": [1, 2, 1, 1, 2, 1],
            "y": 1,
            "exp": [2, 2]
        },
        {
            "x": [],
            "exp": 0
        }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        let Result = removeDuplicate(TestCase[i].x);
        let got = compare(Result, TestCase[i].exp);
        if (got) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}
TestCase()