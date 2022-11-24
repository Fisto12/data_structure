let characterD= {};
let s = 'abbbadeeiuee'
let maxchar = '';
let max = 0

for(let i=0; i<s.length; i++){
     const char = s[i];
     if(!(/[a-z]/.test(char)))continue
     if(!characterD[char]){
         characterD[char] = 1
     } characterD[char]++
    // characterD[char] = (characterD[char] || 0) + 1;
     //console.log(characterD);
     if(characterD[char] > max){
        max = characterD[char];
        maxchar = char
     }
     console.log(maxchar);
}
