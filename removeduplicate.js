//remove duplicate arrays

const arr = [1,2,3,4,4,5,5,5,8,8,8,8,8,8,8,10,10,10]
const b= []
function removeDups(arr) {
         const b=[]
       for(let i=0; i <arr.length; i++){
        //if index of arr[0] which is 1 is not in array b, then push it into array b
        if(b.indexOf(arr[i]) === -1 ){
             b.push(arr[i])
        }
       }
       return b
}

   console.log(removeDups(arr));