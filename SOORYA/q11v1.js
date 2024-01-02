function compare(got, exp) {
    if (got === exp) {
        return true
    } else {
        return false
    }
}


//cannot understand the question properly
//have confution

function smallestInt(num) {
    let integer;
    let i = 1
    if (integer >= 1 && integer <= num) {
        while (i <= num) {
            i++
            integer++
            if (integer % i === 0) {
                return integer
            } else {
                return -1
            }
        }
    }
}

//console.log(smallestInt(5))

//testcase
function testcase() {
    let testcase = [
        {
            "n": 5,
            //"exp": 
        },
        {
            "n": 10,
            // "exp": ,
        }
    ]

    for (let i = 0; i < testcase.length; i++) {
        let result = smallestInt(testcase[i].n);
        let got = compare(result, testcase[i].exp)
        if (got) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}

// testcase()
