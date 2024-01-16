class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(this.name)
    }
}
let user = new User("john");
user.sayHi()

class User1 {
    constructor(name) { this.name = name; }
    sayHi() {
        console.log(this.name)
    }
}
console.log(typeof User1)

class User2 {
    constructor(name) { this.name = name; }
    sayHi() { console.log(this.name); }
}

console.log(typeof User2)
console.log(User2 === User2.prototype.constructor)
console.log(User2.prototype.sayHi)
console.log(Object.getOwnPropertyNames(User2.prototype))


//class expression
let Users = class MyClass {
    sayHi() {
        console.log((MyClass));
    }
};
new Users().sayHi();
//   alert(MyClass);



function makeClass(phrase) {
    return class {
        sayHi() {
            console.log(phrase);
        };
    };
};
let User3 = makeClass("Hello");
new User3().sayHi()


//getters and setters
class User4 {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            console.log(("Name is too short."));
            return;
        }
        this._name = value;
    }

}

let use = new User4("John");
console.log((use.name));

use = new User4("");


//class fields
class person {
    name = "Roy";
    sayHi() {
        console.log(`Hello, ${this.name}!`);
    }
}
new person().sayHi()


//bound method with class fields
class Button {
    constructor(value) {
        this.value = value;
    }
    click = () => {
        console.log(this.value);
    }
}
let button = new Button("hello");
setTimeout(button.click, 1000)
