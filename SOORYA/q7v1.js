function compare(got,exp) {
    if (got === exp) {
        return true
    } else {
        return false
    }
}

function sumOfNumbers(n) {
  for(i = 1; i <= n; i++) {

  }
}
sumOfNumbers()

//testcase
function TestCase() {
    let TestCase = [
        {
            "x": [1, 2, 3, 4, 5],
            "exp": 15
        },
        {
            "x": [2, 4, 1, 5],
            "exp": 12
        },
        {
            "x": [2, 2, 3, 2, 2],
            "exp": 11
        },
        {
            "x": [3, 3, 3],
            "exp": 9
        }
    ]

    for(let i = 0; i < TestCase.length; i++) {
        let Result = sumOfNumbers(TestCase[i].x);
        console.log(Result)
        let got = compare(Result, TestCase[i].exp)
        console.log(got)
        console.log(TestCase[i].exp)
    }
}
TestCase()