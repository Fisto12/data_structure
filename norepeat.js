

function findNonRepeatedNumbers(str){
   let obj = {};
   for(let elem of str){
     if(!obj[elem]){
         obj[elem]=1
     }else{
        obj[elem]++
     }
   }
   return obj
}
console.log(findNonRepeatedNumbers('1333222333'));