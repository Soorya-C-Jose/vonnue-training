function btnClick() {
    const buttonElement = document.querySelector('.game-btn')
           buttonElement.classList.toggle('is-on')
    }

   
//method 2
const button = document.querySelectorAll('.btn')

button.forEach(buttons => {
    buttons.addEventListener('click', () => {
    buttons.classList.toggle('is-on')
    })
})

/******* ARRAYS AND LOOPS***********/

const nums = [10,10,30]
nums[2] = 99;
console.log(nums)
