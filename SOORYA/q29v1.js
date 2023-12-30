function numberOfWords() {

}

//TestCases
function TestCase() {
    let TestCase = [
        {
            "x": "the sky is blue",
            "exp": 4
        },
        {
            "x": "objects are collection of values",
            "exp": 5
        }
    ]

    for(let i = 0; i < TestCase.length; i++ ) {
        let Result = numberOfWords(TestCase[i].x)
        if(Result === TestCase[i].exp) {
            console.log("Test Case "+[i+1]+" is passed");
        } else {
            console.log("Test Case "+[i+1]+" is failed")
        }
    }
}