let sayHiMixin = {
    sayHi() {
        console.log(`Hello ${this.name}`);
    },
    sayBye() {
        console.log(`Bye ${this.name}`);
    }
};
class User {
    constructor(name) {
        this.name = name;
    }
}
Object.assign(User.prototype, sayHiMixin)
new User("buddy").sayHi()
new User("Dude").sayBye();


// let sayMixin = {
//     say(phrase) {
//         console.log(phrase)
//     }
// };
// let sayHiMixin = {
//     _proto_: sayMixin,
//     sayHi() {
//         super.say(`Hello ${this.name}`);
//     },
//     sayBye() {
//         super.say(`Bye ${this.name}`);
//     }
// };
// class User {
//     constructor(name) {
//         this.name = name;
//     }
// }
// Object.assign(User.prototype, sayHiMixin);


//EventMixins()
class Menu {
    choose(value) {
        this.trigger("select", value);
    }
}
Object.assign(Menu.prototype, eventMixin);
let menu = new Menu();
menu.on("select", value => console.log(`Value selected: ${value}`));



