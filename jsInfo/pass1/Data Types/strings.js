//backtick

function sum(a, b) {
    return a + b;
}
console.log(`1+2 = ${sum(1, 2)}`)

let guestList = `Guests :
* John
*Pete
*Pavel
*Mary`;
console.log(guestList)

//special characters
let guests = "Guests:\n * John\n * Pete\n * Pavel\n * Mary";
console.log(guests)

let str1 = "Hello\nWorld";
let str2 = `Hello
World`;

console.log((str1 == str2));



//Accessing characters

let str = "Hello";
//First letter
console.log(str[0])
console.log(str.charAt(0))
//the last letter
console.log(str[str.length - 1])
console.log(str.charAt(-1))


/**************Search for Substring*****************/

//str.indexOf
let string = 'Widget with id '
console.log(string.indexOf('Widget'));
console.log(string.indexOf('widget'))
console.log(string.indexOf("id"))

//includes
console.log("Widget with id".includes("Widget"))
console.log("Hello".includes("Bye"))
console.log("hello everyone".startsWith('hello'))
console.log("string ends with".endsWith("h"))



//slice
let string1 = "stringify";
console.log(string1.slice(0, 5))
console.log(string1.slice(0,1))
console.log(string1.slice(2))
console.log(string1.slice(-4,-1))


//string comparison
console.log('a' > 'Z')

console.log("Z".codePointAt(0))
console.log("z".codePointAt(0))
console.log("z".codePointAt(0).toString(16))

//string.fromcodepoint
console.log(String.fromCodePoint(70))
