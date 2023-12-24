

function compareSides(got,exp) {
    if(got === exp) {
       return true
    } else {
       return false
    }
   
}

function findHypotenuse(base,height) {
    /*let result = ((base * base) + (height * height)) 
    console.log(result)
    let hypotenuse = (result)*/
    // console.log(hypotenuse)
//     if(( * result) === result) {
//         return true
//     } else {
//         return false
//     }
// }
let value = ((base * base) + (height * height));
for(let i = 0; i < value; i++) {
    // if (i === (base * height)) {
    //     return i
    // }

    if( i * i === value) {
        return i
    }
}
 return false
}

console.log(findHypotenuse(8,6))

//Test case
function TestCase() {
    let TestCase = [
        {
            "base": 3,
            "height": 4,
            "exp": 5
        },
        // {
        //     "base": 5,
        //     "height": ,
        //     "exp":29
            
        // },
        // {
        //     "base": 3,
        //     "height": 2,
        //     "exp":13
        // },
        {
            "base":8,
            "height":6,
            "exp":100
        }
    ]

    for(let i=0; i < TestCase.length;i++) {
        let result = findHypotenuse(TestCase[i].base, TestCase[i].height);
        console.log(result)
         got = compareSides(result, TestCase[i].exp)
         console.log(got)
        if(got) {
            console.log("Test Case "+[i+1]+" is passed")
        } else {
            console.log("Test Case "+[i+1]+" is failed")
        }
    }
}

TestCase()