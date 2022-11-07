// function selectionDescSort(arr){
//     for(i=0; i<arr.length; i++){
//         let minWidth = i
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[minWidth] < arr[j]){
//                 minWidth  = j
//             }
//         }
//         if(minWidth !== i){
//            let temp = arr[minWidth];
//            arr[minWidth]= arr[i];
//            arr[i] = temp
//         }
//     }
//     return arr
// }

//   console.log(selectionDescSort([50,-10,-20,30,100,15,29,56,47,100,45,600,345]));



function selectionSort(arr){
   // from i=o to <arr length
      for(i = 0; i<arr.length; i++){
         //assume that the value of i is the least in the array unless otherwise
          let minIndex = i
          console.log(i);
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
 console.log(selectionSort([50,-10,-20,30,100,15,29,56,47,100,45,600,345]));