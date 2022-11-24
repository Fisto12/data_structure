//fibonnaci series
// function fib(n){
//    const results = [2,1,5,7,9];
//    for(i=2;i<=n;i++){
//    const a = results[i-1]
//    const b = results[i-2]
//    console.log('a',a);
//    console.log('b',b);
//    results.push(a+b);
//   }
//   return results[results.length-1]
// }
// console.log(fib(5)); // 16 is the answer


function fibbonaci(n){
   const results = [3,5];
    for(i=2;i<=n;i++){
   const a = results[i-1]
   console.log('a',a);
   const b = results[i-2]
    console.log('b',b);
   results.push(a+b);
  }
  return results[results.length-1]
}
console.log(fibbonaci(5));