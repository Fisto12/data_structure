let s ='aba' 
let n = 10

function repeatedString(s){
   let strlength = s.length; //3
   let count = 0;
   for(let i=0; i<strlength; i++){
      if(s.charAt(i) === 'a'){
       count++ //2
      }
   }
   let repeatedTimes =Math.floor(n/strlength) //5  will be repeated 5times
   let strLeft = n - (repeatedTimes * strlength)  //1 will be left
   let extra = 0
   for(let i=0; i<strLeft; i++){
     if(s.charAt(i) === 'a'){
       extra++
      } 
   }
   let totalOcc = (count * repeatedTimes) + extra
   return totalOcc
}
console.log(repeatedString(s,n)); //5