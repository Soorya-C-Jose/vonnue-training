function subtractNumbers(number) {
    return number - 2
}

function convertToBinary(number) {
    for(let i = number; i > 0; i-2 ) {
        
    }


    //initializes the value of i = number
    // i -2 until the value become 1 or 0
    // set the counter (how many times the i value decremented ie, in which step the i value become 1 or 0)
    //then replace the value of i with the counter value
    //then mod the new i value 
    // and then reverse the remainder values

}
console.log(convertToBinary(10))

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
            "exp": "*+*+"
        },
    ]
    for (let i = 0; i < TestCase[i].length; i++) {
        let result = convertToBinary(TestCase[i].num);
        if (result === TestCase[i].exp) {
            console.log(result)
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}
TestCase()