
// function compareArray(arr1, arr2) {
//     if (arr1.length === arr2.length) {
//         for (let i = 0; i < arr1.length; i++) {
//             if (arr1[i] !== arr2[i])
//                 return false
//         }
//         return true
//     }
//     return false
// }


function reverseElement(arr) {
    let length = arr.length;
    let reversed = [];
    for (let i = length - 1; i >= 0; i--) {
         reversed[i] = arr[i] 
        //console.log(arr[i])
        console.log(reversed[i])
       // eleRev = reversed[i - 1]
    }

    //    for (let i = length - 1; i >= 0; i--) {
    //     reversed += arr[i];
    //     [reversed[i]] = [reversed]
    //     // console.log(reversed)
    // }
    // return reversed
}

//Testcases

function tcs() {
    let tcs = [
        {
            "x": [8, 2, 3],
            "exp": [3, 2, 8]
        },
        {
            "x": [2, 4, 5, 6],
            "exp": [6, 5, 4, 2]
        }
    ]

    for (let i = 0; i < tcs.length; i++) {
        let result = reverseElement(tcs[i].x);
        // console.log(result)
        //console.log(tcs[i].exp)
        if (result === tcs[i].exp) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}

tcs()