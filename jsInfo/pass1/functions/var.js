//no block scope
if (true) {
    var test = true;
}
console.log(test)


for (var i = 0; i < 10; i++) {
    var one = 1;
}
console.log(i)
console.log(one)


var user = "pete";
var user = "john";
console.log(user)


function sayHi() {
    phrase = "Hello";
    if (false) {
        var phrase
    }
    console.log(phrase)
}
sayHi()


    //ways to create IIFE
    (function () {
        console.log("Parentheses around the function");
    })();
(function () {
    console.log("Parentheses around the whole thing");
})();
!function () {
    console.log("BItwise NOT operator starts the expression");
}();
+function () {
    console.log("Unary plus starts the expression");
}();




