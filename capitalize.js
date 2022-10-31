const str = 'i love you'
console.log(str.split(' ')[0]); //['i', 'love', 'you']
//console.log(str.split('')); //['i', ' ', 'l', 'o', 'v', 'e', ' ', 'y', 'o', 'u']

const worded = 'hello';
function capitalize(str){
    const words = [];
    for(let word of str.split(' ')){
    words.push(word[0].toUpperCase() + word.slice(1) )
    }
    return words.join(' ')
}
  console.log(capitalize('i love you')); // I Love you
