function compare(got, exp) {
    if(got === exp) {
        return true
    } else {
        return false
    }
}


function mergeObj(obj1, obj2) {
    
}

//confused about this question

//TestCase

function TestCase() {
    let TestCase = [
        {
            "obj1": {
                "name": "George",
            },
            "obj2": {
                "place": "Ernakulam"
            },
            "exp": {
                "name": "George",
                "place": "Ernakulam"
            }
        },
        {
            "obj1": {
                "fruit": "apple",
            },
            "obj2": {
                "colour": "red"
            },
            "exp": {
                "fruit": "apple",
                "colour": "red"
            }
        }
    ]

    for(let i = 0; i < TestCase.length; i++) {
        let Result = mergeObj(TestCase[i].obj1, TestCase[i].obj2) 
        let got = compare(Result, TestCase[i].exp)
        if(got) {
            console.log("Test Case "+[i+1]+" is passed")
        } else {
            console.log("Test Case "+[i+1]+" is failed")
        }
    }
}

TestCase()


