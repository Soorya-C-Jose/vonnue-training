/*********ARRAY LITERALS**********/

let emptyArr = []
console.log(emptyArr)
let primes = [2,3,4,5]
console.log(primes)
let misc = [1.1, true, "a",];
console.log(misc)

let b = [[1, {x:1, y:2}], [2, {x: 3, y:4}]];
console.log(b)

/******ARRAY OPERATOR*******/

let a1 = [1,2,3]
let b1 = [4,5,6]
let c = [...a1,...b1]
console.log(c)

let original = [1,2,3]
let copy = [...original];
console.log(copy)
copy[0] = 0;
original[0];
console.log(original[0])


//ARRAY() CONSTRUCTOR

// call it with no arguments
let a4= new Array();

//call it with single numeric arugument
let a2 =  new Array(10)

//specify two or more array elements or a single non numeric element
let a3 = new Array(5,4,3,2,1, "testing,testing")
console.log(new Array())

/******Array.of()******/

//empty array
Array.of()
// array with single argument
Array.of(10)
//Array with multiple arguments
Array.of(1,2,3)


/*********Array.from()*********/

console.log(Array.from('foo'));
console.log(Array.from([1,2,3], (x) => x + x));



/******Reading and writing array elements******/
let ele = ["world"];
console.log(ele)
let value = a[0];
console.log(value);
let i = 2;
a[i] = 3;
console.log(i)


/*******SPARSE ARRAYS********/

exampleArray = [1,2,3,4,5,]
console.log(exampleArray)
console.log(exampleArray.length)


/*******ADDING ARRAY ELEMENTS******/

let arr = []
arr[0] = "zero";
arr[1] = "one"
arr[2] = "two"
console.log(arr)

//PUSH method
let arr1 = []
arr1.push("four","five")
console.log(arr1)


/************DELETING ARRAY ELEMENTS ***********/

let arr2 = [1,2,3];
console.log(arr2)
delete arr2[2]
console.log(arr2)


/*******ITERATING ARRAYS********/

// for..of loop
const arrays1 = ['a','b','c'];
for (const element of arrays1) {
    console.log(element)
}

let letters = ["Hello World", "Hello December" , "Its painfull"] ;
for (const elements of letters) {
    console.log(elements)
}

// Entries method ()
 
let everyother = "";
for(let [index, letter] of letters.entries()) {
    if (index % 2 === 0) everyother += letter;
}
console.log(everyother)

let vowels = "";
for(let i =0; i < letters.length; i++) {
    let letter = letters[i];
    if(/[aeiou]/.test(letter)){
        vowels += letter;
    }
}
console.log(vowels)



/***********MULTI DIMENSIONAL ARRAYS***********/

let table = new Array(10);
console.log(table)
for(let i = 0; i < table.length; i++){
    table[i] = new Array(10);
}
for(let row = 0; row < table.length; row++) {
    for(let col = 0; col < table[row].length;col++) {
        table[row][col] = row*col;
    }
}
console.log(table[5][7])

let student1 = ['jack',24];
let student2 = ['sara',23];
let student3 = ['peter',24];

let studentData = [...student1, ...student2, ...student3];
console.log(studentData)



/*******ARRAY METHODS*******/


/********Array iterating methods*********/
//FOREACH()
 const arrays = ['a','b','c'];
 arrays.forEach((element) => console.log(element));


 let data =[1,2,3,4,5], sum = 0;
 data.forEach(value => { sum += value;});
 data.forEach(function(v,i,a) { a[i] = v + 1;});


 //MAP()
 const arrays2 = [1,4,9,16];
 const map1 = arrays2.map((x) => x * 2);
 console.log(map1);

 let arra1 = [1,2,3];
  const map2 = arra1.map(x => x * x)
console.log(map2)

//FILTER()

const words = ['spray','elite','exuberant','destruction','present'];
const result = words.filter((word) => word.length > 6);
console.log(result)


let filt = [5,4,3,2,1];
let res = filt.filter(x => x < 3)
console.log(res)

let result1=filt.filter((x,i) => i%2 === 0)
console.log(result1)

//FIND() AND FINDINDEX()

let nums =[1,2,3,4,5]
let numb = nums.findIndex( x => x === 3)
console.log(numb)
let numb1 = nums.findIndex(x => x < 0)
console.log(numb1)
let numb2 = nums.find(x => x % 5 === 0)
console.log(numb2)
let numb3 = nums.find(x => x % 7 === 0)
console.log(numb3)


/*********every()***********/
let everyele = [1,2,3,4,5];
let condition1 = everyele.every(x => x < 10)
console.log(condition1)
let condition2 = everyele.every(x => x % 2 === 0)
console.log(condition2)

/*******some()*******/
let someele = [1,2,3,4,5];
let condi1 = someele.some(x => x % 2 === 0)
console.log(condi1)
let condi2 = someele.some(isNaN)
console.log(condi2)


/*****************Reduce() and reduceRight()*****************/

/********reduce()*******/
let redu = [1,2,3,4,5]
let conditions1 = redu.reduce((x,y) => x+y, 0)
console.log(conditions1)


/**********reduceRight()**********/
let right = [2,3,4];
let rightVal = right.reduceRight((acc,val) => Math.pow(val,acc))
console.log(rightVal);


/***********FLATTENING ARRAYS***********/

//flat()
const ar1 = [0,1,2, [3,4]];
console.log(ar1.flat())
const ar2 =[0,1, [2, [3,[4,5]]]];
console.log(ar2.flat());
console.log(ar2.flat(2));
console.log(ar2.flat(3));



/***********ADDING ARRAYS WITH CONCAT()*********** */
 let arr3 = [1,2,3]
 let newarr = arr3.concat(4,5)
 console.log(newarr)
let newarr1 = arr3.concat([4,5],[6,7])
console.log(newarr1)



/******PUSH() , POP() , SHIFT() , UNSHIFT()********/
let stack = []
stack.push(1,2)
console.log(stack)
stack.pop()
console.log(stack)
stack.push(3)
console.log(stack)
stack.pop()
console.log(stack)
stack.push([4,5]);
stack.pop()
stack.pop()
console.log(stack)


let qu =[]
qu.push(1,2)
console.log(qu)
qu.shift();
console.log(qu)


let un = []
un.unshift(1)
console.log(un)
un.unshift(2);
console.log(un)
un = []
console.log(un)
un.unshift(1,2,3)
console.log(un)

/***********SLICE(), SPLICE(), FILL(), COPYWITHIN()***********/

//slice()
let newArray = [1,2,3,4,5]
let newArray1 = newArray.slice(0,3);
console.log(newArray1)
let newArray2 = newArray.slice(3)
console.log(newArray2)
let newArray3 = newArray.slice(1,-1)
console.log(newArray3)
let newArray4 = newArray.slice(-3,-2)
console.log(newArray4)



//splice()
let spliceArray = [1,2,3,4,5,6,7,8]
let sArray = spliceArray.splice(4)
console.log(sArray)
let sArray1 = spliceArray.splice(1,2)
console.log(sArray1)
let sArray2 = spliceArray.splice(1,1)
console.log(sArray2)

//fill()
let f = new Array(5);
console.log(f)
f.fill(0)
console.log(f)
f.fill(9,1)
console.log(f)
f.fill(8,2, -1)
console.log(f)


//copywithin()
let cpy = [1,2,3,4,5];
cpy.copyWithin(1)
console.log(cpy)
cpy.copyWithin(2,3,5)
console.log(cpy)
cpy.copyWithin(0, -2)
console.log(cpy)


/**************Array searching and sorting methods ************** */
//indexof()
let index = [0,1,2,1,7,8,4,3]
let index1 = index.indexOf(7)
console.log(index1)
let index2 = index.lastIndexOf(1)
console.log(index2)

//includes()

let inc = [1,true,3,NaN] ;
let inc1 = inc.includes(true);
console.log(inc1)
let inc2 = inc.includes(2)
console.log(inc2)
let inc3 = inc.includes(NaN)
console.log(inc3)
let inc4 = inc.indexOf(NaN)
console.log(inc4)

//sort()
let sortArray = ["banana","cherry","apple"]
let sortedArray = sortArray.sort();
console.log(sortedArray)

let sorted = [33,4,1111,222];
let sortedArr = sorted.sort();
console.log(sortedArr)

sorted.sort(function(a,b) {
    return a-b;
});
console.log(sorted)
sorted.sort((a,b) => b-a);
console.log(sorted)

let elements = ["ant","bug","cat","dog"]
elements.sort();
console.log(elements)
elements.sort(function(s,t) {
    let x1 = s.toLowerCase();
    let y1 = t.toLowerCase();
    if (x1 < y1) return -1;
    if(x1 > y1) return 1;
    return 0
})
