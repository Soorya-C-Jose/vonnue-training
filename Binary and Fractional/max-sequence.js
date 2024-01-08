function convergence(num) {
    let result = []
    let element = 0;
    let newNum = []
    if (typeof (num) !== 'number') {
        return 'invalid'
    }
    if (num <= 0) {
        return 0
    }
    // while (num > 1) {
    //     if (num % 2 === 0) {
    //         newNum = num / 2
    //         return result[element] = newNum
    //     } else {
    //         newNum = (3 * num) + 1
    //         return result[element] = (3 * num) + 1
    //     }
    // }
    // num++

    while (num > 0) {
        if (num % 2 === 0) {
            newNum = num / 2
            result[element] = newNum
            return result
        } else {
            newNum = (3 * num) + 1
            result[element] = newNum
            return result
        }
    }
    num += result
    num++
}

console.log(convergence(3))


function TestCase() {
    let TestCase = [
        {
            "x": 1,
            "exp": [4, 2, 1]
        },
        {
            "x": "str",
            "exp": "invalid"
        },
        {
            "x": 6,
            "exp": [3, 10, 5, 16, 8, 4, 2, 1]
        },
        {
            "x": 3,
            "exp": [10, 5, 16, 8, 4, 2, 1]
        },
        {
            "x": 0,
            "exp": 0
        }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        let result = convergence(TestCase[i].x);
        if (result === TestCase[i].exp) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}
// TestCase()



/**********************************************************************************/

// function findMaxSequence(min, max) {
//     if (typeof (min) !== 'number' || typeof (max) !== 'number') {
//         return 'invalid'
//     }

// }

// function tcsMax() {
//     let tcsMax = [
//         {
//             "min": 2,
//             "max": 4,
//             "exp": [3, 7]
//         },
//         {
//             "min": 3,
//             "max": 6,
//             "exp": [6, 8]
//         },
//         {
//             "min": 2,
//             "max": "string",
//             "exp": 'invalid'
//         }

//     ]
//     for (let i = 0; i < tcsMax.length; i++) {
//         let result = findMaxSequence(tcsMax[i].min, tcs[i].max);
//         if (result === tcsMax[i].exp) {
//             console.log("Test Case " + [i + 1] + " is passed")
//         } else {
//             console.log("Test Case " + [i + 1] + " is failed")
//         }
//     }
// }

// TestCase()
