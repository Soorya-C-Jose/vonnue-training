function compare(got, exp) {
    if (got === exp) {
        return true
    } else {
        return false
    }
}

function nEvenNumbers(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
             return i
             i++
        }
    }

}

nEvenNumbers()




//TestCase
function TestCase() {
    let TestCase = [
        {
            "x": [1, 2, 3, 4, 5, 7, 6, 7, 5],
            "exp": [2, 4, 6]
        },
        {
            "x": [21, 66, 73, 9, 2],
            "exp": [66, 2]
        }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        let Result = nEvenNumbers(TestCase[i].x);
        let got = compare(Result, TestCase[i].exp)
        console.log(got)
        if (got) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}
TestCase()