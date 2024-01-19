/********unary *********/
let x = 1;
x = -x;
console.log(x)

/*********binary********/
let y = 1, z = 3;
console.log(z - y)


/********Remainder*******/
console.log(5 % 2);
console.log(8 % 3);
console.log(8 % 4)

/*******Exponentiation*******/
console.log(2 ** 2);
console.log(2 ** 3);
console.log(2 ** 4);
console.log(4 ** (1 / 2));
console.log(8 ** (1 / 3))


/*******String concatenation******/
let s = "my" + "string";
console.log(s)

console.log(2 + 2 + '1')


/*************Numeric conversion, unary+**************/
let x1 = 1
console.log(+x1);

let y1 = -2;
console.log(+y1)


/**********Assignments**********/
let a = 2 * 2 + 1;
console.log(a)

let a1 = 1;
let b1 = 2;
let c1 = 3 - (a1 = b1 + 1);
console.log(a1);
console.log(c1)


/*************Chaining assignments************/
let u, v, w;
v = u = w = 2 + 2;
console.log(u);
console.log(v);
console.log(w);


/***************modify-in-place*************/
let n = 2;
n += 5;
n *= 2;
console.log(n)

let n1 = 2;
n1 *= 3 + 5;
console.log(n1)

/***********increment / decrement***********/
let counter = 2;
counter++;
console.log(counter)

let counter1 = 2;
counter1--
console.log(counter1)


let counter2 = 0;
++counter2;
console.log(counter2)



//rators treat arguments as 32-bit integer numbers and work on the level of their binary representation.

// These operators are not JavaScript-specific. They are supported in most programming languages.

// The list of operators:

// AND ( & )
// OR ( | )
// XOR ( ^ )
// NOT ( ~ )
// LEFT SHIFT ( << )
// RIGHT SHIFT ( >> )
// ZERO-FILL RIGHT SHIFT ( >>> )
// These operators are used very rarely, when we need to fiddle with numbers on the very lowest (bitwise) level. We won’t need these operators any time soon, as web development has little use of them, but in some special areas, such as cryptography, they are useful. You can read the Bitwise Operators chapter on MDN when a need arises.