//built in functions
const myText = "Iam a string";
const newString = myText.replace("string", "sausage");
console.log(newString)


const myArray = ["I", "Love", "Chocolate", "Frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString)

const string = "I am a string"
console.log(string)
const newStr = string.replace("string", "sausage")
console.log(newStr)


/******PARAMETERS*****/
//optional parameters
const myArray1 = ["I", "Love", "Chocolate", "Frogs"];
const madeAString1 = myArray1.join(" ");
console.log(madeAString1)
const madeAnotherString = myArray.join();
console.log(madeAnotherString)


//Arrow functions
const originals = [1, 2, 3];
const doubled = originals.map(item => item * 2);
console.log(doubled)
console.log(originals)

const textBox = document.getElementById('textBox');
const output = document.getElementById("output")

textBox.addEventListener("keydown", (event))


//function scope

const x = 1;

function a() {
    const y = 2;
}

function b() {
    const z = 3;
}

function outputs(value) {
    const para = document.createElement('p');
    document.body.appendChild(para);
    para.textContent = `Value: ${value}`;
}
console.log(outputs(x))
//console.log(outputs(y))

const btn = document.querySelector("button");
btn.addEventListener("click", displayMessage)

function displayMessage() {
    const body = document.body;
    const panel = document.createElement("div")
    panel.setAttribute("class", "msgBox");
    body.appendChild(panel)

    const msg = document.createElement("p")
    msg.textContent = "This is a message box";
    panel.appendChild(msg)

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "x";
    panel.appendChild(closeBtn);

    closeBtn.addEventListener("click", () =>
        panel.parentNode.removeChild(panel))

    if (msgType === "Warning") {
        msg.style.backgroundImage = "url(warning.png)";
        panel.style.backgroundColor = "red";
    } else if (msgType === "chat") {
        msg.style.backgroundImage = "url(chat.png)";
        panel.style.backgroundColor = "aqua";
    } else {
        msg.style.paddingLeft = "20px"
    }
}
displayMessage()
