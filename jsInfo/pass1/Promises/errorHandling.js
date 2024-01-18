//implicit try ... catch
new Promise((resolve, reject) => {
    throw new Error("Whoops!");
}).catch(console.log())

new Promise((resolve, reject) => {
    reject(new Error("Error!"));
}).catch(console.log)


//rethrowing
new Promise((resolve, reject) => {
    throw new Error("Whoops!");
}).catch(function (error) {
    console.log("The error is handled, continue normally");
}).then(() => console.log("Next successfull handler runs"))

new Promise((resolve, reject) => {
    throw new Error("Whoops!");
}).catch(function (error) {
    if (error instanceof URIError) {

    } else {
        console.log("Can't handle such error");
        throw error;
    }
}).then(function () {

}).catch(error => {
    console.log(`The unknown error has occured: ${error}`);
})

//unhandles errors
new Promise(function() {
    noSuchFunction();
})
.then(() => {

});



