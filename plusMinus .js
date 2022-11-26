function plusMinus(arr) {
    // Write your code here
    let count = arr.length;
    let positiveCountAvg = (arr.filter(x=>x>0).length)/count
    let negativeCountAvg = (arr.filter(x=>x<0).length)/count
    let zeroAvg = (arr.filter(x=>x==0).length)/count
    return positiveCountAvg.toFixed(6) + '\n' + negativeCountAvg.toFixed(6) + '\n' + zeroAvg.toFixed(6)

}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
//0.500000
//0.333333
//0.166667