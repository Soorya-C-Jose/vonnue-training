//instanceOf
class Rabbit { }
let rabbit = new Rabbit()
console.log(rabbit instanceof Rabbit)

function Elephent() { }
console.log(new Elephent() instanceof Elephent)

class Animal {
    static [Symbol.hasInstance](obj) {
        if (obj.canEat) return true;
    }
}
let obj = { canEat: true };
console.log(obj instanceof Animal)

function Dog() { }
let dog = new Dog();
Dog.prototype = {};
console.log(dog instanceof Dog)

//Bonus
let objectToString = Object.prototype.toString;
let arr = [];
console.log(objectToString.call(arr))


//Symbol.toStringTag()
let user = {
    [Symbol.toStringTag]: "User"
};
console.log({}.toString.call(user))

console.log(global[Symbol.toStringTag])
console.log({}.toString.call(global));

