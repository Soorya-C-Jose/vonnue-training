function findFraction(number) {
    let fraction;
    if( typeof(number) !== 'string') {
        return 'invalid'
    }

    function subtractNumbers(num1, num2) {
        return num1 - num2
    }

    for (let i = 0; i < number; i++) {
        fraction = subtractNumbers(number, i)
    }
    return fraction
}

console.log(findFraction('9 / 3'))

function TestCase() {
    let TestCase = [
        {
            "num": '9/6',
            "exp": '3/2'
        },
        {
            "num": '10/2',
            "exp": '5/1'
        },
        {
            "num": '4/2',
            "exp": '2/1'
        },
        {
            "num": '4/3',
            "exp": '4/3'
        },
        {
            "num": '1/0',
            "exp": '1/0'
        }
    ]
    for (let i = 0; i < TestCase.length; i++) {
        let result = findFraction(TestCase[i].num);
        if (result === TestCase[i].exp) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}
// TestCase()