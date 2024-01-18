/************promise.all***********/
Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)),
    new Promise(resolve => setTimeout(() => resolve(2), 2000)),
    new Promise(resolve => setTimeout(() => resolve(3), 3000))
]).then(console.log)

Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")))),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).catch(console.log)


/************Promise.allSettled()************/
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
    setTimeout(reject, 100, 'foo'),
);
const promise = [promise1, promise2];
Promise.allSettled(promise).then((results) =>
    results.forEach((results) => console.log(results.status)),
);


/************promise.race()**********/
Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(console.log)



/**************promise.any()*************/
// Promise.any([
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
//   ]).then(console.log); 


/******************promise.resolve()******************/
let promises = Promise.resolve(123);
promises.then((value) => {
    console.log(value);
});


/***********Promise.reject()**********/
function resolved(result) {
    console.log('Resolved');
}
function rejected(result) {
    console.error(result);
}
Promise.reject(new Error('fail')).then(resolved, rejected);

