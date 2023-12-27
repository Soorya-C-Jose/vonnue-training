const ages = {alice : 18, bob: 27};
function hasPerson (name) {
    return name in ages;
}
function getAge(name) {
    return ages[name];
}
console.log(hasPerson("hasOwnProperty"));
console.log(getAge("toString"));


//assign()
const target = { a:1, b:2};
const source = { b:4, c:5};
const returnedTarget = Object.assign(target, source);
console.log(target)
console.log(returnedTarget === target)


//create()
const person = {
    isHuman: false,
    printIntroduction: function() {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
};
const me = Object.create(person);
me.name = 'Mathew';
me.isHuman = true;
console.log(me.printIntroduction())

function fruits() {
    this.name = 'fruit 1';
}
function apple() {
    fruits.call(this);
}

apple.prototype = Object.create(fruits.prototype)
const app = new apple();
console.log(app.name)