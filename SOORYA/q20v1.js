function maximumEle(arr) {
 let length = arr.length;
 if(length <= 0) {
    return 0
 }
 for(let i = 0; i < length; i++) {
    console.log(i)
 }
}

function TestCase() {
    let TestCase = [
        {
            "x": [1, 3, 13, 14, 8, 4],
            "exp": 14
        },
        {
            "x": [],
            "exp": 0
        },
        {
            "x": [4, 5, 8, 2],
            "exp": 8
        }
    ]

    for(let i = 0; i < TestCase.length;i++) {
        let Result = maximumEle(TestCase[i].x);
        if(Result === TestCase[i].exp) {
            console.log("Test Case "+[i+1]+" is passed")
        } else {
            console.log("Test Case "+[i+1]+" is failed")
        }
    }
}

TestCase()