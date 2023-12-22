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
let myNameArray = ["chris","Bob","Jim"];
let myNumberArray = [10,15,30]
console.log(myNameArray)
console.log(myNumberArray)
console.log(myNameArray[1])

//Objects
let dog = { name: "spot", breed: "Dalmatian"};
console.log(dog)
console.log(dog.name)


//DYNAMICALLY TYPED
let myNumber = "500"
console.log(typeof myNumber)
let myNumber1 = 500
console.log(typeof myNumber1)


//CONSTANTS
const bird = {species: "Kestrel"};
console.log(bird.species)