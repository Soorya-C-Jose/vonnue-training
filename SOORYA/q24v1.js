function findIndex(arr, element) {
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        if (arr[i] === element[i]) {
            console.log(arr[i])
            return i
        }
    }
    // console.log(index)
}

console.log(findIndex([2, 3, 4], 4))

function TestCase() {
    let TestCase = [
        {
            "x": [1, 2, 3, 4, 5],
            "y": 3,
            "exp": 2
        },
        {
            "x": [3, 4, 2],
            "y": 3,
            "exp": 0
        },
        {
            "x": [4, 2, 1, 7],
            "y": 7,
            "exp": 3
        }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        let result = findIndex(TestCase[i].x, TestCase[i].y)
        if (result === TestCase[i].exp) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}

TestCase()