const person = {
    firstName: "Julie",
    lastName: "Doe",
    age: 50,
    eyecolor: "Blue"
}
person.firstName = "Ms.julie"
delete person.age
console.log(person)
console.log(person.firstName)
console.log(person.eyecolor)
console.log("eyecolor" in person)

//OBJECT LITERALS

let empty = {}
console.log(empty)
let points = { x: 0, y: 0 };
console.log(points)
let p2 = { x: points.x, y: points.y + 1 };
console.log(p2)
let book = {
    "main title": "Javascrit",
    "sub-title": "the definitive guide",
    for: "all audiences",
    author: {
        firstName: "David",
        surName: "Flanagan"
    }
}
console.log(book)
console.log(book.author)

//creating objects with new

let o = new Object()
console.log(o)
let a = new Array()
console.log(a)
let d = new Date()
console.log(d)
let r = new Map();
console.log(r)


//PROTOTYPE

const myObj = {
    city: "Madrid",
    greet() {
        console.log(`Greeting from ${this.city}`);
    },
};
console.log(myObj.greet());

//OBJECT CREATE()

function fruits () {
    this.name = 'fruit 1';
}
function apple() {
    fruits.call(this);
}
apple.prototype = Object.create(fruits.prototype);
const app = new apple();
console.log(app.name);


//INHERITENCE

let ob ={};
ob.x = 1;
console.log(ob)
let p = Object.create(ob)
p.y = 2;
console.log(p)
let q = Object.create(p);
q.z = 3;
console.log(q)
let f = q.toString();
q.x + q.y
console.log(f)

//DELETING OBJECT PROPERTIES

const Employee = {
    firstName: 'Maria',
    lastName: 'Sanchez',
};
console.log(Employee.firstName);
delete (Employee.firstName)
console.log(Employee.firstName)

//TESTING PROPERTIES

//in operator

const car = {
    make: 'Honda',
    model: 'Accord',
    year: 1998
}
console.log('make' in car)
delete car.make ;
if('make' in car === false) {

    car.make = 'suzuki';
}
console.log(car.make)


//hasOwnProperty()

const object = {};
object.property1 = 42;
console.log(object.hasOwnProperty('property1'))
console.log(object.hasOwnProperty('toString'))
console.log(object.hasOwnProperty('hasOwnProperty'));

//propertyIsEnumerable()

const object1 = {};
const array1 = [];
object1.property1 = 42;
array1[0] = 42
console.log(object1.propertyIsEnumerable('property1'));
console.log(array1.propertyIsEnumerable(0));
console.log(array1.propertyIsEnumerable('length'))

//ENUMERATING PROPERTIES

//for/in loop

let object2 = {x: 1, y: 2, z: 3};
console.log(object2.propertyIsEnumerable("toString"))
for(let p in object2) {
console.log(p)
}

//EXTENDING OBJECTS

let target = {x: 1}, source = {y: 2, z: 3};
for(let key of Object.keys(source)) {
    target[key] = source[key];
}
console.log(target)

//object.keys()

const data = {
    a: 'something',
    b: 42,
    c: false,
};
console.log(Object.keys(data))

//object.assign()

const targets = { a: 1, b: 2};
const sources = { b: 4, c: 5};
const returnedTarget = Object.assign(targets, sources);
console.log(targets);
console.log(returnedTarget === targets)


function merge (targe, ...sourc) {
    for(let source of sourc) {
        for(let key of Object.keys(source)) {
            if(!(key in target)) {
                targe[key] = source[key];
            }
        }
    }
    return targe
}
console.log(Object.assign({x: 1}, {x: 2, y: 2}, {y: 3, z: 4}))
console.log(merge({x: 1},{x: 2, y: 2},{y: 3, z: 4}));


//SERIALIZING OBJECTS

let obj = {x: 1, y: {z: [false, null, ""]}};
let s = JSON.stringify(obj)
console.log(s)
let p1 = JSON.parse(s)
console.log(p1)


//OBJECT METHODS

//toString()
let score = {
    x: 1,
    y: 2,
    toString: function() { return `(${this.x}, ${this.y})`}
};
console.log(String(score))


//toLocalString()

let point = {
    x: 1000,
    y: 2000,
    toString: function() { return `(${this.x}, ${this.y})`;},
    toLocalString: function() {
        return `(${this.x.toLocaleString()},
        ${this.y.toLocaleString()})`;
    }
};
console.log(point.toString())
console.log(point.toLocalString())


//valueOf()

let point1 = {
    x: 3,
    y: 4,
    valueOf: function() { return Math.hypot(this.x, this.y);
    }
};
console.log(Number(point1))
console.log(point1 > 4)
console.log(point1 > 5)
console.log(point1 < 6)


//EXTENDED OBJECT LITERAL SYNTAX

//shorthand properties

let x = 1, y = 2;
let obj1 = {
    x: x ,
    y: y
}
console.log(obj1)

//computed property names

const PROPERTY_NAME = "p1";
function computePropertyName() { return "p" + 2};
let pp =  {
    [PROPERTY_NAME]: 1,
    [computePropertyName()]: 2
};
console.log(pp.p1 + pp.p2);


//spread operator

function sum(x,y,z) {
    return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers))
console.log(sum.apply(null, numbers));

let oo = {x: 1};
let p3 = { x: 0, ...0};
console.log(p3.x)
let q1 = {...oo, x: 2};
console.log(q1.x)

//shorthand methods

let square = {
    area: function() {return this.side * this.side;},
    side: 10
}
console.log(square.area())


const METHOD_NAME = "m";
const symbol = Symbol();
let  weirdMethods = {
    "method with Spaces"(x) { return x + 1;},
    [METHOD_NAME](x) { return x + 2;},
    [symbol](x) { return x + 3;}
};
// console.log(weirdMethods["method With Spaces"](1))
// console.log(weirdMethods[METHOD_NAME](1))

//property getters and setters

let p4 = {
    x: 1.0,
    y: 1.0,
    get r() { return Math.hypot(this.x, this.y);},
    set r(newValue) {
        let oldValue = Math.hypot(this.x, this.y);
        let ratio = newValue/oldValue;
        this.x *= ratio;
        this.y *= ratio;
    },
    get theta() { return Math.atan2(this.y, this.x);}
};
console.log(p.r)
console.log(p4.theta)
