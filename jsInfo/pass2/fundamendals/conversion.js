/**********String conversions*********/
let value = true;
console.log(typeof value);
value = String(value);
console.log(typeof value)



/***********Numeric conversion************/
let str = "123";
console.log(typeof str);
let num = Number(str);
console.log(typeof num)

let age = Number("an arbitery stringinstead of a number");
console.log(age)

console.log(Number("123"));
console.log(Number("123z"))
console.log(Number(true))
console.log(Number(false));


/*************Boolean conversion**************/
console.log(Boolean(1))
console.log(Boolean(0));
console.log(Boolean("hello"));
console.log(Boolean(""));