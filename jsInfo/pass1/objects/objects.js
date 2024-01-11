let user = {
    name: "helen",
    age: 20,
    "likes birds": true,
};
//console.log(user["likes birds"])


/**********short hand keyerty*********/

function makeUser1(name, age, place) {
    return {
        name,
        age,
        place,
    }
};
let user1 = makeUser1("david", 45, 'netherland')
console.log(user1.place)


/******for, let, return as keyerty names*****/

let obj = {
    for: 1,
    let: 2,
    return: 3
};
console.log(obj.for + obj.let + obj.return)


/**********in operator*********/
let person = {
    name: "joseph",
    age: 30,
};
console.log("age" in person)
console.log("blabla" in user)


/********for..in loop********/

let man = {
    name: "john",
    age: 30,
    isAdmin: true
};
for (let key in man) {
    // console.log(key);
    console.log(man[key])
}


let person1 = {
    name: "john",
    surname: "smith"
};
user.age = 25;
for (let prop in person1) {
    console.log(prop)
}


let salaries = {
    john: 100,
    Ann: 160,
    Pete: 130
};
let sum = 0;
for(let key in salaries) {
    sum += salaries[key]
}
console.log(sum)

/********ordered like an object******/

let codes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    "+1": "usa"
};
for (let code in codes) {
    console.log(code)

}



