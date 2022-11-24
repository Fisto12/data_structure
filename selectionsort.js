
function selectionSort(arr){
   // from i=o to <arr length
      for(i = 0; i<arr.length; i++){
         //assume that the value of i is the least in the array unless otherwise
          let minIndex = i
          for(j=i+1; j<arr.length; j++){
              if(arr[j] < arr[minIndex]){
                minIndex = j;
              }
          }
          if(minIndex !==  i){
             let lesser = arr[minIndex]
             arr[minIndex] = arr[i]
             arr[i] = lesser
          }
      }
      return arr
}
 console.log(selectionSort([-0.02491,-0.04309,-0.04933,-0.23020,-0.10056,-0.02011]));
  //console.log(selectionSort([-0.0456,-0.02645,-0.09310,-0.47508,-0.43703,-0.07019,-0.02030]));