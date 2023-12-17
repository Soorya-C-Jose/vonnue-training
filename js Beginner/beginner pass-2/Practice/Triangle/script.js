//Compare function

function compareSides(got,exp) {
    if(got === exp) {
       return true
    } else {
       return false
    }
   }



function findHypotenuse(base,height) {
    return Math.sqrt((base*base)+(height*height))
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
        }
    ]

    for(let i=0; i < TestCase.length;i++) {
        let result = findHypotenuse(TestCase[i].base, TestCase[i].height);
        let got = compareSides(result, TestCase[i].exp)
        if(got) {
            console.log("Test Case "+[i+1]+" is passed")
        } else {
            console.log("Test case "+[i+1]+" is failed")
        }
    }
}

TestCase()


//******************************************************************/

function rightAngleOrNot(side1, side2){
//  if(Math.sqrt((side1 * side1) + (side2 * side2))) {
//     return true;
//  } else {
//     return false
//  }
// let sum = (side1 * side1) + (side2 * side2) 
// for(i = 0; i <= sum; i++){
//     if(sum === (i+1)) {
//         return true
//     } else {
//         return false
//     }
// }
}



//TestCases

function TestCase1() {
    let TestCase1 = [
        {
            "x": 3,
            "y": 4,
            "exp": true
        },
        {
            "x": 3,
            "y": 9,
            "exp": true
        },
        {
            "x": 8,
            "y": 4,
            "exp": false
        }
    ]

    for(let i = 0; i < TestCase1.length; i++) {
        let result = rightAngleOrNot(TestCase1[i].x, TestCase1[i].y)
        got = compareSides(result, TestCase1[i].exp)
       if(got) {
        console.log("Test Case "+[i+1]+" is passed")
       } else {
        console.log("The case "+[i+1]+" is failed")
       }
    }
}

TestCase1()





//algorithm

//we have two sides of a triangle
//we could find that the third side as the same as hypotenuse
// let store the squares in a variable called value
//






