// function compareString(Result, exp) {
//     if (Result[i] === exp[i]) {
//         return true
//     } else {
//         return false
//     }

// }



function reverse(string) {
    let rev = '';
    let length = string.length;
    if (length <= 0) {
        return 0
    }
    for (let i = length - 1; i >= 0; i--) {
        rev += string[i]
    }
    return rev
}
// console.log(typeofreverse("hello"));
let testCase = [
    {
        "x": "welcome",
        exp: "emoclew"
    },
    {
        "x": "hello",
        exp: "olleh"
    },
    {
        "x": "woo",
        exp: "oow"
    },
    {
        "x": "",
        exp: 0
    }
]

function TestCase() {
    
    for (let i = 0; i < testCase.length; i++) {
        let Result = reverse(testCase[i].x)
        if(Result === testCase[i].exp){
            console.log("Test Case "+[i+i]+" is passed")
        }
        else{
            console.log("Test Case "+[i+1]+' is failed')
        }
    }
}

TestCase()