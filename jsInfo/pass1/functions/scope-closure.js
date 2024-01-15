//code blocks
{
    let message = "Hello";
    console.log(message)
}
{
    let message = "GoodBye";
    console.log(message)
}
// console.log(message)

if (true) {
    let phrase = "Hello!";
    console.log(phrase)
}
// console.log(phrase)

for (let i = 0; i < 3; i++) {
    console.log(i)
}
// console.log(i)


//Nested functions
function makeCounter() {
    let count = 0;
    return function () {
        return count++;
    };
}
let counter = makeCounter();
console.log(counter())
console.log(counter())
console.log(counter())

//closures
function init() {
    let name = "Mozilla";
    function displayName() {
        console.log(name)
    }
    displayName()
}
init()



/**************Garbage collection*************/
function f() {
    let value = 123;
    return function () {
        console.log(value)
    }
}
let arr = [f(), f(), f()]

let value = "Surprise!";
function f() {
    let value = "the closest value"
    function g() {
        debugger;
    }
    return g;
}
let g = f()
g()



function makeArmy() {

    let shooters = [];

    for (let i = 0; i < 10; i++) {
        let shooter = function () {
            console.log(i);
        };
        shooters.push(shooter);
    }

    return shooters;
}

let army = makeArmy();
army[0]();
army[5](); 