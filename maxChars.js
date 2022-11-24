//find the number appearing the most
const chars = {};
let max= 0;
let maxChars = ''
function findMax(str){
    for(let char of str ){
       if(!chars[char]){
        chars[char] = 1
       }else{
           chars[char]++
       } 
    }
    for(let char in chars ){
      if(chars[char]>max){
           max = chars[char];
           maxChars = char
      }
    }
    return max
}
console.log(findMax([2,2,2,2,3,3,1,1,1,1,1,1,1,10]));