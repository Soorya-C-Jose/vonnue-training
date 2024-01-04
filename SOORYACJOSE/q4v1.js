function compareAge(got, exp) {
    if(got === exp) {
        return true
    } else {
        return false
    }
}

function votingAge(age) {
 if (age >= 18) {
    return "eligible"
 } else {
    return "not eligible"
 }
}
console.log(votingAge(1))


//TestCase
function TestCase() {
    let TestCase = [
        {
            "age": 28,
            "exp": "eligible"
        },
        {
            "age": 14,
            "exp": "not eligible"
        },
        {
            "age": 98,
            "exp": "eligible"
        },
        {
            "age": 8,
            "exp": "not eligible"
        }
    ]

    for(let i = 0; i < TestCase.length;i++) {
        let Result = votingAge(TestCase[i].age);
        let got = compareAge(Result, TestCase[i].exp);
        if(got) {
            console.log("Test Case "+[i+1]+" is passed")
        } else {
            console.log("Test Case "+[i+1]+" is failed")
        }
    }
}
TestCase()