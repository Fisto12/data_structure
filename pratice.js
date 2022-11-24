///bubble sort
//to implemet bubblesort
let arr = [2,1,20,-20,-50,-100,1000,202,150,250,120,80,90,3000,11,34,10]
function bubblseSort(arr){
    for(let i=0; i< arr.length; i++){
         for(j=0; j<arr.length-i-1; j++){
            if(arr[j]>arr[j+1]){
               let lesser = arr[j+1]
               arr[j+1] = arr[j]
               arr[j] = lesser
            }
         }
    }
              return arr

}
   //console.log(bubblseSort(arr));
//bubblesort
//mergesort
  function mergeSort(arr){
      if(arr.length === 1){
        return arr
      }
      let mid = Math.floor(arr.length/2)
      let left = arr.slice(0,mid)
      let right  =arr.slice(mid)
      return merge(mergeSort(left),mergeSort(right))
  }
  function merge(left,right){
    let result = []
      while(left.length && right.length){
           if(left[0]< right[0]){
             result.push(left.shift())   
           }else{
            result.push(right.shift())
           }
      }
        return [...result, ...left, ...right]
  }
  console.log(mergeSort([2,1,20,-20,-50,-100,1000,202,150,250,120,80,90,3000,11,34,10]));
//mergesort
//selectionsort
  function selectionsort (arr2) {
       for(let i = 0; i<arr2.length;i++){
        let minIndex = i
        for(let j= i+1; j<arr2.length; j++){
              if(arr[j] < arr[minIndex]){
                minIndex = j
              }
            }
             if(minIndex !== i){
        let lesser = arr[minIndex];
        arr[minIndex] = arr[i]
        arr[i] = lesser
       }
       }
      
       return arr
  }
  console.log( selectionsort([20,10]));
//selectionsort
//array chunk
//palindrome
let str2 = '12121'
function palindrome(str2){
    const reversedStr = str2.split('').reverse().join('').toLowerCase()
    return reversedStr === str2
}
console.log(palindrome(str2));

//palindrome
//maxchars

const str = 'aaabbceedddddawpprre'
let max = 0;
let maxchars = ''

 function getMax(str){
  let chars = {};
  for(let char of str){
      if(!chars[char]){
        chars[char] = 1
      }else{
        chars[char]++
      }

  }
   for(let char in chars){
          if(chars[char]>max){
            max = chars[char];
            maxchars = char
          }
      }
        
           return maxchars

 }
    console.log(getMax(str));
//maxChars
//remove duplicate
const str4 =  [1,1,1,1,1,1,3,2,7,8,3,4,4,4,2,'a','a','a',4,5,5,5]
function removeDuplicate(str4){
  const dups = [];
  for(let elem of str4){
    if(dups.indexOf(elem) === -1){
        dups.push(elem)  
    }
  }
  return dups
}
  console.log(removeDuplicate(str4));
//remove duplicate
//reverse
let str3 = '1 love you'
function reverseString(str3){
  const res = []
  for(let i=str3.length; i>=0; i--){
      res.push(str3[i])
  }
  return res.join(' ')
}
console.log(reverseString(str3));
//reverse
//capitalize
const str5 = 'i love you so much'
function capitalize(str5){
  let arr = []
   for(let elem of str5.split(' ')){
        arr.push(elem[0].toUpperCase() + elem.slice(1))
   }
   return arr.join(' ')
}
      console.log(capitalize(str5));
//capitalize

//return most frequent character


const students=[
  {name:'ayo',age:19
},
   {name:'fisayo',age:9
},
  {name:'kola',age:100}
]
function bubbleSort(students){
   for(let i=0; i<students.length-1; i++){
    for(let j=0; j<students.length-1-i; j++){
     if(students[j]>students[j+1]){
      let temp = students[j];
      students[j]=students[j+1]
      students[j+1]=temp
     }
    }
   }
   return students
}
console.log(bubbleSort(students));