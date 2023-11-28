if (35 < 5) {
    console.log(true)
} else {
    console.log(false)
}

if (16 >= 18) {
    console.log('You can drive')
} else {
    console.log("you can't  drive")
}

const btns=document.querySelectorAll('button')

btns.forEach(btn =>{
    btn.addEventListener('click',getRandom)
})

const gameArr = ['Rock', 'paper', 'scissor']

function getRandom(e) {
    let data = e.target.innerHTML
   // alert(data)
    
    let randomNumber = Math.floor(Math.random() * 3)
   // console.log(randomNumber)

    const randomInput=gameArr[randomNumber]
       if (randomInput === 'rock') {
        alert("You lose");
    } else if (randomInput === 'paper') {
        alert("You win.");
    } else if (randomInput === 'scissor') {
        alert("Tie");
    }

    // if(data === 'paper' &&  randomInput==='rock'){
    //     alert("You Won!")
    // }else if (data == 'rock' && randomInput == 'scissor'){
    //     alert("You Won !");
    // }else if (data == 'scissor' && randomInput == 'rock'){
    //     alert('Computer Won !')
    // }else if (data === randomInput){
    //     alert("YOu Picked Rock, And Computer Picked Rock, Tie!")
    // }
}
    
//   const randomNumber = Math.random();
//     const computerMove = '';

//     if (randomNumber >= 0 && randomNumber <= 1 / 3) {
//         console.log('rock');
//     } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
//         console.log('paper');
//     } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
//         console.log('scissors')
//     }

    // console.log(computerMove);
// }

// if (computerMove === 'rock') {
//     result = 'Tie';
// } else if (computerMove === 'paper') {
//     result = 'You Lose';
// } else if (computerMove === 'scissors') {
//     result = 'You win';
// }

// alert(`you picked rock. computer picked  ${computerMove}. ${result}`);


