let message = "Hello";
let phrase = message;
console.log(phrase)

let user = {
    name: "John"
};
let admin = user;
admin.name = "Pete";
console.log(user.name)


//comparison by reference
let a = {};
let b = a;
console.log(a == b)

let c = {};
let d = {};
console.log(c === d)


//cloning an object
let user1 = {
    name: "Martin",
    age: 28,
};
let clone = {};
for (let key in user1) {
    clone[key] = user[key];
}
clone.name = "Pete"
console.log(user1.name)

//Object.assign()
let garden = {
    plant: "rose"
}
let question1 = {
    isColor: true
}
let question2 = {
    haveLeaves: true
}
Object.assign(garden, question1, question2);
console.log(garden.plant)
console.log(garden.isColor)
console.log(garden.haveLeaves)


/***********************Garbage Collection***************************/


//Reachability
function marry(man, women) {
    women.husband = man;
    man.wife = women

    return {
        father: man,
        mother: women
    }
}
let family = marry({
    name: "Luca"
},
    {
        name: "Ann"
    })
console.log(family)



