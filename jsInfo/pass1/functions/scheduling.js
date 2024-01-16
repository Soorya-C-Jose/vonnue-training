/************setTimeOut()*************/
function sayHi() {
    console.log('Hello');
}
setTimeout(sayHi, 1000)

function sayHai(phrase, who) {
    console.log(phrase + ' , ' + who);
}
setTimeout(sayHai, 1000, "Hello", "Paul")

// setTimeout("alert('Hello')", 1000);

setTimeout(() => console.log('Hello'), 1000)


//timerId()
let timerId = setTimeout(() => console.log("never happens"), 1000)
console.log(timerId)
clearTimeout(timerId);
console.log(timerId)


//setTimeInterval()
let timer = setInterval(() => console.log('tick'), 2000);
setTimeout(() => { clearInterval(timer); console.log('stop'); }, 5000);

//zero delay setTimeout()
let start = Date.now();
let times = [];
setTimeout(function run() {
    times.push(Date.now() - start);
    if (start + 100 < Date.now()) console.log(times)
    else setTimeout(run)
});


//onger than delay ms, then the calls will happen without a pause at all.

// And here is the picture for the nested setTimeout:

