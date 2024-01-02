function comapre(got, exp) {
    if (got === exp) {
        return true
    } else {
        return false
    }
}

function addProperty() {

}

//Test case
function TestCase() {
    let TestCase = [
        {
            "obj1": {
                "name": "peter",
            },
            "property": {
                "place": "England"
            },
            "exp": {
                "name": "peter",
                "place": "England"
            }
        },
        {
            "obj1": {
                "fruit": "apple",
            },
            "proprty": {
                "colour": "red"
            },
            "exp": {
                "fruit": "apple",
                "colour": "red"
            }
        }
    ]

    for(let i = 0; i < TestCase.length; i++) {
        let Result = addProperty(TestCase[i].obj1,TestCase[i].property);
        let got = compare(Result, TestCase[i].exp)
        if(got) {
            console.log("Test Case "+[i+1]+" is passed")
        } else {
            console.log("Test Case "+[i+1]+" is failed")
        }
    }
}
TestCase()