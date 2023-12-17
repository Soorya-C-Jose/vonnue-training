
function compareSides(got,exp) {
    if(got === exp) {
       return true
    } else {
       return false
    }
   }

   

function findHypotenuse(base,height) {
    let hypot = 0;
    // return hypot += ((base * base) + (height * height))
//   return sum = ((base * base) + (height * height))
//   return hypotenuse = (sum *sum)
//  return Math.sqrt ((base*base) + (height*height))
Math.hypot(base * height)
}

//Test case
function TestCase() {
    let TestCase = [
        {
            "base": 3,
            "height": 4,
            "exp": 9
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
        }
    ]

    for(let i=0; i < TestCase.length;i++) {
        let result = findHypotenuse(TestCase[i].base, TestCase[i].height);
         got = compareSides(result, TestCase[i].exp)
        if(got) {
            console.log("Test Case "+[i+1]+" is passed")
        } else {
            console.log("Test Case "+[i+1]+" is failed")
        }
    }
}

TestCase()