// alert('hello')
// console.log(250 + 130);
// console.log('Welcome');



// write a function 



// let count = 0;
// function isPrime() {
//   let num = 100

//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= num; i++) {

//     if (num % i === 0) {
//       count++
//     }
//     if (count == 1) {
//       console.log(i)
//     } else {
//       console.log(" the number is  not a prime number")
//     }
//   }
// }

// let sequence = []
// if(count == 1){
//   sequence.push(i)
// }
// isPrime()


// isPrime(n) return true if n is prime else false



// function isPrime(n) {
//  let count = 0;
//  for(let i = 0; i <= n; i ++){
//   if (n <= 1){
//     return false;
//   } else if (n % i == 0) {
//     count ++
//   } else if(count == 1){
//     true
//   } else if (count !== 1) {
//     console.log("the number is not a prime number")
//   }
//  }
// }


function isPrime(n) {
  if(n <= 1){
    return false;
  }
  for(let i = 2; i <= n/2; i++){
    if(n % i == 0) {
      return false;
    } 
  }
  return true;
}

function nthPrime(num) {
  let count = 0
  let n = 0
  while (count < num){
   n++;
   if(isPrime(n)) {
    count ++
   }
  }
  return n 
}

console.log(isPrime(11));
console.log(nthPrime(5));



