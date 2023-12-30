function evenOrOdd(num) {
//(num % 2 === 0) 
 return num % 2 === 0 ? "even" : "odd"
}

console.log(evenOrOdd(13))

function TestCase() {
    let TestCase = [
        {
            "num":10,
            "exp": "even"
        },
        {
            "num": 15,
            "exp": "odd"
        }
    ]

    for(let i = 0; i < TestCase.length; i++) {
        let Result = evenOrOdd(TestCase[i].num)
        if(Result === TestCase[i].exp) {
            console.log("Test Case "+[i+1]+" is passed")
        } else {
            console.log("Test Case "+[i+1]+" is failed")
        }
    }
}

TestCase()