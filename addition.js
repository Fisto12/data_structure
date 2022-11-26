const ar = [1,2,3,4,5,6,19,100];
const ar2 = [1,2,3,4,5,6,19,100,'a','b'];
function addNumbers(ar){
    let num = 0;
   for(let i=0; i<ar.length;i++){
    if(typeof ar[i] === 'number'){
         num += ar[i]
    }
    else{
        return 'cant perform operation'
    } 
     
   }
   return num
}
console.log(addNumbers(ar)); //140
console.log(addNumbers(ar2)); //cant perfrom operation
