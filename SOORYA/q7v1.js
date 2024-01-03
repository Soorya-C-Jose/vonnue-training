function compare(got, exp) {
    if (got === exp) {
        return true
    } else {
        return false
    }
}

function sumOfNumbers(n) {
    let sumOf = 0;
    if (n <= 0) {
        return -1
    }
    for (i = 1; i <= n; i++) {
        sumOf = (sumOf + i)
    }
    return sumOf
}
console.log(sumOfNumbers(5))

//testcase
function TestCase() {
    let TestCase = [
        {
            "x": 5,
            "exp": 15
        },
        {
            "x": 3,
            "exp": 6
        },
        {
            "x": 10,
            "exp": 55
        },
        {
            "x": 8,
            "exp": 36
        },
        {
            "x": -3,
            "exp": -1
        }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        let Result = sumOfNumbers(TestCase[i].x);
        let got = compare(Result, TestCase[i].exp)
        if (got) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}
TestCase()