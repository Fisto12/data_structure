function extraLongFactorial(n){
    let results = BigInt(1)
   for(i=n; i>0; i--){
     results *= BigInt(i)
     console.log(results);
   } 
  return results.toString()
}

console.log(extraLongFactorial(25));




