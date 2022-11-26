// function birthdayCakeCandles(candles) {
//     // Write your code here
//     let count = 0
//     let max = 0
//      for(let i=0; i<candles.length; i++){
//            if( candles[i] > max ){
//                  max = candles[i]
//                  count = 1 
//            }else if(candles[i] === max){
//                          count++     
//            }
//      }
//      return count
// }

function birthdayCakeCandles(arr) {
    // Step 1
    let max = 0;
    let counter = 0;

    // Step 2 (a)
    arr.forEach(item => {
        // Step 3
        if (item > max) {
            max = item;
            counter = 1;
            // Step 2 (b)
        } else if (item === max) {
            counter++;
        }
    });

    return counter;
}
console.log(birthdayCakeCandles([3,2,3,0,2,1,3,3,4,4,5,1,1,1,1,1,1,10]));