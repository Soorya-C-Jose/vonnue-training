function compare(got, exp) {
    if(got === exp){
        return true
    } else {
        return false
    }
}

function sumElements() {
    let sum = 0;
    //let arr = [];
    for(let i = 0; i <= x.length; i++) {
        console.log(i)
        sum = sum + arr[i]
        console.log(sum)
    }
}

//Testcases
function TestCase() {
    let TestCase = [
        {
            "x": [1, 3, 4, 1],
            "exp": 9
        },
        {
            "x": [2, 1, 3, 1],
            "exp": 7
        },
        // {
        //     "x":[],
        //     "exp": -1
        // }
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