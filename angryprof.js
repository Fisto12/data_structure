function angryProfessor(k, a) {
    // Write your code here
    let early =a.filter(x =>x <= 0).length
    //if early is equal or more than threshold then NO class aint canclled
     if(early >= k){
        return 'NO'
     }else{
        return 'YES'
     }

}

console.log(angryProfessor(3,[-1,-3,4,2])); //YES
console.log(angryProfessor(2,[0,-1,2,1,9])); //NO