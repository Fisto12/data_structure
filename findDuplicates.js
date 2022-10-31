//find the duplicates


const arr = [1,2,3,4,4,5,5,9,10]

function findDuplicates(arr){
     const duplicates = [];
     const compare = [];
     for (let num of arr){
        if(!compare.includes(num)){
            compare.push(num)
        }else{
            duplicates.push(num)
        }
     }
     return duplicates
}
console.log(findDuplicates(arr))