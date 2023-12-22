const buttonA = document.getElementById("button_A");
const headingA = document.getElementById("heading_A");

buttonA.onclick = () => {
    const name = prompt("What is your name?");
    alert(`Hello ${name},nice to see you!`);
    headingA.textContent = `Welcome ${name}`;
}

//STRING
let dolphinGoodbye = "So long and thanks for all the fish"
console.log(dolphinGoodbye)

//BOOLEAN
let test = 6 < 3
console.log(test)
let iAmAlive = true
console.log(iAmAlive)


//ARRAYS
let myNameArray = ["chris", "Bob", "Jim"];
let myNumberArray = [10, 15, 30]
console.log(myNameArray)
console.log(myNumberArray)
console.log(myNameArray[1])

//Objects
let dog = { name: "spot", breed: "Dalmatian" };
console.log(dog)
console.log(dog.name)


//DYNAMICALLY TYPED
let myNumber = "500"
console.log(typeof myNumber)
let myNumber1 = 500
console.log(typeof myNumber1)


//CONSTANTS
const bird = { species: "Kestrel" };
console.log(bird.species)





/***************************ARRAYS*****************************/

//creating arrays
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping)
const sequence = [1, 1, 2, 3, 4, 5, 6, 13];
console.log(sequence)
const mix = ["tree", 795, [0, 1, 2]];
console.log(mix)

//modifying array items
const arrayEle = ["bread", "milk", "cheese", "hummus", "noodles"]
console.log(arrayEle)
arrayEle[0] = "tahini";
console.log(arrayEle)
console.log(arrayEle.indexOf("milk"))


const random = ["tree", 795, [0, 1, 8]];
console.log(random[2][2])

//adding items (push)

const cities = ["Manchester", "Liverpool"];
console.log(cities)
console.log(cities.length)
cities.push("Cardiff", "BradFord", "Brighton")
console.log(cities)
console.log(cities.length)


//removing items (pop)
const cities1 = ["Manchester", "Liverpool"];
const removed = cities1.pop();
console.log(cities1)
console.log(removed)


const citi = ["Manchester", "Liverpool", "Edinburg", "Carlisle"];
const index = cities.indexOf("Liverpool");
if (index !== -1) {
    citi.splice(index, 1)
}
console.log(citi)


//Access every item
//map()
function double(number) {
    return number * 2;
}
const numbers = [5,2,7,6];
const doubled = numbers.map(double)
console.log(doubled)

//filter()
function isLong(place) {
    return place.length > 8;
}
const places = ["London","Liverpool","Totnes","Edinburg"];
const longer = places.filter(isLong);
console.log(longer)



