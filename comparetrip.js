// function compareTriplets(a, b) {
//     let alice = 0
//     let bob = 0
//     let draw = 0
//    for(let i=0; i<a.length; i++){
//        for(let j=0; j<b.length; j++){
//            if(a[i] < b[i]){
//              return bob++
//            }else if(a[i] > b[i]){
//                return alice++
//            }
//        }
//    }
//    return [alice,bob]
// }
// console.log(compareTriplets([10,20,2], [3,30,6]));

function compareTriplets(a, b) {
let counterA = 0,
    counterB = 0;
  draw = 0
for(let i=0;i<a.length;i++){
    if(a[i] > b[i]){
        counterA++;
    }
    else if(a[i] < b[i]){
        counterB++;
    } 
  
}

return [counterA,counterB];
}
console.log(compareTriplets([10,20,2], [3,30,20])); //logs [1,2]