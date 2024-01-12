let arr = ["i", "study", "javascript", "right", "now"];
let removed = arr.splice(0, 3, "let's", "dance")
console.log(removed)

/************slice()*************/
let arr1 = ["t", "e", "s", "t"];
console.log(arr1.slice(1, 3))
console.log(arr1.slice(-2))


/*************concat()*************/
let arr2 = [1, 2];
console.log(arr2.concat([3, 4]))
console.log(arr2.concat([3, 4], [5, 6]))

/*************forEach()************/
const arr3 = ['a', 'b', 'c'];
arr3.forEach((element) => console.log(element))



/***********Searching in arrays*************/
let Arr = [1, 0, false];
console.log(Arr.indexOf(0))
console.log(Arr.indexOf(false))
console.log(Arr.indexOf(null))
console.log(Arr.includes(1))

let colours = ['red', 'maroon', 'pink', 'black', 'white'];
console.log(colours.indexOf('white'));
console.log(colours.includes('lavender'))


/***************find()**************/
let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];
let user = users.find(item => item.id == 2)
console.log(user.name)



/**************findIndex() , findLastIndex()*************/
let peoples = [
    { id: 1, name: "john" },
    { id: 2, name: "peter" },
    { id: 3, name: "mary" },
    { id: 4, name: "john" }
]
console.log(peoples.findIndex(people => people.name == 'john'));
//console.log(peoples.findLastIndex(people => people.name == 'John')); // 3

/****************Filter()***************/
let users1 = [
    { id: 1, name: "john" },
    { id: 2, name: "peter" },
    { id: 3, name: "mary" }
];
let someUsers = users1.filter(item => item.id < 3)
console.log(someUsers.length)

const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);
function checkAdult(age) {
    return age >= 18
}
console.log(result)


/*************map()*************/
const numbers = [4, 9, 16, 25];
const newArr = numbers.map(myFunction);
function myFunction(num) {
    return num * 10
}
console.log(newArr)

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths)

//create an from a an array
let john = {
    name: "john",
    surname: "smith",
    id: 1
}
let pete = {
    name: "pete",
    surname: "hunt",
    id: 2
}
let mary = {
    name: "mary",
    surname: "key",
    id: 3
}

let viewers = [john, pete, mary];
let viewersMapped = viewers.map(viewer => ({
    fullName: `${viewer.name} ${viewer.surname}`, id: user.id
}));
console.log(viewersMapped[0].id);
console.log(viewersMapped[0].fullName)


/***************sort()*****************/
let array = [1, 2, 4, 12];
console.log(array.sort())

let birds = ["parrot", "hen", "pegion", "peacock"];
console.log(birds.sort())

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1
}
console.log(array.sort(compareNumeric));


/*************Reverse()*************/
let array1 = [2, 4, 6, 5, 4, 3]
console.log(array1.reverse())

let fruits = ["Banana", "Orange", "Apple", "Mango"]
console.log(fruits.reverse())


/************split()***********/
let names = 'Bilbo,Gandalf,Nazgul'
let nameArr = names.split(',');
console.log(nameArr)
for (let name of nameArr) {
    console.log(`A message to ${name}.`)
}

let text = "How are you doing today?"
const myArray = text.split(" ")
console.log(myArray)

let text1 = "How are you doing today?";
const myArray1 = text1.split(" ")
let word = myArray1[1]
console.log(word)

let Arr1 = 'bilbo,gandalf,nazgul,saruman'.split(',', 2) //here 2 is the index of the arr we split the arr just before 2
console.log(Arr1)


/**********join()*********/
let name = ['theja', 'sandra', 'emil'];
let str = name.join(';');
console.log(str)
console.log(name.join())
console.log(name.join(' '));
console.log(name.join('-'))


/**************reduce()***************/
let reduceArr = [1, 2, 3, 4, 5];
let res = reduceArr.reduce((sum, current) => sum + current, 0);
console.log(res)


/**************ReduceRight()*************/
let num = [1, 2, 3, 3, 5];
let results = num.reduceRight((sum, current) => sum + current, 0)
console.log(results)


/*************isArray()***************/
console.log(Array.isArray({}))
console.log(Array.isArray([]));


/**************thisArg()***************/
let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(candidate) {
        return candidate.age >= this.minAge && candidate.age <= this.maxAge
    }
};
let candidates = [
    { age: 16 },
    { age: 20 },
    { age: 23 },
    { age: 30 }
];
let soldiers = candidates.filter(army.canJoin, army)
console.log(soldiers.length)
console.log(soldiers[0].age);
console.log(soldiers[1].age)