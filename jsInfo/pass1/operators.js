/********************OPERATORS********************/
//exponentiation
console.log(2 ** 2)
console.log(2 ** 3)
console.log(2 ** 4)

//string concatenation using +
let s = "my" + "string"
console.log(s)
console.log(2 + 2 + '2')

//modify-in-place
let n = 2;
console.log(n += 5)
console.log(n *= 2)

//comma operator
let a = (1 + 2, 3 + 4);
console.log(a)

//comparison(string)
console.log('z' > 'a')
console.log('glow' > 'glee');
console.log('bee' > 'be')


//OR(||)
console.log(true || true)
console.log(false || true)
console.log(true || false)
console.log(false || false)

let firstName = "";
let lastName = "";
let nickName = "supercoder";
console.log(firstName || lastName || nickName || "Anonymous");


//AND(&&)
console.log(true && true)
console.log(true && false);
console.log(false && true);
console.log(false && false)


//WHILE LOOP
let i = 0;
while (i < 3) {
    // console.log(i)
    i++
}

//DO....WHILE LOOP
// let j = 0;
// do {
//     console.log(j)
//     j++
// } while (i < 3)


//FOR LOOP
for (let a = 0; i < 3; a++) {
    console.log(a)
}

for (let I = 0; I < 10; I++) {
    if (I % 2 == 0) continue
    console.log(I)
}

//switch
let w = 2 + 2;
switch (w) {
    case 3:
        console.log('Too small');
        break;
    case 4:
        console.log('Exactly!');
        break;
    case 5:
        console.log('Too big');
        break;
    default:
        console.log('I dont know such values')
} 