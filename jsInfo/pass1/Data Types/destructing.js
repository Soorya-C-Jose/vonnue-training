/*************Array destructing*************/
let arr = ["john", "smith"]
let [firstName, surName] = arr;
console.log(firstName)
console.log(surName)


let [name1, name2, name3] = ["Julius", "Caesar", "Consul", "of the roman republic"]
console.log(name1);
console.log(name2);
console.log(name3)


/********default values********/
let [firstname, surname] = [];
console.log(firstname)

let [Name = "Guest", lastName = "anonymous"] = ["Julius"]
console.log(Name)
console.log(lastName)


/*************Object destructing*************/
let options = {
    title: "Menu",
    width: 100,
    height: 200
};
let { title, width, height } = options;
console.log(title);
console.log(width);
console.log(height)

/************Nested destructing***********/

let option = {
    size: {
        width: 100,
        height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
};

let {
    size: {
        Width,
        Height
    },
    items: [item1, item2],
    Title = "Menu"
} = option;

console.log((title));
console.log((width));
console.log((height));
console.log((item1));
console.log((item2))


/*********smart function parameters*******/
let opt = {
    title: "My menu",
    items: ["Item1", "Item2"]
};
function showMenu({ title = "Untitled", width = 200, height = 100, items = [] }) {
    console.log((`${title} ${width} ${height}`)); 
    console.log(items)
}

showMenu(opt);
