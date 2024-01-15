let now = new Date();
console.log(now)

//timestamp
let jan01_1970 = new Date(0);
console.log(jan01_1970)
let jan02_1970 = new Date(24 * 3600 * 1000)
console.log(jan02_1970)

//getTime()
let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log(Dec31_1969)

//new Date(year,month,date,hours,minutes,seconds,ms)
console.log(new Date(2011, 0, 1, 0, 0, 0, 0))


let date = new Date();
console.log(date.getHours())
console.log(date.getUTCHours())


//autoCorrection
let dates = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2)
console.log(dates)

let day = new Date();
day.setDate(1)
console.log(day)
day.setDate
day.setDate(0)
console.log(day)

//date diff
let Day = new Date();
console.log(Day)

let start = new Date();
for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
}
let end = new Date();
console.log(`The loop took ${end - start}ms`)


//date.now()
let starts = Date.now();
for (let i = 0; i < 10000; i++) {
    let doSomething = i * i * i;
}
let ends = Date.now();
console.log(`The loop took ${ends - starts}ms`)


//benchMarks
function diffSubtract(date1, date2) {
    return date2 - date1
}
function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
}
function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();
    let start = Date.now();
    for (let i = 0; i < 10000; i++) f(date1, date2);
    return Date.now() - start;
}
console.log(`Time of diffSubtract:` + bench(diffSubtract) + 'ms');
console.log(`Time of diffGetTime:` + bench(diffGetTime) + 'ms')



//equivalent to new Date().getTime(), but it doesn’t create an intermediate Date object. So it’s faster and doesn’t put pressure on garbage collection.

// It is used mostly for convenience or when performance matters, like in games in JavaScript or other specialized applications.

// So this is probably better:

