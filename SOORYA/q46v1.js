function compareObj(obj1, obj2) {
  if (obj1.proprty === obj2.property && obj1.value === obj2.value) {
    return true
  } else {
    return false
  }
}

//Testcase
function TestCase() {
    let TestCase = [
        {
            "obj1": {
                fruit: "Apple",
                colour: "Red"
            },
            "obj2": {
                fruit: "Apple",
                colour: "Red"
            },
            "exp": true
        },
        {
            "obj1": {
                name: "Smith",
                place: "England"
            },
            "obj2": {
                shape: "triangle",
                sides: 3
            },
            "exp": false
        }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        let Result = compareObj(TestCase[i].obj1, TestCase[i].obj2);
        console.log(Result)
        if (Result === TestCase[i].exp) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}
TestCase()