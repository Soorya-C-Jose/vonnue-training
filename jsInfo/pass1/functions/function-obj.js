/***********name property***********/

function sayHi() {
    console.log("Hi")
}
console.log(sayHi.name)


let sayHello = function () {
    console.log("Hello")
};
console.log(sayHello.name)


function f(sayGreet = function () { }) {
    console.log(sayGreet.name)
}
f()


let user = {
    sayHi() {

    },
    sayBye: function () {

    }
}
console.log(user.sayHi.name);
console.log(user.sayBye.name)

/************length property*************/
function f1(a) { }
function f2(a, b) { }
function many(a, b, ...more) { }
console.log(f1.length)
console.log(f2.length)
console.log(many.length)


// handlers.length
// function ask(question, ...handlers) {
//     let isYes = confirm(question);
//     for (let handler of handlers) {
//         if (handler.length == 0) {
//             if (isYes) handler();
//         } else {
//             handler(isYes)
//         }
//     }
// }
// ask("Question?", () => console.log('You said yes'), result => console.log(result))


//custom ppty
function sayHi() {
    console.log("Hi");
    sayHi.counter++;
}
sayHi.counter = 0;
sayHi()
sayHi()
console.log(`Called ${sayHi.counter} times`)

function makeCounter() {
    function counter() {
        return counter.count++;
    };
    counter.count = 0;
    return counter
}
let counter = makeCounter();
console.log(counter());
console.log(counter())


//Named function expressions(NFE)
let sayHai = function func(who) {
    if (who) {
        console.log(`Hello, ${who}`);
    } else {
        func("Guest");
    }
};
sayHai()
//func()

// let sayHai = function func(who) {
//     if(who) {
//         console.log(`Hello, ${who}`);
//     }else {
//         func("Guest");
//     }
// };
// let welcome = sayHai;
// sayHai = null;
// welcome();



/******************new function*****************/
let sum = new Function('a', 'b', 'return a + b')
console.log(sum(1,2))

let sayGood = new Function('console.log(("Hello"))')
sayGood()


//closure
function getFunc() {
    let value = "test";
    let func = function() {
        console.log(value);
    }
    return func
}
getFunc()()


