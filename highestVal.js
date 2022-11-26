let arr = [20,1000,89,34,99,0,1000,400,123,444,1000000];

function highestValue(arr){
   let max = 0;
   for(let i = 0; i<arr.length; i++){
     if(arr[i] > max){
         max = arr[i]
     }
   }
   return max
}
console.log(highestValue(arr)); //1000000