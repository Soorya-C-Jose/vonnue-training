//decorator

function slow(x) {
    console.log(`called with ${x}`);
    return x;
}
function cachingDecorator(func) {
    let cache = new Map();
    return function (x) {
        if (cache.has(x)) {
            return cache.get(x);
        }
        let result = func(x);
        cache.set(x, result);
        return result
    };
}
slow = cachingDecorator(slow);
console.log(slow(1))
console.log("Again: " + slow(1));
console.log(slow(2))
console.log("Again: " + slow(2))


//delaying decorator


/*************function.call()**************/
// let worker = {
//     someMethod() {
//         return 1;
//     },

//     slow(x) {
//         console.log(("Called with " + x));
//         return x * this.someMethod();
//     }
// };

// function cachingDecorator(func) {
//     let cache = new Map();
//     return function (x) {
//         if (cache.has(x)) {
//             return cache.get(x);
//         }
//         let result = func(x);
//         cache.set(x, result);
//         return result;
//     };
// }

// console.log((worker.slow(1)));

// worker.slow = cachingDecorator(worker.slow);

// console.log((worker.slow(2)));


function sayHi() {
    console.log(this.name);
}
let users = { name: "joseph" };
let admin = { name: "Admin" }
sayHi.call(users)
sayHi.call(admin)


function say(phrase) {
    console.log(this.name + ':' + phrase)
}
let user = { name: "John" };
say.call(user, "hello")


//Multiline - arguments
// let worker = {
//     slow(min, max) {
//         console.log((`Called with ${min},${max}`));
//         return min + max;
//     }
// };

// function cachingDecorator(func, hash) {
//     let cache = new Map();
//     return function () {
//         let key = hash(arguments);
//         if (cache.has(key)) {
//             return cache.get(key);
//         }

//         let result = func.call(this, ...arguments);

//         cache.set(key, result);
//         return result;
//     };
// }

// function hash(args) {
//     return args[0] + ',' + args[1];
// }

// worker.slow = cachingDecorator(worker.slow, hash);

// console.log((worker.slow(3, 5)));
// console.log(("Again " + worker.slow(3, 5)));


//Method borrowing
let person1 = {
    name: "Daniel",
    printName: function () {
        console.log(this.name)
    }
}
let person2 = {
    name: "Michael"
}
person1.printName.call(person2)
