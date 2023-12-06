// alert('hello')
// console.log(250 + 130);
// console.log('Welcome');



function isPrime(num) {
 if (num <= 1) {
  return false;
 }
 for(let i = 2; i <= Math.sqrt(num); i++){
  if(num % i === 0) {
    return false;
  }
  return true;
 }
     console.log(isPrime())
   
    let sequence = []
    for(let j =1; j <= Math.sqrt(num); j++){
        if(isPrime= false) 
      if(num % i == 0){
        console.log (sequence);
      }
    }
    return isPrime && (num > 1);
}

console.log(isPrime(11));


// function isPrime(num) {
//   let sequence = []
//     let prime = true;
//     for(let i =2; i <= Math.sqrt(num); i++){
         
   
//     for(let j =1; j <= i; j++){
//       if(i % j == 0){
//         console.log (i);
//       }
//     }
//     }
    
// }

// console.log(isPrime(6));




// function isPrime(num) {
//   let prime = true;
//   for(let i =2; i <= Math.sqrt(num); i++){
//       if(num % i == 0) {

//         prime = true
//           // prime = false;
//       } else {
//         prime = false
//       }
  
 
//   let sequence = []
//   for(let j =1; j <= Math.sqrt(num); j++){
//       if(prime = false) 
//     if(num % i == 0){
//       console.log (sequence);
//     }
//   }
//   return prime && (num > 1);
// }
// }
// console.log(isPrime(12));


// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i=2; i <=Math.sqrt(num);i++){
//     if (num % i === 0){
//       return false;
//     }
//   }
//   return true;
// }

// function findNthPrime(n) {
//   let count = 0;
//   let num = 2;
//   while  (count < n) {
//     if (isPrime(num)) {
//       count ++
//     }
//     num ++
//   }
//   return num - 1
// }
// console.log(findNthPrime(10));
// console.log(findNthPrime(100));

