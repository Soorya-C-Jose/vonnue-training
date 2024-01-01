function compare(got, exp) {
    if (got === exp) {
        return true
    } else {
        return false
    }
}

function positiveNumber(n) {
    do {
        if (n > 0) {
            return true
        } else {
            return false
        }
    }
    while (n > 0)
}
console.log(positiveNumber(10))

function tcs() {
    let tcs = [
        {
            "x": 10,
            "exp": true
        },
        {
            "x": 100,
            "exp": true
        },
        {
            "x": -20,
            "exp": false
        }
    ]

    for (let i = 0; i < tcs.length; i++) {
        let Result = positiveNumber(tcs[i].x);
        let got = compare(Result, tcs[i].exp);
        if (got) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}
tcs()