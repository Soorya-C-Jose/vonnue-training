function compare(got, exp) {
    if (got === exp) {
        return true
    } else {
        return false
    }
}


function sumElements(arr) {
    let length = arr.length;
    if (length < 0) {
        return 0
    }
    let sum = 0;
    for ( i = 0; i < length; i++) {
        sum += arr[i]
    }
    return sum
}
console.log(typeof ([1, 2, 3]))


//Testcases
function TestCase() {
    let TestCase = [
        {
            "x": [2, 3, 4, 1],
            "exp": 10
        },
        {
            "x": [2, 1, 3, 1],
            "exp": 7
        },
        {
            "x": [],
            "exp": 0
        },
        {
            "x": [2, "arr", 6, 10],
            "exp": "invalid"
        }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        let Result = sumElements(TestCase[i].x);
        let got = compare(Result, TestCase[i].exp)
        if (got) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}
TestCase()