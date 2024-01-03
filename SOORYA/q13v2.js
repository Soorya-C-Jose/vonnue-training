function findFib(num) {
    // fibonacci = [0, 1, 1, 2, 3, 5, 8, 13]
    // let fibArr = []
    // if (num <= 0) {
    //     return -1
    // }
    // for (let i = 0; i <= num; i++) {
    //     console.log(i)
    //     //if(i ===  fibonacci[i]) {
    //     // return i
    //     //}
    // }
}
//console.log(findFib(5))


function findFib(num) {
    let sum;
    let i = 0;
    if (num <= 0) {
        return -1
    }
    for (i = 0; i < num; i++) {
        console.log(i)
       // i = i + i
        // sum = (i + i)
        sum[i] = i
        // console.log(sum)
        console.log(sum)
    }
    // return num2;
    return sum
}
console.log(findFib(5))


//TestCase 
function TestCase() {
    let TestCase = [
        {
            "num": 6,
            "exp": [0, 1, 1, 2, 3, 5]
        },
        {
            "num": 4,
            "exp": [0, 1, 1, 2]
        },
        {
            "num": 0,
            "exp": -1
        }
    ]

    for (let i = 0; i < TestCase.length; i++) {
        let Result = findFib(TestCase[i].num);
        if (Result === TestCase[i].exp) {
            console.log("Test Case " + [i + 1] + " is passed")
        } else {
            console.log("Test Case " + [i + 1] + " is failed")
        }
    }
}
TestCase()