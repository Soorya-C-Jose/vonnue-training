//onsole.log(years["2"] !== years["02"]);

const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length)

fruits[5] = "mango";
console.log(fruits[5]);
console.log(fruits)
console.log(Object.keys(fruits))
fruits.length = 10
console.log(fruits)


//const arrayEmpty = new Array(2);
//console.log(arrayEmpty.length)
//console.log(arrayEmpty[0])


const colors = ["red", "yellow", "orange"];
colors[5] = "purple";
colors.forEach((item, index) => {
    console.log(`${index}: ${item}`)
})
console.log(colors.reverse())

//tostring
const fruit = ["banana", "orange", "apple", "mango"];
console.log(fruit.toString())

//join
const fruitss = ["banana", "orange", "apple", "mango"];
console.log(fruitss.join(" * "))

//pop()
const veg = ["carrot", "beans", "chilli"]
console.log(veg.pop())
console.log(veg)

//push()
const vegi = ["carrot", "beetroot", "onion"]
console.log(vegi.push("drumstick"))
console.log(vegi)


//shift()
const veggi = ["onion", "chilli", "kovaka"];
veggi.shift();
console.log(veggi)

//unshift()
const veggies = ["onoin", "carrot", "chilli"]
veggies.unshift("lemon")
console.log(veggies)

//concat()
const myGirls = ["cecilie", "lone"];
const myBoys = ["emil", "tobias", "linuus"]
const myChildren = myGirls.concat(myBoys)
console.log(myChildren)

//flat()
const myArr = [[1, 2], [3, 4], [5, 6]];
const newArr = myArr.flat()
console.log(newArr)

//Array.prototype[@@iterator]()
const revArr = ['a', 'b', 'c']
const iterator1 = revArr[Symbol.iterator]();
for (const value of iterator1) {
    console.log(value)
}

//at()
const array2 = [5, 12, 3, 4, 124];
//let index = 2;
//console.log(`An index of ${index} returns ${array2.at(index)}`);
//console.log(array2.at(index))
let index = -2;
console.log(`An index of ${index} returns ${array2.at(index)}`)

//copyWithin()
const arr1 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr1.copyWithin(0, 3, 4));
console.log(arr1.copyWithin(1, 3))

console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4))
console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1))

//entries()
const arr = ['a', 'b', 'c'];
const iterator2 = revArr.entries();
console.log(iterator2.next().value); //here we used the next() to get the 1st one 
//if we again use a next we can get the element at the index1  

const arra = ["a", "b", "c"];
const arrayEntries = arra.entries();
for (const element of arrayEntries) {
    console.log(element);
}


//every()
const isBelowThreshold = (currentValue) => currentValue < 40;
const arra1 = [1, 35, 12, 10, 9];
console.log(arra1.every(isBelowThreshold));


//fill()
const Arr = [1, 2, 3, 4]
console.log(Arr.fill(0, 2, 4)) //Arr = [1,2,0,0]
console.log(Arr.fill(5, 1))  // Arr = [1,5,5,5]
console.log(Arr.fill(6))  //Arr = [6,6,6,6]


//filter()
const words = ["spray", "elite", "exuberant", "destruction", "present"];
const result = words.filter((word) => word.length > 6);
console.log(result)

const Array0 = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, , 9, 10, 11, 12, 13];
function isPrime(num) {
    for (let i = 2; num > i; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return num > 1;
}
console.log(Array0.filter(isPrime));

//find()
const revArr1 = [5, 12, 8, 130, 44];
const found = revArr.find((element) => element > 10);
console.log(found)

const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 }
];
const results = inventory.find(({ name }) => name === "bananas")
console.log(results)

//findIndex()
const arr2 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 10;
console.log(arr2.findIndex(isLargeNumber))


//findLast()
const nums = [3, 5, 10, 22, 44, 82, 32]
const founded = (nums.findLast((element) => element > 50))
console.log(founded)


//findLastIndex()
const numArr = [5, 12, 50, 130, 44];
const isLargeNum = (element) => element > 50;
console.log(numArr.findLastIndex(isLargeNum))

//flat()
const numArr1 = [0, 1, 2, [3, 4]];
console.log(numArr1.flat())

const numArr2 = [0, 1, [2, [3, [4, 5]]]]
console.log(numArr2.flat())
console.log(numArr2.flat(2))
console.log(numArr2.flat(Infinity))

//flatmap()
const numArr3 = [1, 2, 1];
const res = numArr3.flatMap((num) => (num === 2 ? [2, 2] : 1));
console.log(res)

//forEach()
const Array2 = ['a', 'b', 'c'];
Array2.forEach((element) => console.log(element))


//from()
console.log(Array.from('foo'));
console.log(Array.from([1, 2, 3], (x) => x + x))


//includes()
const berries = ["blue", "black", "straw", "peach"]
console.log(berries.includes('blue'))
const pets = ["cow", "rabbit", "cat", "dog"]
console.log(pets.includes("duck"))

//indexOf()
const beasts = ["ant", "bison", "camel", "duck", "bison"];
console.log(beasts.indexOf('bison'));
console.log(beasts.indexOf("bison", 2))
console.log(beasts.indexOf("giraffe"))

//isArray()
console.log(Array.isArray([1, 2, 3]))
console.log(Array.isArray("good morning"))
console.log(Array.isArray('[]'));
console.log(Array.isArray(new Array(5)))


//join()
const elements = ['fire', 'air', 'water'];
console.log(elements.join());
console.log(elements.join(''));
console.log(elements.join('-'));


//keys()
const arrays1 = ['a', 'b', 'c'];
const iterator = arrays1.keys();

for (const key of iterator) {
    console.log(key)
}

//lastIndexOf()
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo', 'Tiger']
console.log(animals.lastIndexOf('Dodo'))
console.log(animals.lastIndexOf('Tiger'))


//map()
const arrays = [1, 4, 9, 16];
const map1 = arrays.map((x) => x * 2);
console.log(map1)

const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));
console.log(roots)
console.log(numbers)

//of()
console.log(Array.of('foo', 2, 3, 'bar', 'true'))
console.log(Array.of())

//pop()
const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
console.log(plants.pop())
console.log(plants)
plants.pop()
console.log(plants)

const myFish = ["angel", "clown", "mandarin", "sturgon"];
const popped = myFish.pop()
console.log(myFish);
console.log(popped)


//push()
const animal = ["pigs", "goat", "sheep"];
const count = animal.push("cows")
console.log(count)
console.log(animal)
animal.push("chicken", "cats", "dogs")
console.log(animal)

const sports = ["soccer", "baseball"];
const total = sports.push("football", "swimming")
console.log(sports)

const vegetables = ["parsnip", "potato"];
const moreVegs = ["celery", "beetroot"];
vegetables.push(...moreVegs)
console.log(vegetables)


//reduce()
const arr3 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = arr3.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue,
);
console.log(sumWithInitial)

const number = [1, 2, 3, 4, 5];
console.log(number.reduce((a, b) => a + b))


let arry = [175, 50, 25];
function subofArray(total, num) {
    return total - num;
}
function arrayReduce(item) {
    console.log(arry.reduce(subofArray))
}
arrayReduce()


//reduceRight()
const reduceArr = [
    [0, 1],
    [2, 3],
    [4, 5],
];
const resul = reduceArr.reduceRight((accumulator, currentValue) =>
    accumulator.concat(currentValue),
);
console.log(resul)

//reverse()
const reverseArr = ['one','two','three'];
console.log('revArr:', reverseArr)
const reversed = reverseArr.reverse()
console.log(reversed)


//shift()
const shiftArray = [1,2,3]
const firstElement = shiftArray.shift();
console.log(shiftArray)
console.log(firstElement)


//unshift()
const unArr = [1,2,3]
console.log(unArr)
console.log(unArr.unshift(4,5))
console.log(unArr)

let unshiftArr = [4,5,6];
unshiftArr.unshift(1,2,3);
console.log(unshiftArr);



//slice()
const anime = ['ant','bison','camel','duck','elephant'];
console.log(anime.slice(2))
console.log(anime.slice(2, 4));
console.log(anime.slice(1, 5));
console.log(anime.slice(-2));
console.log(anime)
console.log(anime.slice(2, -1));;
console.log(anime.slice())


//some()
const ar = [1,2,3,4,5]
const even = (element) => element % 2 === 0;
console.log(ar.some(even))

function isBiggerThan10(element, index, array) {
    return element > 10;
}
console.log([2,5,8,1,4].some(isBiggerThan10))
console.log([12,1,3,8,0].some(isBiggerThan10))


//sort()
const months = ['March','Jan','Feb','Dec'];
months.sort();
console.log(months);
const Arra1 = [1,30,4,21,100000];
Arra1.sort();
console.log(Arra1)

//splice()
const month = ['Jan','March','April','June'];
month.splice(1,0,'Feb')
console.log(month)
month.splice(4,1,'May')
console.log(month)

const myFishes = ["angel","clown","drum","mandarin","sturgeon"]
const removed = myFishes.splice(3, 1)
console.log(myFishes)


//toLocalString()
const stringArr = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const LocalString = stringArr.toLocaleString('en', {timeZone: 'UTC'});
console.log(LocalString)

console.log([1,2,34,44].toLocaleString())


//toReversed()
const items = [1,2,3];
console.log(items)
console.log(items.toReversed())
console.log([1, ,3].toReversed())


//toSorted()
const monthes = ["Mar","Jan","Feb","Dec"];
const sortedMonths = monthes.toSorted()
console.log(sortedMonths)
console.log(monthes)

const values = [1,10,21,2];
const sortedValues = values.toSorted((a,b) => a - b);
console.log(sortedValues)
console.log(values)

console.log(["a","c", ,"b"].toSorted());
console.log([,undefined, "a","b"].toSorted())


//toSpliced()
const monthss = ["Jan","Mar","Apr","May"];
const months2 = monthss.toSpliced(1,0, "feb");
console.log(months2)
const months3 = months2.toSpliced(2,2);
console.log(months3)
const months4 = months3.toSpliced(1,1,"Feb","Mar")
console.log(months4)
console.log(monthss)


//toString()
const string = [1,2,'a','1a']
 console.log(string.toString())


 //values()
 const arrValue = ['a','b','c'];
 const iterators = arrValue.values();
 for(const value of iterators) {
    console.log(value)
 }

 const valueArr = ["a","b","c","d","e"];
 const values1 = valueArr.values();
 for(const letter of values1) {
    console.log(letter)
 }
 

 //with()
 const withArr = [1,2,3,4,5];
 console.log(withArr.with(2,6))
 console.log(withArr)