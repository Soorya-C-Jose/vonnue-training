let user = {
    firstName: "John",
    sayHi() {
        console.log(`Hello, ${this.firstName}!`);
    }
};
setTimeout(function () {
    user.sayHi()
}, 1000)


//bind()
let users = {
    firstName: "Jacob"
};
function func() {
    console.log(this.firstName)
}
let funcUsers = func.bind(users)
funcUsers();

let User = {
    firstName: "Adam"
};
function func(phrase) {
    console.log(phrase + ', ' + this.firstName)
}
let funcUser = func.bind(User);
funcUser("Hello");


//partial functions
function mul(a, b) {
    return a * b;
}
let double = mul.bind(null, 2);
console.log(double(3))
console.log(double(8))
console.log(double(80))

function partial(func, ...argsBound) {
    return function (...args) {
        return func.call(this, ...argsBound, ...args);
    }
}
let user2 = {
    firstName: "John",
    say(time, phrase) {
        console.log(`[${time}] ${this.firstName}: ${phrase}!`)
    }
};
user2.sayNow = partial(user2.say, new Date().getHours() + ':' + new Date().getMinutes());
user2.sayNow("Hello")
