 
 function isPalindrome(str) {
   const reversed = str.split('').reverse().join('')
   //returns true or false
   return reversed === str
 }
  //console.log(isPalindrome('abba')); //true
 console.log(isPalindrome('deified')); //false
  //console.log(isPalindrome('abba')); //true