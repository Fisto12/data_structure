function steps(n){
  //from left to right
  for(let row=0; row<n; row++){
      let stairs = '';
      for(let column = 0; column<n; column++){
        if(column <= row){
            stairs += '#'
        }else{
            stairs += ' '
        }
      }
      console.log(stairs);

  }
  
}
//console.log(steps(5));
// #   
// ##   
// ###  
// #### 
// #####


function step(n){
  //from right to left
   for(let i=0; i<n; i++){
    let stairs = ''
     for(let j=0; j<n; j++){
        if(j<n-i-1){
             stairs += ' '
        }else{
          stairs += '#'
        }
     }
     console.log(stairs);
   }
}

console.log(step(7));

//        #
//      ##
//     ###
//    ####
//   #####
//  ######
// #######
