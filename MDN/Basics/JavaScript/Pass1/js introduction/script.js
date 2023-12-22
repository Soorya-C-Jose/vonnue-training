// const button = document.querySelector("button");

// button.addEventListener("click",updateName)

// function updateName() {
//     const name = prompt ("Enter a new name");
//     button.textContent = `Player1: ${name}`
// }


document.addEventListener("DOMContentLoaded", () => {
    function createParagraph() {
        const para = document.createElement("p");
      //  para.textContent = "You clicked the button";
        document.body.appendChild(para);
    }

    const buttons = document.querySelectorAll("button");
    for (const button of buttons) {
        button.addEventListener("click", createParagraph)
    }
})


// LOOPS


// for...of loop

const fruits = ["apples","bananas","cherries"];
for (const fruit of fruits) {
    console.log(fruit)
}


//strings 
const string = "The revolution will not be televised.";
console.log(string)

const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;
console.log(single)
console.log(double)
console.log(backtick)


//embedding javascript
const name = "Chris"
const greeting = `Hello, ${name}`;
console.log(greeting);

const one = "Hello";
const two = "how are you";
const joined = `${one} ${two}`;
console.log(joined);

//concate 
const button = document.querySelector("button");

function greet() {
    const name = prompt("What is your name");
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Hello ${name}, nice to see you!`;
}
button.addEventListener("click",greet)


const greetings = "Hello";
const name1 = "Chris";
console.log(greetings + " " + name1)


const song = "Fight the youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${(score / highestScore) * 100}%`;
console.log(output);


const name2 = "Front";
const number = 242;
console.log(name2 + number);


// Multiple strings

const newline = `One day you finally knew 
what you had to do, and began,`;
console.log(newline)


//quotes in strings
const goodQuotes1 = 'she said "T think so!"';
console.log(goodQuotes1)
const goodQuotes2 = `she said "I' m not going there!`;
console.log(goodQuotes2)


// Number vs. Strings
const myString = "123";
const myNum = Number(myString);
console.log(myNum)
console.log(typeof(myNum))

const myNum2 = 123
const myString2 = String(myNum2)
console.log(myString2)
console.log(typeof(myString2))
