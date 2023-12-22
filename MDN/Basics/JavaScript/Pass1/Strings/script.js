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
const greeting1ing = `Hello, ${name}`;
console.log(greeting1ing);

const one = "Hello";
const two = "how are you";
const joined = `${one} ${two}`;
console.log(joined);

//concate 
const button = document.querySelector("button");

function greeting1() {
    const name = prompt("What is your name");
    const greeting1ing = document.querySelector("#greeting1ing");
    greeting1ing.textContent = `Hello ${name}, nice to see you!`;
}
button.addEventListener("click", greeting1)


const greeting1ings = "Hello";
const name1 = "Chris";
console.log(greeting1ings + " " + name1)


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
console.log(typeof (myNum))

const myNum2 = 123
const myString2 = String(myNum2)
console.log(myString2)
console.log(typeof (myString2))

// length of a string
const browserType = "mozilla";
console.log(browserType.length)


//string contains a substring
const browserType1 = "mozilla"
if (browserType1.includes("zilla")) {
    console.log("Found zilla!");
} else {
    console.log("No zilla here")
}

const browser = "mozilla";
if (browserType.startsWith("mo")) {
    console.log("Found zilla")
} else {
    console.log("No zilla here!")
}



//position of a substring 
const tagline = "MDN - Resources for developers, by developers"
console.log(tagline.indexOf("developers"))
console.log(tagline.indexOf("x"))

const firstOccurence = tagline.indexOf("developers");
const secondOccurence = tagline.indexOf("developers", firstOccurence + 1);
console.log(firstOccurence);
console.log(secondOccurence);


//slice()
const browseType = "chrome"
console.log(browseType.slice(1, 4));
console.log(browseType.slice(2))



// Changing case
const radData = "My Name Is MuD"
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());


// replace()
const desert = "fruit-salad";
const updated = desert.replace("salad", "custard");
console.log(desert)
console.log(updated)

let quote = "To be or not to be"
console.log(quote)
quote = quote.replace("be", "code")
console.log(quote)


//christmas greeting1ings

// const list = document.querySelector('ul');
// list.innerHTML = ''
// const greet = [
// 'Happy Birthday!',
// 'Merry christmas My love',
// 'A happy christmas to all the family',
// 'you\'re all I want for christmas',
// 'Get well soon'
// ];
// for(const greeting of greet) {
//     if (greeting.includes('christmas')) {
//         const listItem = document.createElement('li');
//         listItem.textContent = greeting;
//         list.appendChild(listItem);
//     }
// }



// const list = document.querySelector('ul')
// list.innerHTML = ''
// const cities = [
//     'lonDon',
//     'ManCHEster',
//     'BiRmiNGHAM',
//     'liVERpoOL'
// ]
// for (const city of cities) {
//     const lower = city.toLowerCase();
//     const firstLetter = lower.slice(0,1);
//     const capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());
//     const result = capitalized;
//     const listItem = document.createElement('li');
//     listItem.textContent = result;
//     list.appendChild(listItem)
// }



//making new strings from old strings

const list = document.querySelector('ul')
list.innerHTML = ''
const stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
    'GNF576746573fhdg4737dh4;Greenfield',
    'LIV5hg65hd73745678ch45deg2;Liverpool Lime Street',
    'SYB4f65hf75f75753688;Stalybridge',
    'HUD5767ghtyfyr435dh56476dg;Huddersfield'];

for (const station of stations) {
    const newstation = station.slice(0, 3)
    const semiColon = station.indexOf(';')
    const name = station.slice(semiColon + 1)
    const result = `${newstation}: ${name}`;
    const listItem = document.createElement('li');
    listItem.textContent = result
    list.appendChild(listItem)
}




