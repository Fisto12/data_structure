function countPositiveNum(arr){
    //count number of positive and divide by total
      let positiveCount = (arr.filter(x=>x>0).length/arr.length).toFixed(6) //0.50000
      let negativeCount = (arr.filter(x=>x<0).length/arr.length).toFixed(6) 
      let zeroCount = (arr.filter(x=>x===0).length/arr.length).toFixed(6)
      console.log(positiveCount + '\n' + negativeCount + '\n' + zeroCount);
      //let positiveCountDec = positiveCount.toFixed(6)
      
}
console.log(countPositiveNum([3,-2,5,7,0,-5]));

//0.500000
//0.333333
//0.166667