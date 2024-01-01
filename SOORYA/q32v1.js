function repalceOccurence(string, y, z) {
    let length = string.length;
    for (let i = 1; i <= string.length; i++) {
        console.log(i)
    }
}

//testcase
function tcs() {
    let tcs = [
        {
            "string": "today is sunday and today is a good day",
            "y": "today",
            "z": "tomarrow",
            "exp": "tomarrow is sunday and tomarrow is a good day"
        },
        {
            "string": "welcome all to the park",
            "y": "park",
            "z": "party",
            "exp": "welcome all to the party"
        }
    ]

    for (let i = 0; i < tcs.length; i++) {
        let Result = repalceOccurence(tcs[i].string, tcs[i].y, tcs[i].z)
        if (Result, tcs[i].exp) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}
tcs()