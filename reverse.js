/// create a function that reverses a string
// "I LOVE YOU MY DEAR"
function reverseString(str){
   if(!str || typeof str !== 'string' ){
      return 'cannot perform this operation'
   }else{
    const reversed = [];
    const totalLength = str.length
    for(let i =  totalLength; i>=0; i-- ){
       reversed.push(str[i])
    }
     return reversed.join('')
   }
     
} 
console.log(reverseString('HELLO MY PEOPLE'))