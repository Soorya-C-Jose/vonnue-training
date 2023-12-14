
// function arrayEle (num) {
//     let array = [2,3,4,5,6,7]
//     let r = []
//     for(let i = 0; num >= array.length; i++ ) {
//         return array[0]
//     }
//     for (let i = 0; num < array.length; i++) {
//         if (num === 0) {
//           return r = array
//         }
//     }
// }


// console.log(arrayEle(0)


function arrayPick(num) {
    let arr = [10, 20, 33, 2, 34, 0]
    let r = []
    if (num >= arr.length) {
        return arr[0]
    }
    else if (num === 0) {
        return arr
    } else if (num > 0) {
        // r.push(arr[0])
        for (let i = 0; i < arr[i]; i++) {
            r.push(arr[i * (num + 1)])
        }
    }
    return r;

}
console.log(arrayPick(1))



// write a function to test if two arrays are the same
// return true if elements match and are the same else false

function sameArray() {
    let firstArray = [1, 2, 3, 4, 5]
    let secondArray = [0, 2, 3, 4, 5]
    if (firstArray.length === secondArray.length) {
        //    console.log("length of array is equal")
    } else {
        // console.log("length of array is different")
    }
    for (let i = 0; i < firstArray.length; i++) {
        if (firstArray[i] === secondArray[i]) {
            return true
        } else {
            return false
        }
    }
}
console.log(sameArray())



let arr1 = [1, 2, 3, 4, 5]
let arr2 = [6, 7, 8, 9, 10]

function mixArray(arr1, arr2, num) {
    if (num == 0) {
        return newArray = arr1.concat(arr2)
    }
    if (num == 1) {
    }
}

console.log(mixArray(arr1, arr2, 1))
