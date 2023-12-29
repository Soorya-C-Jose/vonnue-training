function compare(got, exp) {
    if (got) {
        return true;
    } else {
        return false
    }
}

function commonDivisor(num1, num2) {

    // let i = 1;

    // while (i < num1 ) {
    //     i++
    //     console.log(i)
    //     if ((num1 % i === 0) && (num2 % i === 0)) {
    //         return i
    //     } else {
    //         return -1
    //     }
    // }


    let i = 1;
    divisor = 0;
    while (i <= num1) {
        i++ ;
        if (num1 % i === 0 && num2 % i === 0) {
            divisor = i
            return divisor
        } else {
            return -1
        }
    }
}

// let i = 1;
// let divisor = 0;
//  while (i <= num1) {
//     i++;
//     if (num1 % i === 0 && num2 % i === 0) {
//         divisor = i;
//         return divisor
//         console.log(divisor)
//       } else {
//         return -1
//       }
//     }
// } 


function TestCase() {
    let TestCase = [
        {
            "x": 5,
            "y": 15,
            "exp": 5
        },
        {
            "x": 4,
            "y": 8,
            "exp": 4
        },
        {
            "x": 6,
            "y": 12,
            "exp": 6
        },
        {
            "x": 3,
            "y": 8,
            "exp": -1
        }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        let Result = commonDivisor(TestCase[i].x, TestCase[i].y);
        let got = compare(Result, TestCase[i].exp)
        if (got) {
            console.log("Test Case " + [i + 1] + " is passed");
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}

TestCase()