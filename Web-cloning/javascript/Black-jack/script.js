//  let firstCard = 15
// let secondCard = 6
// let cards = [firstCard + secondCard]
//  let sum = firstCard + secondCard

// console.log(sum)


// let isAlive = true

//  if (sum <= 20) {
//      console.log("Do you want to draw a new card? 🙂")
//  } else if(sum === 21){
//      console.log("Wohooo! You've got Blackjack! 🥳")
//  } else {
//      console.log("You are out of the game!😭 ")
//      isAlive = false
//  }

//  console.log (isAlive)

// DECLARE A MESSAGE

// let message = ""


// let messageEl = document.getElementById("message-el")
// console.log(messageEl)

//  let sumEl = document.getElementById("sum-el")
// // console.log(sumEl)

// // let cardsEl = document.getElementById("cards-el")
// // console.log(cardsEl)

// // A FUNCTION CALLS ANOTHER FUNCTION (WE RENAME THE ALL STARTGAME() WITH THW NAME RENDERGAME ie, Line 39 and 61)
// // function startGame() {
// //     renderGame()
// // }

// function renderGame() {

//     sumEl.textContent = "sum:" + sum
//     // render out firstCard and secondCard
//     cardsEl.textContent = "cards:" + firstCard + " " + secondCard
//     //  by using function (declaration in line 3)
//     cardsEl.textContent = "cards:" + cards[0] + " " + cards[1]
//     // render out all cards we have
//     sumEl.textContent = "sum:" + sum
//     if (sum <= 20) {
//         message = "Do you want to draw a new card"
//     } else if (sum === 21) {
//         message = "Wohoo! You've got Blackjack"
//     } else {
//         message = "You're out of the game"
//     }

//     console.log (message)
//     messageEl.textContent = message
// }

// function newCard() {
//     console.log("Drawing a new card  from the deck!")
// }

//  let card = 7
// sum += card
// renderGame()





// PUSH NEW CARD TO ARRAY

let player = {
    name : "Per",
    chips : 145
}
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// let playerName = "Harald"
// let playerChips = 200

// let playerEl = document.getElementById("player-el")
// playerEl.textContent = playerName + ": $" + playerChips

// let player = {
//  name : "Harald",
//  chips : 200
// }

// let playerEl = document.getElementById("player-el")
// playerEl . textContent = player.name + ": $ " + player.chips

let playerEl = document.getElementById("player-el")
playerEl .textContent = player.name + ": $ " + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1 //(we heve 13 cards thats why we multiply the value by 13 . and the reason why adding the 1 because normally it will start from 0 andd we want it form 1 thats why we add a 1)

    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "cards:" + card[0] + " " + cards[1]
    sumEl.textContent = "sum:" + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack"
        hasBlackJack = true
    } else {
        message = "You are out o fthe game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
}

// RANDOM NUMBERS
let randomNumber = Math.floor(Math.random() * 6) + 1
console.log(randomNumber)

function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1
    return randomNumber
}

// ONLLUY TRIGGER NEWCARD() IF YOU'RE ALLOWED TO

function newCard (){
    if (isAlive == true && hasBlackJack == false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}










