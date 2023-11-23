

let inputBtn = document.getElementById("input-btn")

// inputBtn.addEventListener("click", function () {
//     console.log("Button clicked!")
// })

// Double click
const deleteBtn = document.getElementById("delete-btn")
deleteBtn.addEventListener("click", function(){
    console.log("double clicked!")
    localStorage.clear()
    myLead = []
    renderLeads()
})


let myLead = [""]
let inputEl = document.getElementById("input-el")
console.log(inputBtn)

inputBtn.addEventListener("click", function () {
   // myLead.push("www.awesomelead.com")
    myLead.push(inputEl.value)
    localStorage.setItem("my-data",JSON.stringify(myLead))
    console.log(myLead)

    // Clear out the input field
    inputEl.value = ""

    // RENDER FUNCTION
    renderLeads()

  
})

// RENDER FUNCTION
let ulEl = document.getElementById("ul-el")

function renderLeads() {
    let listItems = " "
    for (let i = 0; i < myLead.length; i++) {
        listItems += "<li>" + myLead[i] + "</li"
        // add a tag
        // listItems += "<li><a target_'blank' href='#'>" + myLead[i] + "</a></li>"
    }
    console.log("deklete fn",listItems)

    ulEl.innerHTML = listItems
}

// INNERHTML

console.log(ulEl)
for (i = 0; i < myLead.length; i++) {
    // // ulEl.textContent += myLead[i] + " "  
    // ulEl.innerHTML += "<li>" + myLead[i] + "</li>"


    // ANOTHER METHOD FOR INNERHTML
    // 1. create element
    // 2.set text content
    // 3.append to ul
    // const li =document.createElement("li")
    // li.textContent = myLead[i]
    // ulEl.append(li)
}

// LOCAL STORAGE

localStorage.setItem("myName", "Per Harald Borgen")
let name = localStorage.getItem("myName")
console.log(name)

let myLeads = `{"name":"John", "birth":"1986-12-14", "city":"New York"}`
localStorage.setItem("myLeads",(myLeads))
let item=JSON.parse(localStorage.getItem("myLeads"));
console.log(item)



// ********************************************************/////
let leadsFRomLocalstorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFRomLocalstorage)
if (leadsFRomLocalstorage){
    myLeads = leadsFRomLocalstorage
    renderLeads()
}

// STORING ARRAYS IN LOCAL STORAGE

let myself = {"name":"bella","age":"22"}
myself = JSON.stringify(myself)
console.log( typeof myself)




// const container = document.getElementById("container")
// container.innerHTML = "<button onclick='buy()'>Buy!</button>"

// function buy(){
//     container.innerHTML += "<p>Thank you for buying!</p>"
// }


