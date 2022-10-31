function selectionSort(array){
   for(let i = 0; i < array.length-1; i++){
    let minIndex = i
    for(let j= i + 1; j<array.length; j++){
        if(array[j] < array[minIndex]){
            minIndex = j
        }
    }
     const temp = array[i]
     array[i] = array[minIndex];
     array[minIndex] = temp
   }
    return array
}

console.log(selectionSort([1,34,23,2,0,66,10,5,11,97,56,44,10]));