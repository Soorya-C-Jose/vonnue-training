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

if (hasSolvedChallenge == false && hasHintsLeft == false){
    showSolution()
}

function showSolution (){
console.log ("Show the Solution")
}

// LOGICAL OR (||)

let likesDocumentaries = true
let likesStartups = true
if (likesDocumentaries == true || likesStartups == true){
    recommendMovie()
}

function recommendMovie (){
    console.log("Hey, check out this new film we think you will like")
}


// OBJECTS

let course = {
    title : "Learn CSS Grid for free",
    lessons : 16,
    creator : "Per Harald Borgan",
    length : 63,
    level : 2,
    isFree : true,
    tags : ["html","css"]
}
console.log("course")
console.log (course.title)



