function compare(got, exp) {
    if (got === exp) {
        return true
    } else {
        return false
    }
}

//need to complete

function nEvenNumbers(n) {
        let evenNum = [];
        for (let i = 1; i <= n; i++) {
            if (i % 2 === 0) {
                 evenNum = [i]
            }
            console.log(evenNum)
            // return evenNum;
        }
    }
    // console.log(nEvenNumbers(6))


    //TestCase
    function TestCase() {
        let TestCase = [
            {
                "n": 6,
                "exp": [2, 4, 6]
            },
            {
                "n": 8,
                "exp": [2, 4, 6, 8]
            }
        ]

        for (let i = 0; i < TestCase.length; i++) {
            let Result = nEvenNumbers(TestCase[i].n);
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