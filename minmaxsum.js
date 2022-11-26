let arr = [1,2,3,4,5]
function miniMaxSum(arr) {
    // Write your code here
    let min = arr[0];
    let max = 0;
    let sum = 0
    let sortedarr = arr.sort((a,b)=>a-b)
    for(let i=0; i<sortedarr.length; i++){
         if(sortedarr[i] < min){
              min = sortedarr[i]
         } else if(sortedarr[i] > max){
             max = sortedarr[i]
         }
         sum += sortedarr[i];
    }
    const minimum = sum-max
    const maximum = sum-min
    return minimum+ " " + maximum
     //console.log(sum-max);    
}
console.log(miniMaxSum(arr));

[2,3,1,4,5,6,12,10]
[1+2+3+4+5+6+10+12]
