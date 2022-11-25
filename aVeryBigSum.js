function aVeryBigSum(ar) {
    // Write your code here
    let num = 0
    for(i=0; i<ar.length;i++){
        num += ar[i] 
    }
     return num;
}
console.log(aVeryBigSum([1000000001, 1000000002 ,1000000003, 1000000004, 1000000005]));
