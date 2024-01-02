function compare(got, exp) {
    if (got === exp) {
        return true
    } else {
        return false
    }
}


function findFact(n) {
    let fact = n;
    let i = n - 1;
    if (n <= 0) {
        return -1
    }
    do {
        i--
        fact += (fact * i)
    } while (i > 0)
    return fact
}

//testcases
function tcs() {
    let tcs = [
        {
            "n": 5,
            "exp": 120
        },
        {
            "n": 3,
            "exp": 6
        },
        {
            "n": 4,
            "exp": 24
        },
        {
            "n": -2,
            "exp": -1
        }
    ]
    for (let i = 0; i < tcs.length; i++) {
        let Result = findFact(tcs[i].n);
        let got = compare(Result, tcs[i].exp);
        if (got) {
            console.log("Test Case " + [i + 1] + " is passed");
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}

tcs()