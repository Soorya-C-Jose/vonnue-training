function compare(got, exp) {
    if(got === exp) {
        return true
    } else {
        return false
    }
}

function guessingGame() {
  let userGuess
}


//Testcases

function tcs() {
    let tcs = [
        {
         "userGuess" : 3,
         "number" : 9,
         "exp": false  
        },
        {
            "userGuess": 7,
            "number" : 7,
            "exp": true
        }
    ]

for(let i = 0; i < tcs.length; i++) {
    let result = guessingGame(tcs[i].userGuess, TestCase[i].number);
    let got = compare(result, tcs[i].exp) 
    if(got) {
        console.log("Test Case "+[i+1]+" is passed")
    } else {
        console.log("Test Case "+[i+1]+" is failed")
    }
}

}

tcs()