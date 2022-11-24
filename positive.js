function countPositiveNum(arr){
       let count = 0;
       for(let i=0; i<arr.length; i++){
           if(arr[i]>0){
             count++
           }
       }
       return count
}
console.log(countPositiveNum([3,-2,5,7,0,-5]));