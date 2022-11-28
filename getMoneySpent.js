
function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    for(i=0; i< keyboards.length; i++){
        for(j=0; j< drives.length; j++){
            let sum = keyboards[i] + ' ' + drives[i]
            console.log(sum);
            
        }
    }

     

}

console.log(getMoneySpent([3,1], [5,2,8], 10));

//your k + d must be lesser or equal to budget
