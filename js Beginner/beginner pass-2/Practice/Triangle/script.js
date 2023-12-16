function findHypotenuse(base,height) {
    return Math.sqrt((base*base)+(height*height))
}


//Compare function

function compareSides(got,exp) {
 if(got === exp) {
    return true
 } else {
    return false
 }
}

//Test case
function TestCase() {
    let TestCase = [
        {
            "base": 3,
            "height": 4,
            "exp": 8
        },
        {
            "base": 5,
            "height": 12,
            "exp":13
            
        },
        {
            "base": 15,
            "height": 8,
            "exp":17
        },
        {
            "base":8,
            "height":6,
            "exp":10
        },
        {
            "base":10,
            "height": -5,
            "exp": 11.18
        },
        {
            "base": -8,
            "height": -2,
            "exp": 7.74
        }
    ]

    for(let i=0; i < TestCase.length;i++) {
        let result = findHypotenuse(TestCase[i].base, TestCase[i].height);
        let got = compareSides(result, TestCase[i].exp)
        console.log(got)
        if(got) {
            console.log("TestCase "+[i+1]+" is passed")
        } else {
            console.log("TestCase "+[i+1]+" is passed")
        }
        console.log(TestCase[i].exp)
    }
}

TestCase()







