 function staircase(n){
    let stairs = ''
     for(let i =1; i<n+1; i++){
          stairs += Array(i).fill('#').join('')
          stairs += Array(n-i).fill(' ').join('')
          console.log(stairs);
          stairs = ''
     }
 }

 console.log(staircase(20));