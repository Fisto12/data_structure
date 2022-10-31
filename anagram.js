function anagram(str1,str2){
   const sortStr1 = str1.split('').sort().join('').toLowerCase();
   const sortStr2 = str2.split('').sort().join('').toLowerCase();
   return sortStr1 === sortStr2
}
console.log(anagram('hello','loleh')); //true
console.log(anagram('1234','42312')); //false
console.log(anagram('qualmz','zlmuaq')); //false