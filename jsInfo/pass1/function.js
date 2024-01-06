//local variable

function showMessage() {
    let message = "Hello, Im javascript!";
    console.log(message)
}
showMessage()

//global variable
let userName = 'john';
function showMessages() {
    let messages = 'Hello, ' + userName;
    console.log(messages)
}
showMessages()


let user = 'jerome';
function show() {
    let user = 'bob';
    let msg = 'hello,' + user;
    console.log(msg)
}
show()
console.log(user)


//returning a value
function sum(a, b) {
    return a + b;
}
let result = sum(1, 2)
console.log(result)


//functions == comments
// function showPrimes(n) {
//     nextPrime: for (let i = 2; i < n; i++) {
//         for (let j = 2; j < i; j++) {
//             if (i % j == 0) continue nextPrime;
//         }
//         console.log(i)
//     }
// }


function showprimes(n) {
    for (let i = 2; i < n; i++) {
        if (!isPrime(i))
            continue;
        console.log(i)
    }
}
function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false
    }
    return true
}

//another syntax for creating a function
let sayHi = function () {
    console.log("hello")
}
sayHi()

function sayHelo() {
    console.log("Hello")
}
let func = sayHelo;
func();
sayHelo()


//arrow functions
let double = n => n * 2
console.log(double(3))

let add = (a, b) => {
    let result = a + b;
    return result;
};
console.log(add(4, 2))

