let fruits = ["Apple", "Orange", "Mango"]
console.log(fruits)
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
//replace an element
fruits[2] = 'pear'
console.log(fruits)
console.log(fruits.length)

//elements of any type
let arr = ["Apple", { name: 'John' }, true, function () { console.log('hello'); }]
console.log(arr[1].name)

/*****************Array methods****************/
//pop()
let plant = ["Root", "Leaves", "Branch"]
console.log(plant.pop())
console.log(plant)
plant.push("flower")
console.log(plant)
plant.shift()
console.log(plant)
plant.unshift("Root")
console.log(plant)


//splice
let array1 = ["I", "go", "home"]
delete array1[1];
console.log(array1[1]);
console.log(array1)
console.log(array1.length)

let arr2 = ["I", "study", "JavaScript"];
arr2.splice(1, 1);
console.log(arr2)


/**********Loops*********/

let fruitss = ["Apple", "Orange", "Pear"]
// for (let i = 0; i < fruitss.length; i++) {
//     console.log(fruitss[i])
// }

// for(let fruit of fruitss) {
//     console.log(fruit)
// }

for (let key in fruitss) {
    console.log(fruitss[key]);
}

/*********Array length*********/

let array = [1, 2, 3, 4, 5];
array.length = 2;
console.log(array)
array.length = 5;
console.log([3])


/***********toString***********/

let arr1 = [1, 2, 3];
console.log((arr1))
console.log((String(arr1) === '1,2,3'));

console.log([] + 1)
console.log([1] + 1)
console.log([1, 2] + 1)

console.log("" + 1);
console.log("1" + 1)
console.log("1,2" + 1)


/************Array Comparison*************/

console.log([] == [])

console.log(0 == [])
console.log(0 == '')
console.log('0' == '')


