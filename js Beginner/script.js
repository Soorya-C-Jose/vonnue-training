/******************creating objects*****************/
const empty = {}
console.log(empty)

let book = {
    "mainTitle": "javascript",
    "subTitle": "the definitive guide",
    "for": "all audiences",
    "author": {
        firstname: "david",
        lastname: "flanagan"
    }
}
console.log(book)
delete book.subTitle
console.log(book)

let person = {
    "name": {
        "firstName": "David",
        "lastName": "Antony"
    },
    "age": "30",
    "place": "newyork"
}
console.log(person.name)


const o = new Object();
console.log(o)
const a = new Array();
console.log(a)
const d = new Date();
console.log(d)
const r = new RegExp("js");
console.log(r)


//  function inherit(p) {
//     if(p == null) throw TypeError();
//     if(Object.create) 
//     return Object.create(p);
// let t= typeof p;
// if (t !== "object" && t !== "function") throw TypeError();
// function f(){}
// f.prototype = p;
// return new f();
//  }

var o3 = Object.create(Object.prototype);
console.log(o3)


/***********querying and setting properties**********/


let authors = book.author;
const name = authors.surname;
const title = book["main title"]
console.log(authors)


function addStock(portfolio, stockname, shares) {
    addStock[stockname] = shares;
}

addStock()


function getValue(portfolio) {
    let total = 0.0;
    for (stock in portfolio) {
        let shares = portfolio[stock];
        let price = getquote(stock);
        total += shares * price;
    }
    return total;
}


/**************inheritence************/

// let ob = {}
// ob.x = 1;
// console.log(ob.x)
// let p = inherit(ob);
// p.y = 2;
// console.log(p.y)



/*****************testing properties****************/
let myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};
function checkObj(checkProp) {
    let result = myObj.hasOwnProperty(checkProp);
    if (result == true) {
        return myObj[checkProp];
    } else {
        return "Not Found";
    }
}
checkObj("gift");


/**************enumerating properties***********/

// for/in
const person1 = {
    fname: "John",
    lname: "Doe",
    age: 25
}
let text = '';
for (let x in person1) {
    text += person[x];
}


let obj1 = {
    x: 1,
    y: 2,
    z: 3
}
obj1.propertyIsEnumerable("toString")
for (let p in obj1) {
    console.log(p)
}


//getOwnPropertyNames

let count = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}
console.log(Object.getOwnPropertyNames(count));

//getOwnPropertySymbols
const obje1 = {};
const s = Symbol('s');
const u = Symbol.for('u')

obje1[s] = 'localSymbol';
obje1[u] = 'globalSymbol';
const objectSymbols = Object.getOwnPropertySymbols(obje1);
console.log(objectSymbols.length)

/*********getters and setters********/
let p = {
    x: 1.0,
    y: 1.0,
    get r() { return Math.sqrt(this.x * this.x + this.y * this.y); },
    set r(newvalue) {
        var oldvalue = Math.sqrt(this.x * this.x + this.y * this.y);
        var ratio = newvalue / oldvalue;
        this.x *= ratio;
        this.y *= ratio;
    },
    get theta() { return Math.atan2(this.y, this.x); }
}


//Reflect.ownKeys()

const object3 = {
    property1: 42,
    property2: 13
};
const array1 = []
console.log(Reflect.ownKeys(object3))
console.log(Reflect.ownKeys(array1))

//this keyword
const test = {
    prop: 42,
    func: function () {
        return this.prop;
    },
};
console.log(test.func());




/*************Extending objects**************/
// let target = {x: 1}
// source = {y: 2, z:3};
// for(let key of Object.keys(source)) {
//     target[key] = source[key]
// }
// console.log(target)

//object.assign 

const targets = { a: 1, b: 2 };
const sources = { b: 4, c: 5 };
const returnedTarget = Object.assign(targets, sources);
console.log(targets);
console.log(returnedTarget === targets);

// function merge(target, ... sources) {
//     for(let source of sources) {
//       for(let key of Object.keys(source)) {
//         if (!(key in target)) {
//             target[key] = source[key]
//         }
//       }
//     }
//     return target;
// }
// Object.assign({x: 1}, {x: 2, y: 2}, {y: 3, z: 4})
// merge({x: 1}, {x: 2, y:2}, {y:3, z:4});


/*********Serializing Objects********/
let object4 = { x: 1, y: { z: [false, null, ""] } };
let st = JSON.stringify(object4);
let par = JSON.parse(st);

console.log(st)
console.log(par)


//JSON.parse() 
const json = '{"result":true, "count": 42}';
const obj = JSON.parse(json);
console.log(obj.count);
console.log(obj.result);
console.log(obj)


//JSON stringify
console.log(JSON.stringify({ x: 5, y: 6 }));
console.log(
    JSON.stringify([new Number(3), new String('false'), new Boolean(false)]),);
console.log(JSON.stringify({ x: [10, undefined, function () { }, Symbol(' ')] }));
console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));


/*************OBJECT METHODS***************/

/*******toString()***/
let point = {
    x: 1,
    y: 2,
    toString: function () { return `(${this.x}), ${this.y})`; }
};
console.log(point)



function Dog(name) {
    this.name = name;
}
const dog1 = new Dog('Gabby')
Dog.prototype.toString = function dogToString() {
    return `${this.name}`;
};
console.log(dog1.toString());


/*******toLocalString()******/
let points = {
    x: 1000,
    y: 2000,
    toString: function () {
        return `(${this.x}, ${this.y})`;
    },
    toLocalString: function () {
        return `(${this.x.toLocaleString()},
        ${this.y.toLocaleString()})`;
    }
};
points.toString()
points.toLocalString()
console.log(points)



let score = {
    n: 100,
    m: 150,
    toString: function () {
        return `(${this.n}, ${this.m})`;
    },
    toLocalString: function () {
        return `(${this.n.toLocaleString()},
        ${this.m.toLocaleString()})`;
    }
};
score.toString();
score.toLocalString();


/************valueOf()***********/

const numObj = new Number(42);
console.log(typeof numObj);
const num = numObj.valueOf();
console.log(num);
console.log(typeof num);

let pointss = {
    x: 3,
    y: 4,
    valueOf: function () {
        return Math.hypot(this.x, this.y);
    }
};
Number(pointss)
pointss > 4
pointss > 5
pointss < 6
console.log(pointss)


/*******toJSON()*******/
let poins = {
    x: 1,
    y: 2,
    toString: function () {
        return `(${this.x}, ${this.y})`;
    },
    toJSON: function () { return this.toString(); }
};
JSON.stringify[poins]


/***************EXTENDED OBJECT LITERAL***************/

//Shorthand properties
// let x = 1, y = 2;
// let q = {
//     x: x,
//     y: y
// };
// console.log(q)

let x = 1, y = 2;
let q = { x, y};
q.x + q.y
console.log(q)


// computed property names
// const PROPERTY_NAME = "p1";
// function computePropertyName () {
//     return "p" + 2;
// }

// let compute = {};
// compute[PROPERTY_NAME] = 1;
// compute[computePropertyName] = 2;
// console.log(compute[PROPERTY_NAME])
// console.log(compute[computePropertyName])

const PROPERTY_NAME = "p1";
function computePropertyName(){return "p" + 2;}
let pro = {
    [PROPERTY_NAME]: 1,
    [computePropertyName()]: 2
};
p.p1 + p.p2
console.log(pro)


// symbols as property names

const extension = Symbol("my extension symbol");
let obj2 = {
    [extension]: { }
};
obj2[extension].x = 0;
console.log(obj2)

const sym = Symbol("foo")
console.log(typeof sym)
const symObj = Object(sym);
console.log(typeof symObj)


//spread operator
let position = { x: 0, y: 0};
let dimensions = { width: 100, height: 75};
let rect = {...position, ...dimensions };
rect.x + rect.y + rect.width + rect.height
console.log(rect.x)
console.log(rect.x + rect.y + rect.height)

let obje4 = { x:1};
let p1 = { x: 0, ...0};
p.x
let q1 ={...0, x:2};
q1.x
console.log(q1.x)

//Shorthand methods

let square = {
    area: function () { return this.side * this.side;},
    side: 10
};
square.area()
console.log(square.area())

//here is a shortcut where the function keyword and the colon are omitted
//but we got the same result

let square2 = {
    area() { return this.side * this.side},
    side: 10
};
square2.area()
console.log(square2.area())


//property getters and setters
let p2 = {
    x: 1.0,
    y: 1.0,
    get r(){
        return Math.hypot(this.x, this.y);
    },
    set r(newValue) {
        let oldvalue = Math.hypot(this.x, this.y);
        let ratio = newValue/oldvalue;
        this.x *=ratio;
        this.y *=ratio;
    },
    get theta() { return Math.atan2(this.y,this.x);}
};
p.r
p.theta
console.log(p.r)
console.log(theta())

//get method implements a property
const random = {
    get octet() { return Math.floor(Math.random()*256);},
    get uint16() { return Math.floor(Math.random()*65536);},
    get int16() { returnMath.floor(Math.random()*65536)-32768;}
};