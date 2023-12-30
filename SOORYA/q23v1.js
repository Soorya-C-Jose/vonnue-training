function reverseElement() {

}

//need to complete

//Testcases

function tcs() {
    let tcs = [
        {
            "x": [w,r,s],
            "exp":[s,r,w]
        },
        {
            "x": [2,4,5,6],
            "exp":[6,5,4,2]
        }
    ]

    for(let i = 0; i < tcs.length; i++) {
        let result = reverseElement(tcs[i].x);
        if(result === tcs[i].exp) {
            console.log("Test Case "+[i+1]+" is passed")
        } else {
            console.log("Test Case "+[i+1]+" is failed")
        }
    }
}

tcs()