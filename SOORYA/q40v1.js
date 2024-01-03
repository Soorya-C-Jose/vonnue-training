function checkProperty(propertyName) {
    let obj = {
        name: "Riya",
        age: 20
    }
    if (obj.property === propertyName) {
        return true
    } else {
        return false
    }
}
console.log(checkProperty("age"))

//TestCase
function TestCase() {
    let TestCase = [
        {
            "obj": {
                name: "mikha",
                age: 33
            },
            "property": "age",
            "exp": true
        },
        {
            "obj": {
                name: "mikha",
                age: 33
            },
            "property": "place",
            "exp": false
        }
    ]
    for (let i = 0; i < TestCase.length; i++) {
        let Result = checkProperty(TestCase[i].obj, TestCase[i].property)
        if (Result === TestCase[i].exp) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}

TestCase()