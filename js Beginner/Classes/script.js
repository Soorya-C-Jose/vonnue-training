/******CLASSES AND PROTOTYPES*******/

//simple javascript class

function range(from, to) {
    let r = Object.create(range.methods) // creating a new object using an existing object
    r.from = from;
    r.to = to;
    return r;
}
range.methods = {
    includes(x) { return this.from <= x && x <= this.to },
    [Symbol.iterator]() {
        for (let x = Math.ceil(this.from); x <= this.to; x++) yield;
    },
    toString() { return "(" + this.from + "..." + this.to + ")"; }
};
let r = range(1, 3);
console.log(r.includes(2))
console.log(r.toString())
// console.log([...r])


//CLASSES AND CONSTRUCTORS

function Pen(name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price;
}
const pen1 = new Pen("marker", "blue", "$3")
console.log(pen1)


function Person() {
    this.name = "John",
        this.age = 23
}
const person1 = new Person()
console.log(person1)

//range class using consructors
function Range1(from, to) {
    this.from = from;
    this.to = to;
}
Range1.prototype = {
    includes: function (x) { return this.from <= x && x <= this.to; },
    [Symbol.iterator]: function* () {
        for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    },
    toString: function () { return "(" + this.from + "..." + this.to + ")"; }
};
let r1 = new Range(1, 3)
console.log(r.includes(2))
console.log(r.toString())
// console.log([...r])



//yield operator
function* foo(index) {
    while (index < 2) {
        yield index;
        index++;
    }
}
const iterator = foo(0);
console.log(iterator.next().value);
console.log(iterator.next().value);

//instanceof

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
const auto = new Car('Honda', 'Accord', '1998');
console.log(auto instanceof Car);
console.log(auto instanceof Object)

//constructor property

let F = function () { };
let P = F.prototype;
let C = P.constructor;
console.log(C === F);


/********CLASSES WITH THE CLASS KEYWORD*******/

// class Range {
//     constructor1(from, to) {
//         this,from = from;
//         this.to = to;
//     }
//     includes(x) { return this.from <= x && x <= this.to;}
//     [Symbol.iterator]() {
//         for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
//     }
//     toString() { return `(${this.from}...${this.to})`;}
// }
// let r2 = new Range(1,3)
// console.log(r2.includes(2))
// console.log(r.tostring)


//Math.ceil

console.log(Math.ceil(0.95));
console.log(Math.ceil(4));
console.log(Math.ceil(7.004))

//static methods

class classWithStaticMethod {
    static staticProperty = 'someValue';
    static staticMethod() {
        return 'static method has been called.';
    }
    static {
        console.log('class static initialization block called');
    }
}
console.log(classWithStaticMethod.staticProperty);
console.log(classWithStaticMethod.staticMethod());


//getters and setters

const student = {
    firstName: 'Monica',
    get getName() {
        return this.firstName;
    }
};
console.log(student.firstName)
console.log(student.getName)
// console.log(student.getName())


const student1 = {
    firstName: "Antony",
    set changeName(newName) {
        this.firstName = newName;
    }
};
console.log(student1.firstName);
student1.changeName = 'Sarah';
console.log(student1.firstName);


//complex number class

class complex {
    constructor(real, imaginary) {
        this.r = real;
        this.i = imaginary;
    }
    plus(that) {
        return new complex(this.r + that.r, this.i + that.i);
    }
    times(that) {
        return new complex(this.r * that.r - this.i * that.i, this.r * that.i + this.i * that.r);
    }
    static sum(c, d) {
        return C.plus(d);
    }
    static product(c, d) {
        return C.times(d);
    }
    get real() {
        return this.r;
    }
    get imaginary() {
        return this.i;
    }
    get magnitude() {
        return Math.hypot(this.r, this.i);
    }
    toString() {
        return `{${this.r},${this.i}}`;
    }
    equals(that) {
        return that instanceof complex &&
            this.r === that.r &&
            this.i === that.i;
    }
}
complex.ZERO = new complex(0, 0);
complex.ONE = new complex(1, 0);
complex.I = new complex(0, 1);
let c = new complex(2, 3);
let d = new complex(c.i, c.r);
console.log(c.plus(d.toString()))
console.log(c.magnitude)


/******ADDING METHODS TO EXISTING CLASSES*****/

//subclasses and prototypes


//subclasses with extends and super

class EZArray extends Array {
    get first() {
        return this[0];
    }
    get last() {
        return this[this.length - 1];
    }
}
let a = new EZArray();
console.log(a instanceof EZArray)
console.log(a instanceof Array)
console.log(a.push(1, 2, 3, 4))
console.log(a.first)
console.log(a.last)


//the super keyword 

class Foo {
    constructor(name) {
        this.name = name;
    }
    getNameSeparator() {
        return '-';
    }
}
class fooBar extends Foo {
    constructor(name, index) {
        super(name);
        this.index = index;
    }
    getFullName() {
        return this.name + super.getNameSeparator() + this.index;
    }
}
const firstfooBar = new fooBar('foo', 1);
console.log(firstfooBar.name);
console.log(firstfooBar.getFullName());


//delegation instead of inheritence

class histogram {
    constructor() { this.map = new this.map(); }
    count(key) {
        return this.map.get(key) || 0;
    }
    has(key) { return this.count(key) > 0 }
    get size() { return this.map.size; }
    add(key) {
        this.map.set(key, this.count(key) + 1);
    }
    delete(key) {
        let count = this.count(key);
        if (count === 1) {
            this.map.delete(key);
        } else if (count > 1) {
            this.map.set(key, count - 1);
        }
    }
    [Symbol.iterator]() { return this.map.keys(); }
    keys() { return this.map.keys(); }
    values() { return this.map.values(); }
    entries() { return this.map.entries(); }
}

//hierarchy of abstract and concrete set classes

class AbstractSet {
    has(x) { throw new Error("Abstract method"); }
}
class NotSet extends AbstractSet {
    constructor(set) {
        super();
        this.set = set;
    }
    has(x) { return !this.set.has(x); }
    toString() { return `{x| x ${this.set.toString()}}`; }
}
class RangeSet extends AbstractSet {
    constructor(from, to) {
        super()
        this.from = from;
        this.to = to;
    }
    has(x) { return x >= this.from && x <= this.to; }
    toString() { return `{x| ${this.from} <= x <= ${this.to}}`; }
}

class AbstractEnumerableSet extends AbstractSet {
    get size() { throw new Error("Abstract method"); }
    [Symbol.iterator]() { throw new Error("Abstract method"); }
    isEmpty() { return this.size === 0; }
    toString() { return `{${Array.from(this).join(", ")}}`; }
    equals(set) {
        if (!(set instanceof AbstractEnumerableSet)) return false;
        if (this.size !== set.size) return false;
        for (let element of this) {
            if (!set.has(element)) return false;
        }
        return true;
    }
}

class SingletonSet extends AbstractEnumerableSet {
    constructor(member) {
        super();
        this.member = member;
    }
    has(x) { return x === this.member; }
    get size() { return 1; }
    [Symbol.iterator]() { yield this.member; }
}

class AbstractWritebleSet extends AbstractEnumerableSet {
    insert(x) { throw new Error("Abstract method"); }
    remove(x) { throw new Error("Abstract method"); }
    add(set) {
        for (let element of set) {
            this.insert(element);
        }
    }
    subtract(set) {
        for (let element of set) {
            if (!set.gas(element)) {
                this.remove(element);
            }
        }
    }
}

class BitSet extends AbstractWritebleSet {
    constructor(max) {
        super();
        this.max = max;
        this.n = 0;
        this.numBytes = Math.floor(max / 8) + 1;
        this.data = new Uint8Array(this.numBytes);
    }
    _valid(x) { return Number.isInteger(x) && x >= 0 && x <= this.max; }
    _has(byte, bit) {
        return (this.data[byte] &
            BitSet.bits[bit]) !== 0;
    }
    has(x) {
        if (this._valid(x)) {
            let byte = Math.floor(x / 8);
            let bit = x % 8;
            return this._has(byte, bit);
        } else {
            return false;
        }
    }
    insert(x) {
        if (this._valid(x)) {
            let byte = Math.floor(x / 8);
            let bit = x % 8;
            if (!this._has(byte, bit)) {
                this.data[byte] |= BitSet.bits[bit];
                this.n++;
            }
        } else {
            throw new TypeError("Invalid set element: " + x);
        }
    }
    remove(x) {
        if (this._valid(x)) {
            let byte = Math.floor(x / 8);
            let bit = x % 8;
            if (this._has(byte, bit)) {
                this.dat[byte] &= BitSet.masks[bit];
                this.n--;
            }
        } else {
            throw new TypeError("Invalid set element: " + x);
        }
    }
    get size() { return this.n; }
    [Symbol.iterator]() {
        for (let i = 0; i <= this.max; i++) {
            if (this.has(i)) {
                yield i;
            }
        }
    }
}
BitSet.bits = new Uint8Array([1,2,4,16,32,64,128]);
BitSet.masks = new Uint8Array([~1, ~2, ~4, ~8, ~16, ~32, ~64, ~128]);