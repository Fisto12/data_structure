function anagram(str1,str2){
 const lcase1 = str1.toLowerCase()
 const lcase2 = str2.toLowerCase()
   const sortStr1 = lcase1.split('').sort().join('')
   const sortStr2 = lcase2.split('').sort().join('')
   return sortStr1 === sortStr2
}
console.log(anagram('HellO','LOleh')); //true
//console.log(anagram('1234','42312')); //false
//console.log(anagram('qualmz','zlmuaq')); //true



