function noOfOccurence(arr, value) {
    let counter = 0;
    if (arr.length <= 0) {
        return 0
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            counter++
        }
    }
    return counter
}

function TestCase() {
    let TestCase = [
        {
            "x": [
                1, 3, 5, 2, 1, 6, 1],
            "y": 1,
            "exp": 3
        },
        {
            "x": [2, 33, 1, 2, 4],
            "y": 2,
            "exp": 2
        },
        {
            "x": [],
            "exp": 0
        }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        let Result = noOfOccurence(TestCase[i].x, TestCase[i].y);
        if (Result === TestCase[i].exp) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}
TestCase()