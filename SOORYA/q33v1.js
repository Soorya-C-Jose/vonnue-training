function compare(got, exp) {
    if (got === exp) {
        return true
    } else {
        return false
    }
}


function rectangleArea(width, length) {
    let area = width * length;
    if (width > 0 && length > 0) {
        return area
    } else {
        return -1
    }
}
//console.log(rectangleArea(-1,3))

//Testcases 
function TestCase() {
    let TestCase = [
        {
            "w": 4,
            "l": 3,
            "exp": 12
        },
        {
            "w": 5,
            "l": 6,
            "exp": 30
        },
    ]

    for (let i = 0; i < TestCase.length; i++) {
        let Result = rectangleArea(TestCase[i].w, TestCase[i].l)
        let got = compare(Result, TestCase[i].exp)
        if (got) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}

TestCase()