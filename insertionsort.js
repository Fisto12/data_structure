function insertionSort(array){
  for( i = 1; i<array.length; i++){
      for(let j=i; j > 0; j--){
        if (array[j] < array[j-1]) {
            const temp = array[j]
            array[j] = array[j-1]
            array[j-1] = temp
        }else{
            break;
        }
      }
  }
  return array
}
console.log(insertionSort([1,22,3,4,2,3,76,6,44,3,89,0,1,45,69]));
