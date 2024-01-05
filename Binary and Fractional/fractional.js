function findFraction(number) {
  
}

function TestCase() {
    let TestCase = [
        {
            "num": 9 / 6,
            "exp": 3 / 2
        },
        {
            "num": 10 / 2,
            "exp": 5 / 1
        },
        {
            "num": 4 / 2,
            "exp": 2 / 1
        }
    ]
    for(let i = 0; i < TestCase.length; i++) {
        let result = findFraction(TestCase[i].num);
        if(result === TestCase[i].exp) {
            console.log("Test Case "+[i+1]+" is passed")
        } else {
            console.log("Test Case "+[i+1]+" is failed")
        }
    }
}
TestCase()