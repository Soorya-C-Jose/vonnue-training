function average(arr) {
    sum = 0
    let average = 0;
    let length = arr.length
    for (let i = 1; i <= length; i++) {
        sum = arr[i]
    }
    if(sum) {
        average = (sum / length)
    }
    return average
}

function TestCase() {
    let TestCase = [
        {
            "x": [1, 2, 3, 4, 5],
            "exp": 3
        },
        {
            "x": [3, 1, 2],
            "exp": 2
        }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        let result = average(TestCase[i].x)
        if (result === TestCase[i].exp) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}

TestCase()