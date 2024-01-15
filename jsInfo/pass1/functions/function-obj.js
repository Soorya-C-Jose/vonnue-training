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
function ask(question, ...handlers) {
    let isYes = confirm(question);
    for (let handler of handlers) {
        if (handler.length == 0) {
            if (isYes) handler();
        } else {
            handler(isYes)
        }
    }
}
ask("Question?", () => console.log('You said yes'), result => console.log(result))





// he user gives a positive answer.
// A function with arguments, which is called in either case and returns an answer.
// To call handler the right way, we examine the handler.length property.

// The idea is that we have a simple, no-arguments handler syntax for positive cases (most frequent variant), but are able to support universal handlers as well:

