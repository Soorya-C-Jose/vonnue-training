function findseq(num) {
    // let newNum;
    // let element = 1;
    // let result = 0
    // while (num !== 1) {
    //     result++
    //     if (num % 2 === 0) {
    //         newNum = num / 2
    //         result[element] = newNum
    //     } else {
    //         newNum = (3 * num) + 1
    //         result[element] = newNum
    //     }
    //     num = newNum
    // }
    // return result

}
// console.log(findseq(2))




//     while (newNum > 0) {
//         console.log(num)
//         if (newNum % 2 === 0) {
//             newNum = newNum/ 2
//             console.log(newNum)
//             //result[element] = newNum
//             //return result
//         } else {
//             newNum = (3 * newNum) + 1
//             console.log(newNum)
//             //result[element] = newNum
//             //return result
//         }
//     }
//    // num += result
//     element++
//     //return result



function maxSequence(num1, num2) {
    let newNumber;
    let result = []
    // element = 0;
    // for (let i = min; i <= max; i++) {
    //     console.log(i)
    //     if (i % 2 === 0) {
    //         newNumber = i / 2
    //         console.log(newNumber)
    //         result = newNumber
    //     } else {
    //         newNumber = (3 * i) + 1
    //         result = newNumber
    //     }
    //     i = result
    // }
    // return result++

    let element = 0;
    // if (typeof (num) !== 'number') {
    //     return 'invalid'
    // }

    for (let i = num1; i <= num2; i++) {
      console.log(findseq(i)) 

    }
}


console.log(maxSequence(3, 5))






