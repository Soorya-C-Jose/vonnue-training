//CREATING ARRAYS
//array literals
let empty = []
console.log(empty)
let primes = [2,3,5,7,11]
console.log(primes)
let misc = [1.1, true, "a"]
console.log(misc)

//spread operator 

let a = [1, 2, 3];
let b = [0, ...a,4]
console.log(b)

let original = [1,2,3]
let copy = [... original];
copy[0] = 0;
console.log(copy)
console.log(original[0])

let digits = [..."0123456789ABCDEF"]
console.log(digits)

//array.Of()

console.log(Array.of('foo',2,'bar',true))
console.log(Array.of());


console.log(Array.of(10))
console.log(Array.of(1,2,3))

//array.from()

console.log(Array.from('foo'));
console.log(Array.from([1,2,3], (x) => x + x));


//READING AND WRITING ARRAY ELEMENTS

let a1 = ["world"];
console.log(a1)
let value = a[0]
console.log(a[0])

//SPARSE ARRAYS

let arr = new Array(5)
console.log(arr)

const sparseArray = [10, , , 40];
console.log(sparseArray)


/****ADDING AND DELETING ARRAY ELEMENTS***/

let array = [];
array[0] = "zero";
array[1] = "one";
array.push("zero")
console.log(array)
array.push("one","two")
console.log(array)

let arr1 = [1,2,3]
delete a[2]
console.log(a)
console.log(2 in a)
console.log(a.length)