/******CLASSES AND PROTOTYPES*******/

//simple javascript class

function range (from , to) {
    let r = Object.create(range.methods) // creating a new object using an existing object
    r.from = from;
    r.to = to;
    return r;
}
range.methods = {
    includes(x) { return this.from <= x && x <= this.to},
    [Symbol.iterator]() {
        for(let x = Math.ceil(this.from); x <= this.to; x++) yield ;
    },
    toString() { return "(" + this.from + "..." + this.to + ")";}
};
let r = range(1,3);
console.log(r.includes(2))
console.log(r.toString())
// console.log([...r])


//CLASSES AND CONSTRUCTORS

function Pen(name,color,price) {
    this.name = name;
    this.color = color;
    this.price = price;
}
const pen1 = new Pen("marker","blue","$3")
console.log(pen1)


function Person () {
    this.name = "John",
    this.age = 23
}
const person1 = new Person()
console.log(person1)

//range class using consructors
function Range1 (from, to) {
    this.from = from;
    this.to = to;
} 
Range1.prototype = {
    includes: function(x) { return this.from <= x && x <= this.to;},
    [Symbol.iterator]: function*() {
        for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    },
    toString: function() { return "(" + this.from + "..." + this.to + ")";}
};
let r1 = new Range(1,3)
console.log(r.includes(2))
console.log(r.toString())
// console.log([...r])



//yield operator
function* foo(index) {
    while(index < 2) {
        yield index;
        index ++;
    }
}
const iterator = foo(0);
console.log(iterator.next().value);
console.log(iterator.next().value);

//instanceof

function Car(make,model,year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
const auto = new Car('Honda','Accord', '1998');
console.log(auto instanceof Car);
console.log(auto instanceof Object)