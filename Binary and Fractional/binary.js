function subtractNumbers(number) {
    return number - 2
}

function convertToBinary(number) {

    let result = ''
    let binaryNum = ''
    if (number === 0) {
        return '*'
    }

    while (number !== 0) {
        if (number % 2 === 0) {
            result += '*'
        }
        else {
            result += '+'
        }
        number = (number / 2)
        if (number > .5) {
            return result
        }
    }
    for (let i = result.length - 1; i >= 0; i--) {
        binaryNum += result[i]
    }
    return result;
}
console.log(convertToBinary(11))

//TestCases
function TestCase() {
    let TestCase = [
        {
            "num": 8,
            "exp": "+***"
        },
        {
            "num": 11,
            "exp": "+*++"
        },
        {
            "num": 5,
            "exp": "+*+"
        },
        {
            "num": 1,
            "exp": '+'
        }
    ]
    for (let i = 0; i < TestCase.length; i++) {
        let result = convertToBinary(TestCase[i].num);
        if (result === TestCase[i].exp) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}
TestCase()