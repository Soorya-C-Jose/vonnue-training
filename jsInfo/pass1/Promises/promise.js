let promise = new Promise(function (resolve, reject) {
    const x = "geeksforgeeks";
    const y = "geeksforgeeks";
    if (x === y) {
        resolve();
    } else {
        reject();
    }
});
promise.
    then(function () {
        console.log('Success, you are a SMART');
    }).
    catch(function () {
        console.log('some error has occured')
    })


/***************then,catch****************/
//then
let promises = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("done!"), 1000)
});
promises.then(
    result => console.log(result),
    error => console.log(error)
)

let promis = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});
promis.then(
    result => console.log(result),
    error => console.log(error)
)

//catch
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
})
promise1.catch(console.log)



/**********************Promises chaining********************/
new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000);
}).then(function (result) {
    console.log(result);
    return result * 2;
}).then(function (result) {
    console.log(result);
    return result * 2;
}).then(function (result) {
    console.log(result);
    return result * 2;
})