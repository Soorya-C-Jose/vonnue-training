// INTRO TO ARRAYS 

let mySkills = [
    "listening", // 0 indexed
    "speaking",  // 1 indexed
    "singing"  // 2 indexed
]

console.log(mySkills[0])
console.log(mySkills.length) // length is not zero indexed it counts the no.of lines normally

let myself = ["Per Harald Borgan", 32, true]

console.log(myself)

// ADDING OR REMOVING ITEMS FROM ARRAY

// PUSH
// let cards = [7,4]
// cards.push(6)
// console.log(cards)

// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]


//  let newMessage = "Same here"

//  messages.push(newMessage)
//  console.log(messages)

//  REMOVING AN ITEM FROM Array
//  messages.pop()
//  console.log(messages)


// COUNTING
for (let count = 1; count < 11; count += 1) {
    console.log(count)
}

for (let count = 10; count < 21; count += 1) {
    console.log(count)
}

//  For  LOOPS

for (let i = 10; i < 101; i += 10) {
    console.log(i)
}

// FOR LOOPS ON ARRAYS
// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
//     ] 

//     for (let i = 0; i < messages.length; i++){
//     console.log(messages[i])
// }

// let cards = [7, 3, 9]
// for(let i=0; i < cards.length; i++){
//     console.log(cards[i])
// }

// FOR LOOPS AND DOM

// let sentence = ["Hello ", "my ", "name ", "is ", "Per "]
// let greetingEl = document.getElementById("greeting-el")

// for (i = 0; i < sentence.length; i++){
//     greetingEl.textContent += sentence[i]
// } 

// RETURNING VALUES

let player1Time = 102
let player2Time = 107

function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}

let fastestRace = getFastestRaceTime()

console.log(fastestRace)

function totalRaceTime() {
    return player1Time + player2Time
}
let total = totalRaceTime()
console.log(total)



//  GENERATING RANDOM NUMBRES WITH Math.random() / Math.floor

let randomNumber = Math.random()
console.log(randomNumber)

let random = Math.random(4)
console.log(random)

let flooredNumber = Math.floor(5.999)
console.log(flooredNumber)

// LOGICAL OPERATORS

// LOGICAL AND(&&)

let hasCompletedCourse = true
let givesCertificate = true

if (hasCompletedCourse == true && givesCertificate == true) {
    generateCertificate()
}

function generateCertificate() {
    console.log("Generating certificate...")
}


let hasSolvedChallenge = false
let hasHintsLeft = false

if (hasSolvedChallenge == false && hasHintsLeft == false) {
    showSolution()
}

function showSolution() {
    console.log("Show the Solution")
}

// LOGICAL OR (||)

let likesDocumentaries = true
let likesStartups = true
if (likesDocumentaries == true || likesStartups == true) {
    recommendMovie()
}

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like")
}


// OBJECTS

let course = {
    title: "Learn CSS Grid for free",
    lessons: 16,
    creator: "Per Harald Borgan",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}
console.log("course")
console.log(course.title)






////////// PRACTICE ///////////////


let person = {
    name: "Per Harald",
    age: 34,
    country: "Norway"
}
function logData() {
    console.log(person.name + "is " + person.age + " years old and lives in " + person.country)
}
logData()



let age = 90
if (age < 15) {
    console.log("free")
} else if (age < 18) {
    console.log("child discount")
} else if (age < 27) {
    console.log("student discount")
} else if (age < 67) {
    console.log("full price")
} else {
    console.log("senior citizen discount")
}

//  LARGE COUNTRIES

console.log("The largest countries in the world")
let largeCountry = ["China", "India", "USA", "Indonesia", "Pakistan"]
for (let i = 0; i < largeCountry.length; i++) {
    console.log("-" + largeCountry[i])
}


let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]
largeCountries.pop()
largeCountries.push("pakistan")
console.log(largeCountries)
largeCountries.shift()
largeCountries.unshift("china")
console.log(largeCountries)


let dayOfMonth = 31
let weekday = "Friday"
if (dayOfMonth == 31 && weekday == "Friday") {
    console.log("😱")
}


let hands = ["rock", "paper", "scissor"]
function getHand() {
    let randomIndex = Math.floor(Math.random() * 3)
    return hands[randomIndex]
}
console.log(getHand())


let fruit = ["apple", "orange", "apple", "apple", "orange"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")
function sortFruit() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "apple") {
            appleShelf.textContent += "apple"
        } else if (fruit[i] === "orange") {
            orangeShelf.textContent += "orange"
        }
    }
}
sortFruit()



// TEMPLATE STRING / LITERALS
const recipient = "james"
const sender = "George"
// const email = "Hey" + recipient + "!How is it going? Cheers Per"
// const email = `Hey ${recipient} ! How is it going? Cheers Per`
const email = `Hey ${recipient} ! How is it going ? Cheers ${sender}`
console.log(email)



// LOCAL STORAGE
localStorage.setItem("myCountry", "India")
let country = localStorage.getItem("myCountry")
console.log(country)

localStorage.setItem("myName", "Per Harald Borgen")
let name = localStorage.getItem("myName")
console.log(name)

let myLeads = `{"name":"John", "birth":"1986-12-14", "city":"New York"}`
localStorage.setItem("myLeads", (myLeads))
let item = JSON.parse(localStorage.getItem("myLeads"));
console.log(item)


// ******************************************//
//Truthy and falsy statements

const credits = 10
if (credits > 0) {
    console.log("Let's play")
} else {
    console.log("Sorry, you have no credits")
}


// ***********************
// ANOTHER METHOD FOR INNERHTML
// 1. create element
// 2.set text content
// 3.append to ul
// const li =document.createElement("li")
// li.textContent = myLead[i]
// ulEl.append(li)



// *******************************
let welcomeEl = document.getElementById("welcome-el")
console.log(welcomeEl)

function greetUser(greeting, name) {
    welcomeEl.textContent = `${greeting} , ${name}`
}
greetUser("howdy", "Samuel")



function add(num1, num2) {
    return num1 + num2
}
console.log(add(3, 4))
console.log(add(2, 109))




//  ****** Arrays as Parameters *********
function getFirst(arr) {
    return arr[0]
}
let firstCard = getFirst([10, 11, 21])
console.log(firstCard)


//  *********** practice-chrome extension *****************
const player = "per"
const opponent = "Nick"
const game = "AmazingFighter"
let points = 0
let hasWon = false
points += 100
hasWon = true
if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!`)
} else {
    console.log(`the winner is ${opponent} ! ${player} lost the game`)
}


let myCourse = ["learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]
function logItems(arr) {
    for (let i = 0; i < Array.length; i++) {
        console.log(arr[i])
    }
}
logItems(myCourse)


//  let myCredits = localStorage.getItem (myCredits)
//  console.log(myCredits)



let data = [
    {
        player: "Jane",
        score: 52
    },
    {
        player: "Mark",
        score: 41
    }
]

const btnEl = document.getElementById("btn-el")
btnEl.addEventListener("click", function () {
    console.log(data[0])
})


function generateSentence(desc, arr) {
    let baseString = `The ${arr.length} ${desc} are `
    const lastIndex = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        if (i == lastIndex) {
            baseString += arr[i]
        } else {
            baseString += arr[i] + ", "
        }
    }
    return baseString
}
const sentence = generateSentence("highest mountains", ["Mount Everest", "k2"])
console.log(sentence)



const imgs = [
    "images1.jpg",
    "img2.webp",
    "img3.avif"
]
const container = document.getElementById("container")
function renderImages(){
    let imgsDOM = ""
    for (let i = 0; i < imgs.length; i++){
        imgsDOM+= `<img alt = "Employee in the company" class="team-img" src="${imgs[i]}">`
    }
    container.innerHTML = imgsDOM
}
renderImages()
