function breakingRecords(scores) {
    // Write your code here
     // Write your code here
    let worst = scores[0];
    let best = scores[0]
    let record = 0;
    let poor = 0
    for(let i=0; i<scores.length; i++){
       if(best < scores[i]){
        best = scores[i];
        record++
       } else if(worst > scores[i]  ){
           worst = scores[i]
             poor++
       }
    }
    return  [record, poor];

}
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));