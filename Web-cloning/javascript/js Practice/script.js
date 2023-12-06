console.log("Hello world")

/*************Addition************/ 

let a = 10;
let b = 15;
let sum = a + b;
console.log(sum)


/***************Square root*****************/
const number = 10;
const result = Math.sqrt(10)
console.log(result)


/**************factorial of a given number************** */

let n =  0;
function factorial(n) {
  if (n == 0){
    return 1;
  } else {
    return n * factorial(n-1)
  }
}
console.log(factorial(n))


/**************Palindrome or not************* */

function isPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2 ; i ++) {
        if (str[i] !== str[len - 1-i]) {
            return false;
        }
    }
    return true;
}
const str1 = "madam";
const str2 = "fox";
console.log(isPalindrome(str1));
console.log(isPalindrome(str2));

/***************string reverse************** */

const str = "Geeks for Geeks"
let reversedStr = ''
for(let i = str.length-1; i >= 0; i--){
    reversedStr +=str[i]
}
console.log(reversedStr)


/****************print even numbers in an array*************** */

let numbers = [10,23,12,21,3,8]
let even = [];
for (let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0)
    even.push(numbers[i]);
}

console.log(`Even numbers in the array are: ${even}`)



/********************prime or not**************** */

function isPrime(input) {
    let prime = true;
    for(let i =2; i <= Math.sqrt(input); i++){
        if(input % i == 0) {
            prime = false;
            break;
        }
    }
    return prime && (input > 1);
}
console.log(isPrime(11));


/****************fibonacci series*************** */

function fibonacci(num) {
    let num1 = 0;
    let num2 = 1;
    let sum;
    let i = 0;
    for(i = 0; i< num; i++){
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num2;
}
console.log("fibonacci(5)): " + fibonacci(5));
console.log("fibonacci(8):" + fibonacci(8));



  