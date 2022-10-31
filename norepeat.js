

function findNonRepeatedNumbers(str){
   let obj = {};
   for(let elem of str){
     if(!obj[elem]){
         obj[elem]=1
     }else{
        obj[elem]++
     }
   }
   for(let elem in obj){
     if(obj[elem] === 1){
        return elem
     }
   }
   //meaning none of the strings repeat
     return -1
}
console.log(findNonRepeatedNumbers('211002222991038'));