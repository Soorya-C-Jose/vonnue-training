/**********try...catch***********/

//errorless code
try {
    console.log('Start of try runs');
    console.log('End of try runs');
} catch (err) {
    console.log('Catch is ignored, because there are no errors');
}

//code with errors
try {
    console.log('Start of running');
    lalala;
    console.log('End of try runs');
} catch (err) {
    console.log('Errors has occured!');
}


//error object
try {
    lalala;
} catch (err) {
    console.log(err.name);
    console.log(err.message)
    // console.log(err.stack)
    // console.log(err)
}

let json = '{"name": "john", "age":30}'
let user = JSON.parse(json)
console.log(user.name)
console.log(user.age)

let obj = "{bad json}";
try {
    let users = JSON.parse(obj);
    console.log(users.name);
} catch (err) {
    console.log("Our apologies, the datahas errors, we'll try to request it one more time.");
    console.log(err.name);
    console.log(err.message)
}

//throw operator
let error = new Error("Things happen o_0");
console.log(error.name);
console.log(error.message)

try {
    JSON.parse("{bad json o_0}");
} catch (err) {
    console.log(err.name)
}

//throw error
let jsonErr = '{"age":30}';
try {
    let customer = JSON.parse(jsonErr);
    if (!customer.name) {
        throw new SyntaxError("Incomplete data: no name");
    }
    blabla();
    console.log(customer.name);
} catch (err) {
    if (err instanceof SyntaxError) {
        console.log("JSON Error:" + err.message);
    } else {
        throw err;
    }
}


function readData() {
    let json = '{"age":30}';
    try {
        blabla();
    } catch (err) {
        if (!(err instanceof SyntaxError)) {
            throw err;
        }
    }
}
try {
    readData();
} catch (err) {
    console.log("External catch got:" + err);
}

//try..catch..finally
try {
    console.log('try');
    if (confirm('make an error?')) BAD_CODE();
} catch (err) {
    console.log('catch');
} finally {
    console.log('finally')
}

function func() {
    try {
        return 1
    } catch (err) {
        /*...*/
    } finally {
        console.log('finally');
    }
}
console.log(func())

//global catch
globalThis.onerror = function (message, url, line, col, error) {
    console.log(`${message}\n At ${line}:${col} of ${ul}`);
};
function readData() {
    badFunc();
}
readData();

