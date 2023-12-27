const ages = { alice: 18, bob: 27 };
function hasPerson(name) {
    return name in ages;
}
function getAge(name) {
    return ages[name];
}
console.log(hasPerson("hasOwnProperty"));
console.log(getAge("toString"));


//assign()
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(target)
console.log(returnedTarget === target)


//create()
const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
};
const me = Object.create(person);
me.name = 'Mathew';
me.isHuman = true;
console.log(me.printIntroduction())

let student = {
    name: "Lisa",
    age: 24,
    marks: 78.9,
    display() {
        console.log("Name:", this.name);
    }
};

let std1 = Object.create(student);
std1.name = "Sheeran";
std1.display();


//defineProperties()
const object1 = {};
Object.defineProperties(object1, {
    property1: {
        value: 42,
        writable: true,
    },
    property2: {},
});
console.log(object1.property1)


//entries()
const object2 = {
    a: 'somestring',
    b: 42,
};
for (const [key, value] of Object.entries(object2)) {
    console.log(`${key}: ${value}`);
}

const obj = { foo: "bar", baz: 42 };
console.log(Object.entries(obj));

const arrayLike = { 0: "a", 1: "b", 2: "c" };
console.log(Object.entries(arrayLike));
const randomKeyOrder = { 100: "a", 2: "b", 7: "c" };
console.log(Object.entries(randomKeyOrder));
const myObj = Object.create(
    {},
    {
        getFoo: {
            value() {
                return this.foo;
            },
        },
    },
);
myObj.foo = "bar";
console.log(Object.entries(myObj))