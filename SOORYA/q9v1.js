function compare(got, exp) {
    if (got === exp) {
        return true
    } else {
        return false
    }
}


function findFact(n) {
  
    for(let i = 1; i <= n; i++) {
        let fact = (n * (n +  i))
        return fact
    }
}

console.log(findFact(4))


//testcases
function TestCase() {
    let TestCase = [
        {
            "num": 5,
            "exp": 120
        },
        {
            "num": 3,
            "exp": 6
        },
        {
            "num": 6,
            "exp": 720
        },
        {
            "num": 4,
            "exp": 24
        }
    ]

    for(let i = 0; i <TestCase.length; i++) {
        let Result = findFact(TestCase[i].num);
        let got = compare(Result, TestCase[i].exp);
        if(got) {
            console.log("Test Case "+[i+1]+" is passed");
        } else {
            console.log("Test Case "+[i+1]+" is failed")
        }
    }
}
TestCase()