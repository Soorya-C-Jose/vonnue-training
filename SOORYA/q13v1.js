function compare(got, exp) {
    if (got === exp) {
        return true
    } else {
        return false
    }
}

function findFibonacci(num) {
        let fibArr = []
    let i = 1
      while (i <= num) {
        i++;

     fibArr[i] = fibArr[i - 1] + fibArr[i - 2]
     console.log(i)
      return fibArr;

    // let fibArr = []
    // let i = 1
    // let sum;
    // while (i <= num) {
    //     i++
    //     sum = (i + i)
    //     console.log(sum)
    //     fibArr[i] = [fibArr + i]
    //     if(num <= 0) {
    //         return -1
    //     }
    }
}

console.log(findFibonacci(3))


//testcases 
function TestCase() {
    let TestCase = [
        {
            "num": 6,
            "exp": [0, 1, 1, 2, 3, 5]
        },
        {
            "num": 9,
            "exp": [0, 1, 1, 2, 3, 5, 8, 13, 21]
        },
        {
            "num": -1,
            "exp": -1
        }

    ]

    for (let i = 0; i < TestCase.length; i++) {
        let Result = findFibonacci(TestCase[i].num);
        let got = compare(Result, TestCase[i].exp);
        if(got) {
            console.log("Test Case "+[i+1]+" is passed")
        } else {
            console.log("Test Case "+[i+1]+" is failed")
        }
    }
}

TestCase()