
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
    if (arr.length <= 0) {
        return -1
    }
    for (let i = length - 1; i >= 0; i--) {
        reversed[i] = arr[i]
        // eleRev = reversed[i - 1]
    }
    return reversed
}
console.log(reverseElement([1,2,3]))


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
        },
        {
            "x": [],
            "exp": -1
        }
    ]

    for (let i = 0; i < tcs.length; i++) {
        let result = reverseElement(tcs[i].x);
        if (result[i] === tcs[i].exp[i]) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}

tcs()