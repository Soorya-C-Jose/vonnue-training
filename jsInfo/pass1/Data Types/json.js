let user = {
    name: "john",
    age: 30,
    toString() {
        return `{name: "${this.name}}", age: ${this.age}}`;
    }
};
console.log(user)

//JSON.stringify()
let student = {
    name: "peter",
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
};
let json = JSON.stringify(student)
console.log(typeof (json))
console.log(json)


console.log(JSON.stringify(1))
console.log(JSON.stringify('test'))
console.log(JSON.stringify(true))
console.log(JSON.stringify([1, 2, 3]))


//nested
let meetup = {
    title: "conference",
    room: {
        number: 23,
        participants: ["john", "ann"]
    }
};
console.log(JSON.stringify(meetup))


//replacer
let room = {
    number: 23
};
let meetups = {
    title: "conference",
    participants: [{ name: "john" }, { name: "Alice" }],
    place: room
};
room.occupiedBy = meetup;
console.log(JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']));


/************json.parse()*************/

let numbers = "[0, 1, 2, 3]";
numbers = JSON.parse(numbers);
console.log(numbers[1])

let userData = '{"name": "john","age": 35, "isAdmin": false,"friends": ["sam",1,2,3]}'
let users = JSON.parse(userData);
console.log(users.friends[0])

//using reviver
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meet = JSON.parse(str, function (key, value) {
    if (key == 'date') return new Date(value);
    return value;
});

console.log((meet.date.getDate()));

//nested obj
let schedule = `{
    "meeting": [
        {"title": "conference","date":"2017-11-30T12:00:00.000Z"},
        {"title": "Birthday","date":  "2017-04-18T12:00:00.000Z" }
    ]
}`;
schedule = JSON.parse(schedule, function(key,value) {
    if(key == 'date') return new Date(value);
    return value;
}) ;
console.log(schedule.meeting[1].date.getDate());