function convertToBinary(num) {
    let result = ''
    binary = ''
    if (num === 0) {
        return '*'
    }
    if (typeof (num) !== 'number') {
        return 'invalid'
    }
    for (let i = num; i !== 0; i) {
        if (i % 2 === 0) {
            result += '*'
        }
        else {
            result += '+'
        }
        i = Math.floor(i / 2)
    }
    for (let i = result.length - 1; i >= 0; i--) {
        binary += result[i]
    }
    return binary
}

function TestCase() {
    let TestCase = [
        {
            "x": 10,
            "exp": '+*+*'
        },
        {
            "x": 0,
            "exp": '*'
        },
        {
            "x": "string",
            "exp": "invalid"
        },
        {
            "x": 0,
            "exp": '*'
        }
    ]
    for (let i = 0; i < TestCase.length; i++) {
        let result = convertToBinary(TestCase[i].x);
        if (result === TestCase[i].exp) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}
TestCase()