let arr = [20,1000,89,34,99,0,1000,400,123,444,1000000,-50];

function lowestValue(arr){
   let min = arr[0];
   for(let i = 0; i<arr.length; i++){
     if(arr[i] < min){
         min = arr[i]
     }
   }
   return min
}
console.log(lowestValue(arr)); //-50


console.log(arr.sort((x,y)=>x-y));
