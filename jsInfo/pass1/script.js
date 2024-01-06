/****************VARIABLES***************/

let admin, name;
name = 'john';
admin = name
console.log(admin)


/*******************DATA TYPES**********************/

//string
let str = "Hello";
let str2 = "'single quotes are ok too";
let phrase = `can embed another ${str}`
console.log(phrase)

let person = "Ilya";
console.log(`hello ${1}`);
console.log(`hello ${"person"}`);
console.log(`hello ${person}`)

//boolean
let isGreater = 4 > 1;
console.log(isGreater)

//null
let age = null
console.log(age)


/***************************CONVERSIONS***************************/

//string conversions
let value = true;
console.log(typeof value)
value = String(value);
console.log(typeof value)

//numeric conversion
let string = "123";
console.log(typeof string)
let num = Number(string);
console.log(typeof num)

//boolean conversions
console.log(Boolean(1))
console.log(Boolean(0))
console.log(Boolean("hello"));
console.log(Boolean(""));