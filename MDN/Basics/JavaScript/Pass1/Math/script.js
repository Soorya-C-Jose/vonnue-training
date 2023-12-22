const myInt = 5;
const myFloat = 6.67;
console.log(myInt)
console.log(myFloat)
console.log(typeof myInt)
console.log(typeof myFloat)


const lotsOfDecimal = 1.766584958675746364;
console.log(lotsOfDecimal)
const twoDecimalPlaces = lotsOfDecimal.toFixed(2)
console.log(twoDecimalPlaces)
const threeDecimalPlaces = lotsOfDecimal.toFixed(3)
console.log(threeDecimalPlaces)


let myNumber = "74"
//(myNumber += 3 === 743 that was wrong .instead of this we do the below method )
myNumber = Number(myNumber) + 3
console.log(typeof Number(myNumber))
console.log(myNumber)


//BASIC MATH
const num1 = 10;
const num2 = 50;
console.log( 9 * num1)
console.log(num1 ** 3);
console.log(num2 / num1)
console.log(num1 + num2 / 8 + 2)

//assignment operator
let x = 3;
let y = 4;
console.log(x = y)

let x1 = 3
let y1 = 4;
console.log(x1 *= y1)

let x2 = 50; 
let y2 = 50;
x2 = 50;
y2 = 50;

//comparison operator
console.log(5 === 2+4)
console.log(5 !== 2 + 3)
console.log(10 < 15)
console.log(10 > 20)
console.log(3 <= 2)
console.log(5 >= 4)








const btn = document.querySelector("button");
const txt = document.querySelector("p")

btn.addEventListener("click",updateBtn) 

function updateBtn() {
    if (btn.textContent === "start machine") {
        btn.textContent = "Stop machine"
        txt.textContent = "The machine was started"
    } else {
        btn.textContent = "start machine";
        txt.textContent = "The machine was stopped"
    }
}
        