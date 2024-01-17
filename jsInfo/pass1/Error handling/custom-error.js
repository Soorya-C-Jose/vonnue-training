class Error {
    constructor(message) {
        this.message = message;
        this.name = "Error";
        // this.stack = <call stack>; 
    }
}
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
function test() {
    throw new ValidationError("Whoops!");
}
try {
    test();
} catch (err) {
    console.log(err.message)
    console.log(err.name)
}


//Validation error
// class ValidationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "ValidationError";
//     }
// }
// class PropertyRequiredError extends ValidationError {
//     constructor(property) {
//         super("No property:" + property);
//         this.name = "PropertyRequiredError";
//         this.property = property;
//     }
// }
// function renderUser(json) {
//     let user = JSON.parse(json);
//     if (!user.age) {
//         throw new PropertyRequiredError("age");
//     }
//     if (!user.name) {
//         throw new PropertyRequiredError("name");
//     }
//     return user;
// }
// try {
//     let user = readUser(`{"age":25}`);
// } catch (err) {
//     if (err instanceof ValidationError) {
//         console.log("Invalid data:" + err.message);
//         console.log(err.name);
//         console.log(err.property);
//     } else if (err instanceof SyntaxError) {
//         console.log("JSON Syntax Error:" + err.message)
//     } else {
//         throw err;
//     }
// }


class MyError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;

    }
}
class ValidationError2 extends MyError { };
class PropertyRequiredError extends ValidationError2 {
    constructor(property) {
        super("No property:" + property);
        this.property = property;
    }
}
console.log(new PropertyRequiredError("field").name)



let err = new FormatError("formatting error");

alert(err.message);
alert(err.name);
// alert( err.stack ); 
alert(err instanceof FormatError);
alert(err instanceof SyntaxError);


// eof version is much better, because in the future we are going to extend ValidationError, make subtypes of it, like PropertyRequiredError. And instanceof check will continue to work for new inheriting classes. So that’s future-proof.

//Also it’s important that if catch meets an unknown error, then it rethrows it in the line (**). The catch block only knows how to handle validation and syntax errors, other kinds (caused by a typo in the code or other unknown reasons) should fall through.

//Further inheritance
//The ValidationError class is very generic. Many things may go wrong. The property may be absent or it may be in a wrong format (like a string value for age instead of a number). Let’s make a more concrete class PropertyRequiredError, exactly for absent properties. It will carry additional information about the property that’s missing.
