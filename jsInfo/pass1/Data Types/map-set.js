/*********map***********/
let map = new Map();
map.set('1', 'str1');
map.set(1, 'num1');
map.set(true, 'bool1');

console.log(map.get(1));
console.log(map.get('1'));
console.log(map.size)

//objects as keys
let john = {
    name: "john",
}
let visitsCountMap = new Map();
visitsCountMap.set(john, 123);
console.log(visitsCountMap.get(john))


/***********iteration over maps************/
let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);
for (let vegetable of recipeMap.keys()) {
    console.log(vegetable)
}
for (let amount of recipeMap.values()) {
    console.log(amount)
}
for (let entry of recipeMap) {
    console.log(entry)
}

/*************object.fromEntries()*************/
let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
]);
console.log(prices.orange)



/**************SET*****************/
let set = new Set();
let job = {
    name: "Job",
}
let michel = {
    name: "Michel"
};
let riya = {
    name: "Riya"
};
set.add(job);
set.add(michel);
set.add(riya);
set.add(job);
set.add(riya)
console.log(set.size)
for (let user of set) {
    console.log(user.name)
}


/************iteration over set**********/
let fruitSet = new Set(["oranges", "apples", "bananas"]);
for (let value of fruitSet)
    console.log(value)
fruitSet.forEach((value, valueAgain, set) => {
    console.log(value)
})


/***************Weak Map***************/
let weakMap = new WeakMap();
let obj = {};
console.log(weakMap.set(obj, "ok"));


/**************WeakSet*****************/
let visitedSet = new WeakSet();
let bill = { name: "Bill" }
let gates = { name: "Gates" }
let antony = { nam: "Antony" };
visitedSet.add(bill);
visitedSet.add(antony);
visitedSet.add(bill);
console.log(visitedSet.has(bill))
console.log(visitedSet.has(gates))
bill = null
