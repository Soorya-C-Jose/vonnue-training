// function greeting(){
//     console.log('hello dear')
// }
// greeting()

// const function1 = function greeting(){
//     console.log("Hello Students")
// }
// function1()
// console.log(typeof function1)

// const object1 =  {
//     num: 2,
//     fun: function greeting() {
//         console.log("hello3")
//     }
// }

// object1.fun();


/******************* Passing a value into a function *****************/

// function display(param) {
//     console.log(param);
// }

// display(2);


// function run(param) {
//     param();
// }
// run(function() {
//     console.log('hello4');
// })


/************************** setTimeout / setInterval ************************** */

//  setTimeout(function() {
//     console.log('timeout');
//  },3000);


//  setTimeout(function() {
//     console.log('welcome all')
//  },1000)


//  setInterval(function() {
//     console.log("this is an interval")
//  },3000)



 /*****************forEach ***************/

//  let myArray =
//  [
//     'make dinner',
//     'watch movie',
//     'wash dishes'
//  ].forEach(function(value, index){
//     if(value === 'watch movie'){
//         return;
//     }
//     console.log(index)
//     console.log(value);
//  })



/******************** Arrow Functions *****************/

// const regularFunction = function(parameter) {
//     console.log('hello World')
// }
// regularFunction()


// const arrowFunction = (parameter) => {
//     console.log('hello World')
// }
// arrowFunction()

// const oneParam = param => {
//     console.log(param + 1)
// };
// oneParam(2)



// const buttonElement = document.querySelector('.js-button');


// const eventListener = () => {
//     console.log('click')
// }
// buttonElement.addEventListener('click',
//     eventListener
// )

// buttonElement.addEventListener('click',() => {
//     console.log('again clicked')
// }) 
// buttonElement.removeEventListener('click',
//    eventListener
// )

// const clickElement = document.querySelector('.click-btn') 
//     clickElement.addEventListener("click",() => {
//         console.log("Hey")
//     })



/********************* Array filter() / Array map() *********************/

// let arr = [1, -3, 5].filter((value,index) => {
//     if (value >= 0) {
//         return true;
//     } else{
//     return false;
//     }
// });

// console.log(arr)


// console.log( Array = [1,1,3].map((value,index) =>{
//     return value * 10;
// }));


// console.log( Array = [1,1,3].map( value => value * 2
// ));