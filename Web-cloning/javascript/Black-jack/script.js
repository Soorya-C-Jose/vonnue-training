 let firstCard = 15
let secondCard = 15

let sum = firstCard + secondCard

console.log(sum)
 

let isAlive = true

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

let message = ""



function startGame(){
    if (sum <= 20){
        message = "Do you want to draw a new card"
    }else if (sum ===21){
        message = "Wohoo! You've got Blackjack"
    }else{
        message = "You're out of the game"
    }
    
    console.log (message)
}