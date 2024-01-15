/******************Rest parameters*******************/
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2, 3, 4, 5))


function sumAll(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}
console.log(sumAll(1))
console.log(sumAll(1, 2, 3, 4, 5))


function showNames() {
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1])
}
showNames("julius", "caesar");
showNames("Ilya")


/****************Spread operator*****************/
let arr = [3, 5, 1];
let arr1 = [8, 3, 1, 2]
console.log(Math.max(...arr, ...arr1))

let arr2 = [1, -2, 3, 4];
let arr3 = [8, 3, -8, 1];
console.log(Math.max(1, ...arr2, 2, ...arr3, 25))

let arr4 = [3, 5, 1];
let arr5 = [8, 9, 15];
let merged = [0, ...arr4, 2, ...arr5]
console.log(merged)

let str = "Hello";
console.log([...str])

//Array.from()
let string = "Hello";
console.log(Array.from(string))


//COPY AN OBJECT/ARRAY
let array = [1, 2, 3];
let arrayCopy = [...array];
console.log((JSON.stringify(array) === JSON.stringify(arrayCopy)));
array.push(4);
console.log(array)
console.log(arrayCopy)


let obj = {
    a: 1,
    b: 2,
    c: 3
};
let objCopy = {...obj}
console.log(JSON.stringify(obj)  === JSON.stringify(objCopy))
console.log(obj === objCopy)
obj.d = 4;
console.log(JSON.stringify(obj))
console.log(JSON.stringify(objCopy))




