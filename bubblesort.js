//sort the following array [22,3,22,1,33,4,5,6,7,12,100,10000,100000,3000,40,50,90,-30,60]


function bubbleSort(arr){
   for(let i=0; i<arr.length-1; i++){
    for(let j=0; j<arr.length-1-i; j++){
     if(arr[j]>arr[j+1]){
      let temp = arr[j];
      arr[j]=arr[j+1]
      arr[j+1]=temp
     }
    }
   }
   return arr
}
const arr = [22,3,22,1,33,4,5,6,7,12,100,10000,100000,3000,40,50,90,-30,60]
  //console.log(bubbleSort(arr));
  //console.log(arr); //it mutates our sorted array so it is not pure

//to make it a pure function

function bubbleSort(arr2){
    const arr= arr2.slice()
   for(let i=0; i<arr.length-1; i++){
    for(let j=0; j<arr.length-1-i; j++){
     if(arr[j]>arr[j+1]){
      let temp = arr[j];
      arr[j]=arr[j+1]
      arr[j+1]=temp
     }
    }
   }
   return arr
}
const arr2 = [22,3,22,1,33,4,5,6,7,12,100,10000,100000,3000,40,50,90,-30,60]
  console.log(bubbleSort(arr2));
  console.log(arr2); //it mutates our sorted array so it is not pure
