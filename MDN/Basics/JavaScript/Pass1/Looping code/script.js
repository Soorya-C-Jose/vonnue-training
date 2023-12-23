// const btn = document.querySelector("button");
// const canvas = document.querySelector("canvas");
// const ctx = canvas.getContext("2d");

// document.addEventListener("DOMContentLoaded", () => {
//   canvas.width = document.documentElement.clientWidth;
//   canvas.height = document.documentElement.clientHeight;
// });

// function random(number) {
//   return Math.floor(Math.random() * number);
// }

// function draw() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   for (let i = 0; i < 100; i++) {
//     ctx.beginPath();
//     ctx.fillStyle = "rgb(255 0 0 / 50%)";
//     ctx.arc(
//       random(canvas.width),
//       random(canvas.height),
//       random(50),
//       0,
//       2 * Math.PI,
//     );
//     ctx.fill();
//   }
// }
// btn.addEventListener("click",draw)



//for..of loop

const cats = ["Leopard", "serval", "jaguar", "Tiger", "Caracal", "Lion"];
for (const cat of cats) {
    console.log(cat)
}

//map
function toUpper(string) {
    return string.toUpperCase();
}
const specieses = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
const upperCats = specieses.map(toUpper);
console.log(upperCats)


//filter

function lcat(cat) {
    return cat.startsWith("L")
}

const catSpecies = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"]
const filtered = catSpecies.filter(lcat);
console.log(filtered)


//the standard loop
//Calculating squares
// const results = document.querySelector('#results');

// function calculate() {
//     for (let i = 1; i <= 10; i++) {
//         const newResult = `${i} * ${i} = ${i * i}`;
//         results.textContent += newResult + "\n"
//     }
//     results.textContent += "\nFinished!";
// }
// const calculateBtn = document.querySelector("#calculate");
// const clearBtn = document.querySelector('#clear');

// calculateBtn.addEventListener("click", calculate);
// clearBtn.addEventListener("click", () => (results.textContent = ""));


//break

// const contacts = [
//     "Chris:2232322",
//     "Sarah:3453456",
//     "Bill:7654322",
//     "Mary:9998769",
//     "Dianne:9384975",
//   ];
//   const para = document.querySelector("p");
//   const input = document.querySelector("input");
//   const btn = document.querySelector("button");
  
//   btn.addEventListener("click", () => {
//     const searchName = input.value.toLowerCase();
//     input.value = "";
//     input.focus();
//     para.textContent = "";
//     for (const contact of contacts) {
//       const splitContact = contact.split(":");
//       if (splitContact[0].toLowerCase() === searchName) {
//         para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
//         break;
//       }
//     }
//     if (para.textContent === "") {
//       para.textContent = "Contact not found.";
//     }
//   });


  //continue
// const paragra = document.querySelector("p");
const paragra = document.querySelector("p");
const inputs = document.querySelector("input");
const btns = document.querySelector("button");

btns.addEventListener("click", () => {
    alert("hello")
    paragra.textContent = "Output:";
    const num = inputs.value;
    inputs.value = "";
    inputs.focus();
    for(let i = 1; 1 <= num; i++) {
        let sqRoot = Math.sqrt(i);
        if (Math.floor(sqRoot) !== sqRoot) {
            continue;
        }
        paragra.textContent += `${i}`;
    }
});



//While loop
const myCats = ["pete","Biggles","jasmine"];
let myFavoriteCats = "My cats are called";
let i = 0;
while (i < myCats.length) {
    if(i === myCats.length - 1) {
        myFavoriteCats += `and ${myCats[i]}.`;
    } else {
        myFavoriteCats += `${cats[i]}, `;
    }
    i++;
}

console.log(myFavoriteCats);

//do-while loop
const myCat = ["pete","Biggles","Jasmine"];
let myFavoriteCat = "My cats are called";
let j = 0;
do {
    if ( j === myCat.length - 1) {
        myFavoriteCat += `and ${myCat[i]}.`;
    } else {
        myFavoriteCat += `${myCat[i]}.`;
    }
    j++;
} while ( i < myCats.length);
console.log(myFavoriteCat)
