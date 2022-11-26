let arr = [
  [1, 2, 3], 
  [3, 4, 9],
  [5, 6, 10]
];   c2r0,c2r1,c0,r0
//3+4+5  = 12
//1+4+10 = 15
//absolute of 12-15 =3
function diagonalDifference(arr) {

    var n = arr.length; 
    var d1 = 0;
    var d2 = 0;
  for(var i=0; i<n; i++){
     for(var j=0; j<n; j++){
         if(i === j) {
           d1 += arr[i][j];
         }
         if(i + j === n - 1){
            d2 += arr[i][j];
         }
      }
  }
  return Math.abs(d1 - d2);
}
console.log(diagonalDifference(arr)); //logs 3
