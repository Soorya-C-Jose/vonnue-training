function compare(got, exp) {
    if(got === exp) {
        return true
    } else {
        return false
    }
}

function guessingGame() {

}


//Testcases

function tcs() {
    let tcs = [
        {
            
        }
    ]

for(let i = 0; i < tcs.length; i++) {
    let result = guessingGame(tcs[i].x);
    let got = compare(result, tcs[i].exp) 
    if(got) {
        console.log("Test Case "+[i+1]+" is passed")
    } else {
        console.log("Test Case "+[i+1]+" is failed")
    }
}

}

tcs()