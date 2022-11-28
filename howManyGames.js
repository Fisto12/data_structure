function howManyGames(p, d, m, s) {
    // Return the number of games you can buy
    let number = p;
    for(let i=p; i>0; i--){
      number -= i+3;
     console.log(number);
    }
    

}
console.log(howManyGames(20,3,6,70));