function commonDivisor(num1, num2) {
    let divisor;
    if (num1 <= 0 || num2 <= 0) {
        return -1
    }
    for (let i = 1; i <= num1; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            divisor = i;
            if (divisor > 1) {
                return divisor
            }
        }
        return divisor
    }

}


//TestCase
function TestCase() {
    let TestCase = [
        {
            "num1": 5,
            "num2": 20,
            "exp": 5
        },
        {
            "num1": 8,
            "num2": 12,
            "exp": 4
        },
        {
            "num1": -10,
            "num2": 2,
            "exp": -1
        }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        let Result = commonDivisor(TestCase[i].num1, TestCase[i].num2);
        if (Result, TestCase[i].exp) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}
TestCase()