/************factorial using recursion********* */
function fact(n) {
    if (n === 0) {
        return 1
    } else {
        return (n * fact(n - 1))
    }
}
let num = 0
let result = fact(num);
console.log(result)


/************* return true if one of the two number is 100 or
 if the sum of the two numbers is 100**************** */

 // Solution 1
function checkSum(x,y) {
    let sum = x + y;
if (x == 100 || y == 100 || sum == 100){
    return true
} else return false
}

console.log(checkSum(10 , 100))
console.log(checkSum(10,0))

// Solution 2
const isEqualTo100 = (a,b) => a === 100 || b === 100 || (a+b) == 100;
console.log(isEqualTo100(100,0));
console.log(isEqualTo100(32,90));


/*************** get the extension of a file name****************/

const getFileExtension = (str) => str.slice (str.lastIndexOf('.'));
console.log(getFileExtension('index.html'));
console.log(getFileExtension('webpack.config.js'));


/**************get the current date*************/
// const formatDate = (date = new Date()) => {
//     const days = date.getDate() + 1;
//     const months = date.getMonth() + 1;
//     const years = date.getFullYear();
//     return `${days}/${months}/${years}`
// }

// console.log(formatDate());
