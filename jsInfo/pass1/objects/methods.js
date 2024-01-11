// let user = {
//     name : "John",
//     age : 30
// };
// user.sayHi = function() {
//     console.log(("Hello!"));
// };
// user.sayHi()


// user = {
//     sayHi : function() {
//         console.log("hello");
//     }
// };

// user = {
//     sayHi() {
//         console.log("Hello")
//     }
// };
// user.sayHi()


/*******this()********/

let user = {
    name : "John",
    age : 30
};
user.sayHi = function() {
    console.log((this.name));
};
user.sayHi()

let user1= {
    name : "Luca",
    age : 28,
    sayHi() {
        console.log(this.name);
    }
};
let admin = user1;
user1 = null;
admin.sayHi()


/*******Arrow function this()******/
let user2 = {
    firstName : "Ilya",
    sayHi() {
        let arrow = () => console.log(this.firstName);
        arrow();
    }
};
user2.sayHi()
