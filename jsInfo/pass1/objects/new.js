/*************constructor functions**************/
function User(name) {
    this.name = name;
    this.isAdmin = true;
}
let user = new User("Jack");
console.log(user.name)
console.log(user.isAdmin)



/*****************new.target()*****************/

// function User() {
//     console.log(new.target);
// }
// User()
// new User()


/***************Return from constructors****************/

function BigUser() {
    this.name = "john";
    return {
        name: 'Godzilla'
    };
}
console.log(new BigUser().name)


/*********************Methods in constructor*********************/

function SmallUser(name) {
    this.name = name;
    this.sayHi = function () {
        console.log("My name is: " + this.name)
    }
}

let john = new SmallUser("john");
john.sayHi()




/****************Optional chaining****************/

let userAdmin = {
    admin() {
        console.log("I am admin");
    }
};
let userGuest = {};



/*******************Symbols******************/

let id1 = Symbol("id");
let id2 = Symbol("id")
console.log(id1 == id2)


/**********Symbols in for..in loop*********/

// let id = Symbol("id");
// let user1 = {
//     name: "john",
//     age : 30,
//     [id] : 123
// };
// for(let key in user1)
// console.log(key)
// console.log("Direct:" + user[id])

let id = Symbol("id");
let user2 = {
    [id]: 123
};
let clone = Object.assign({}, user2)
console.log(clone[id]);


/**********global symbols************/

let ids = Symbol.for("id");
let idsAgain = Symbol.for("id")
console.log(ids === idsAgain)


/***************Symbol.keyFor()****************/

let sym = Symbol.for("name");
let sym2 = Symbol.for("id");
console.log(Symbol.keyFor(sym))
console.log(Symbol.keyFor(sym2))
console.log(Symbol.for("name"))


/**************Type conversions**************/
// let user3 = {
//     name: "john",
//     money: 1000,
//     [Symbol.toPrimitive](hint) {
//         console.log(`hint: ${hint}`);
//         return hint == "string" ? `{name: "${this.name}"}` : this.money;
//     }
// };

// console.log(user);
// console.log(+user);
// console.log(user + 500)


let user3 = {
    name: "john",
    money: 1000,
    toString() {
        return `{name: "${this.name}"}`;
    },
    valueOf() {
        return this.money;
    }
};
console.log(user3)
console.log(+user3)
console.log(user3 + 500)
