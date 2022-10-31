[[2,3,4,5,6,77,3,4,2,9,8,6,5],2] //array chunking

function chunk (arr,size){
     const chunked = []
     for(let elem of arr){
         let last = chunked[chunked.length-1]
         console.log(last); //[8 , 6]
         if(!last || last.length === size){
            chunked.push([elem])
         }else{
            last.push(elem)
         }
     }
     return chunked
}
console.log(chunk([2,3,4,5,6,77,3,4,2,9,8,6,5],2));