/**********FUNCTION DECLARATION***********/
function printprops(o) {
    for (let p in 0) {
        console.log(`{p}: ${0[p]}\n`)
    }
}

function factorial(x) {
    if (x <= 1) return 1;
    return x * factorial(x - 1);
}
console.log(factorial(5))

function distance(x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}
console.log(distance(2, 3, 4, 5))


/************FUNCTION EXPRESSIONS**********/

const square = function (x) {
    return x * x;
};
console.log(square(2))

// const f = function fact(x) {
//     if (x <= 1) {
//         return 1;
//     } else {
//         return x * fact(x - 1);
//     }
//}
//console.log(f(0))

/*********ARROW FUNCTIONS**********/

// const sum = (x,y) =>  {
// return x + y;
// };
// console.log(sum(3,2))

const sum = (x, y) => x + y;
console.log(sum(10, 20))

const multiply1 = (x,y) => x*y;
console.log(multiply1(2,24))


/**********INVOKING FUNCTIONS********/

//as function
function myFunction(a, b) {
    return a * b;
}
console.log(myFunction(10, 2))

//method invocation
let calculator = {
    operand1: 1,
    operand2: 2,
    add() {
        this.result = this.operand1 + this.operand2;
    }

};
calculator.add()
console.log(calculator.result)

const myObject = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName
    }
}
console.log(myObject.fullName())

/*******FUNCTION ARGUMENTS AND PARAMETERS*******/
function getPropertyNames(o, a) {
    if (a === undefined) a = [];
    for (let property in o) a.push(property);
}
let o = { x: 1 }, p = { y: 2, z: 3 };
let a = getPropertyNames(o);
console.log(getPropertyNames(p, a));

//rest parameters and variable length argument lists
function max(first = -Infinity, ...rest) {
    let maxValue = first;
    for (let n of rest) {
        if (n > maxValue) {
            maxValue = n;
        }
    }
    return maxValue;
}
console.log(max(1, 10, 100, 2, 3, 1000, 4, 5, 6))

//the arguments object

function max2(x) {
    let maxValue2 = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > maxValue2) maxValue2 = arguments[i];
    }
    return maxValue2
}
console.log(max2(1, 10, 100, 2, 3, 1000, 4, 5, 6))

//the spread  operator 

let numbers = [5, 3, 2, 1, 6, 3, 8, 9];
console.log(Math.min(...numbers))

function sum1(x, y, z) {
    return x + y + z;
}
const number = [1, 2, 3];
console.log(sum1(...number));
console.log(sum1.apply(null, number));


function suum (x,y,z) {
    return x + y + z;
}
const num = [1,2,3];
console.log(suum(...num));
console.log(suum.apply(null, num))

//destructing function arguments into parameters

// function vectorAdd(v1,v2) {
//     return [v1[0] + v2[0] , v1[1] + v2[1]];
// }
// console.log(vectorAdd[1,2], [3,4])

function vectorAdd([x1, y1], [x2, y2]) {
    return [x1 + x2, y1 + y2]
}
console.log(vectorAdd([1, 2], [3, 4]))

//argument types
// function sum2(a) {
//     let total = 0;
//     for (let element of a) {
//         if (typeof element !== "number") {
//             throw new TypeError("sum2(): elements must be numbers");
//         }
//         total += element;
//     }
//     return total;
// }
// console.log(sum2([1,2,3]))
// console.log(sum2(1,2,3));
// console.log(sum2([1,2,"3"]));


/*******FUNCTION AS VALUES******/
function square1(x) {
    return x * x;
}
let s = square1;
console.log(square(4))
console.log(s(4))

/**********FUNCTION AS DATA*********/

function add(x, y) {
    return (x + y)
}
console.log(add(2, 5))

function subtract(x, y) {
    return (x - y)
}
console.log(subtract(10, 2))

function multiply(x, y) {
    return (x * y)
}
console.log(multiply(8, 2))

function divide(x, y) {
    return (x / y)
}
console.log(divide(10, 2))


/************FUNCTION PROPERTIES*********/

uniqueInteger.counter = 0;
function uniqueInteger() {
    return uniqueInteger.counter++;
}
console.log(uniqueInteger())
console.log(uniqueInteger())
console.log(uniqueInteger())

function factorial(n) {
    if (n == 0) {
        return 1
    }
    else {
        factorial[n] = n * factorial(n - 1)
        return factorial[n];
    }

}

console.log(factorial(6))


/*******CLOSURES******/

let scope = "global scope"
function checkScope() {
    let scope = "local scope";
    function f() {
        return scope;
    }
    return f();
}
console.log(checkScope())


let uniqueInteger1 = (function () {
    let counter = 0;
    return function () {
        return counter++;
    };
}());
console.log(uniqueInteger1())
console.log(uniqueInteger1())

// function counter() {
//     let n = 0;
//     return {
//         count: function() {
//             return n++;
//         },
//         reset: function() {
//             n = 0;
//         }
//     }
// }
// let c = counter(), d = counter();
// console.log(c.count())
// console.log(d.count())
// console.log(c.reset())
// console.log(d.count())


function counter(n) {
    return {
        get count() {
            return n++;
        },
        set count(m) {
            if (m > n) n = m;
            else throw Error("count can only be set to a larger value");
        }
    };
}
let c = counter(1000);
console.log(c.count)
console.log(c.count);
console.log(c.count);

//private ppty accessor methods using closure

function addPrivateProperty(o, name, predicate) {
    let value;
    o[`get${name}`] = function () {
        return value;
    };
    o[`set${name}`] = function (v) {
        if (predicate && !predicate(v)) {
            throw new TypeError(`aet${name}: invalid value ${v}`);
        } else {
            value = v;
        }
    };
}

/*******FUNCTION PROPERTIES, METHODS, AND CONSTRUCTOR
 * ******/

//call() apply() method
// f.call(0);
// f.apply(0);


const person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
const person1 = {
    firstName: "john",
    lastName:"Doe"
}
const person2 = {
    firstName: "mary",
    lastName: "doe"
}
console.log(person.fullName.call(person1));


//bind()

let sum11 = (x,y) => x + y;
let succ = sum11.bind(null, 1);
succ(2)
function f(y,z) {
    return this.x + y + z;
}
let g1 = f.bind({x: 1}, 2);
console.log(g1(3))


function f(y) {
    return this.x + y;
}
let ob = {x: 1};
let g = f.bind(ob);
g(2)
let h = { x: 10, g};
console.log(h.g(2))

//FUNCTION CONSTRUCTOR 

const summ = new Function('a','b','return a + B');
console.log(sum(12, 6))



/************FUNCTIONAL PROGRAMMING***********/
//processing array with functions

let data = [1,1,3,5,5]
let total = 0;
for(let i = 0; i < data.length; i++) total += data[i];
let mean = total/data.length;
console.log(mean)

for(let i = 0; i < data.length; i++) {
    let deviation = data[i] - mean;
    total += deviation * deviation;
}
let stddev = Math.sqrt(total/(data.length-1));
console.log(stddev)


//functional style using array methods(map(), reduce())

const sum3 = (x,y) => x + y;
const squares = x => x*x;
let deta = [1,1,3,5,5];
let mean1 = data.reduce(sum)/deta.length;
let deviations = deta.map(x => x-mean);
let standarddev = Math.sqrt(deviations.map(squares).reduce(sum)/(deta.length-1));
console.log(standarddev)

//higher order functions
function not(f) {
    return function(...args) {
        let result = f.apply(this, args);
        return !result;
    }
} 
const even = x => x % 2 === 0;
const odd = not(even);
console.log([1,1,3,5,5].every(odd))


//mapper()

// function mapper(f) {
//     return a => map(a, f);
// }

// const increment = x => x+1;
// const incrementAll = mapper(increment);
// console.log(incrementAll([1,2,3]))


function compose(f,g) {
    return function(...args) {
        return f.call(this, g.apply(this,args));
    };
}
const sumOf = (x,y) => x+y;
const squareOf = x => x*x;
console.log(compose(squareOf, sumOf)(2,3))


//partial applications of functions
function partialLeft(f1,...outerArgs) {
    return function(...innerArgs){
        let args = [...outerArgs, ...innerArgs];
        return f1.apply(this, args);
    };
}
function partialRight(f1,...outerArgs) {
    return function(...innerArgs) {
        let args = [...innerArgs, ...outerArgs];
        return f1.apply(this, args);
    };
}
function partial(f1, ...outerArgs) {
    return function(...innerArgs) {
        let args = [...outerArgs];
        let innerIndex = 0;
        for(let i = 0; i < args.length; i++){
            if (args[i] === undefined) args[i] = 
            innerArgs[innerIndex++];
        }
        args.push(...innerArgs.slice(innerIndex));
        return f1.apply(this, args)
    };
}

const f1 = function(x,y,z) {
    return x * (y - z);
};
console.log(partialLeft(f1, 2)(3,4))
console.log(partialRight(f1, 2)(3,4));
console.log(partial(f, undefined, 2)(3,4))



const increment = partialLeft(sum, 1);
const cuberoot = partialRight(Math.pow, 1/3);
console.log(cuberoot(increment(26)))


// const product = (x,y) => x*y;
// const neg = partial(product, -1);
// const sqrt = partial(Math.pow, undefined, .5);
// const reciprocal = partial(Math.pow, undefined, neg(1));
// let data1 = [1,1,3,5,5]
// let mean2 = product(reduce(data1, sum),
// reciprocal(data1.length));
// let stddeviation = sqrt(product(reduce(map(data1,compose(square,partial(sum,neg(mean2)))),
// sum),
// reciprocal(sum(data1.length,neg(1)))));
// console.log([mean2, stddeviation])



/********MEMOIZATION*******/

function memoize(f2) {
    const cache = new Map();
    return function(...args) {
        let key = args.length + args.join("+");
        if (cache.get(key)) {
            return cache.get(key);
        } else {
            let result = f2.apply(this, args);
            cache.set(key, result);
            return result;
        }
    };
}
memoize()


function gcd(a,b) {
    if (a < b) {
        [a,b] = [b,a]
    }
    while(b !== 0) {
        [a,b] = [b, a%b];
    }
    return a;
}
const gcdmemo = memoize(gcd);
console.log(gcdmemo(85, 187))
const facto = memoize(function(n) {
    return (n <= 1) ? 1 : n * facto(n-1);
});
console.log(factorial(5))




















