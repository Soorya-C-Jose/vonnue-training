
function compareArray(arr1, arr2) {
    if (arr1.length === arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i])
                return false
        }
        return true
    }
    return false
}


function testCase() {
    let testCase = [
        {
            "x": [10, 20, 30],
            "y": [10, 20, 30],
            "exp": true
        },
        {
            "x": [10, 20, 30, 40],
            "y": [10, 20, 30],
            "exp": false
        },
        {
            "x": [10, 30, 40],
            "y": [10, 0, 10],
            "exp": false
        },
        {
            "x": [10, 20, "30", 10],
            "y": [10, 20, 30],
            "exp": false
        },
        {
            "x": [10, 20, 90, 20],
            "y": [10, 20, 30],
            "exp": false
        },
        {
            "x": [10, 20],
            "y": [10, 20, 30],
            "exp": false
        }
    ]

    for (let i = 0; i < testCase.length; i++) {
        got = compareArray(testCase[i].x, testCase[i].y)
        if (got === testCase[i].exp) {
            console.log("Test case " + (i + 1) + " is passed");
        } else {
            console.log("Test case " + (i + 1) + " is failed");
        }
    }

}

testCase()



function testCase2() {
    let testCase2 = [
        {
            "x": [1, 2, 3, 4, 5, 6, 7, 8],
            "num": 0,
            "exp": [1, 2, 3, 4, 5, 6, 7, 8]
        },
        {
            "x": [1, 2, 3, 4, 5, 6, 7, 8],
            "num": 1,
            "exp": [1, 3, 5, 7]
        },
        {
            "x": [1, 2, 3, 4, 5, 6, 7, 8],
            "num": 2,
            "exp": [1, 4, 7]
        },
        {
            "x": [1, 2, 3, 4, 5, 6, 7, 8],
            "num": 3,
            "exp": [1, 5]
        },
        {
            "x": [1, 2, 3, 4, 5, 6, 7, 8],
            "num": 10,
            "exp": [1]
        }
    ]

    for (let i = 0; i < testCase2.length; i++) {
        let resultArray = arrayPick(testCase2[i].x, testCase2[i].num)
        got = compareArray(resultArray, testCase2[i].exp)
        if (got) {
            console.log("Test case " + (i + 1) + " is passed")
        } else {
            console.log("Test case " + (i + 1) + " is failed")
        }
    }
}

testCase2()


function testCase3() {
    let testCase3 = [
        {
         "x":[1,2,3,4,5,6],
         "y":[7,8,9,0,1,2],
          "func":(x,y,0),
          "exp": [1,2,3,4,5,6,7,8,9,0,1,2]
        },
        {
            "x": [1, 2, 3, 4, 5, 6],
            "y": [7, 8, 9, 0, 1, 2],
            "func": (x, y, 1),
            "exp": [1,7,2,8,3,9,4,0,5,1,6,2]
        },
        {
            "x": [1,2,3,4,5,6],
            "y": [7,8,9,0,1,2],
            "func": (x,y,2),
            "exp": [1,7,8,2,9,0,3,1,2,4,5,6]
        },
        {
            "x": [1,2,3,4,5,6],
            "y":[7,8,9,0,1,2],
            "func": (x,y,10),
            "exp": [1,7,8,9,0,1,2,2,3,4,5,6]
        }
    ]
}


function arrayPick(arr, num) {
    //let arr = [10, 20, 33, 2, 34, 0]
    let r = []
    // if (num >= arr.length) {//
    //     return arr[0]
    // }
    if (num === 0) {
        return arr
    } else if (num > 0) {
        for (let i = 0; i < arr[i]; i++) {
            if (arr[i * (num + 1)] <= arr.length)
                r.push(arr[i * (num + 1)])
        }
    }
    return r;

}



let arr1 = [1, 2, 3, 4, 5]
let arr2 = [4, 3, 2, 1, 0]
function mixArray(arr1, arr2, num) {
    let result = []
    if (num === 0) {
        return newArr = arr1.concat(arr2)
    }
    shift(arr1[i])
    for(let i = 0; i < arr1.length; i++) {
      console.log (result.push(arr1[i]))
    }
    for(let j = 0; j < arr2.length; j++){
        return result.push(arr2[j])
    }

}

console.log(mixArray(arr1, arr2, 0))

