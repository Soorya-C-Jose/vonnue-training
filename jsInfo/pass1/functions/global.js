console.log(("Hello"));
global.console.log(("Hello")); //global denotes the node

global.currentUser = {
    name: "john"
};
console.log(currentUser.name)
console.log(global.currentUser.name)


//s generally discouraged. There should be as few global variables as possible. The code design where a function gets “input” variables and produces certain “outcome” is clearer, less prone to errors and easier to test than if it uses outer or global variables.

// Using for polyfills
// We use the global object to test for support of modern language features.

// For instance, test if a built-in Promise object exists (it doesn’t in really old browsers):

