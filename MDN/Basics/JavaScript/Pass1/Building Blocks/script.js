//if - else condition
let shoppingDone = false;
let childAllowance;

if (shoppingDone === true) {
    childAllowance = 10;
} else {
    childAllowance = 5;
}
console.log(childAllowance)


// const select  = document.querySelector("select");
// const para = document.querySelector("p");

// select.addEventListener("change",setWeather)

// function setWeather() {
//     const choice = select.value;
//     if(choice === "sunny") {
//         para.textContent = "It is a nice and sunny outside today.Wear shorts!Go to the beach, or the park, and get an ice cream."
//     } else if (choice === "rainy") {
//         para.textContent = "Rain is falling outside; take a rain coat and an umbrella, and dont stay out for too long."
//     } else if (choice === "snowing") {
//         para.textContent = "The snow is coming down - it is freezing! Best to say in with a cup of hot chocolate, or go build a snowman!"
//     } else if(choice === "overcast") {
//         para.textContent = "It is'nt raining, but the sky is grey and gloomy; it could turn any minutes, so take a rain coat just in case.";
//     } else {
//         para.textContent = ""
//     }
// }



//swicth example
const select = document.querySelector("select")
const para = document.querySelector("p")

select.addEventListener("change",setWeather)

function setWeather() {
    const choice = select.value;

    switch(choice) {
        case "sunny":
            para.textContent = "It is a nice and sunny outside today.Wear shorts!Go to the beach, or the park, and get an ice cream."
            break;
            case "rainy":
                para.textContent = "Rain is falling outside; take a rain coat and an umbrella, and dont stay out for too long."
                break;
                case "snowing" :
                    para.textContent = "The snow is coming down - it is freezing! Best to say in with a cup of hot chocolate, or go build a snowman!"
                    break;
                    case "overcast":
                        para.textContent = "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case."
                        break;
                        default:
                            para.textContent = ""
    }
}


// const select1 = document.querySelector("select")
// const html = document.querySelector(html);
// select.addEventListener('change', () =>{
//     const choice =select.value;

//     switch(choice) {
//         case "black":
//             update ("black","white");
//         break;
//         case "white" :
//             update("white","black")
//             break;
//             case "purple":
//                 update("purple","white");
//                 break;
//                 case 'yellow':
//                     update("yellow","purple")
//                     break;
//                     case "psychedelic":
//                         update("lime","purple")
//                         break;
//         }
// }
// );
// function update(bgColor, textColor) {
// html.style.backgroundColor = bgColor;
// html.style.color = textColor;
// }

//Ternary operator
const select1 = document.querySelector("select");
const html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor
}

select.addEventListener("change", () => 
select.value === "black"
?update("black", "white")
:update("white" , "black"),
);
