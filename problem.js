 //if the age is greater or equal to 50 and intelligence is more than 30 you are premium
data = [[12,34],[70,45],[40,23],[60,14]]


// const getPremium = (lists) => {
//   return lists.map((res)=>{
//          if (res[0] >= 50 && res[1] >30 ) {
//             return 'premium'
//          }else{
//          return 'non-premium '
//          }
//    })
// }

   
//another solution
const getPremium = (list)=>{
    return list.map(([age,IQ])=> age>=50 && IQ >30 ? 'premium' : 'non-premium')
}

console.log(getPremium(data));



const sortNUum = [66,3,22,10,12,3,6,7,3,1,1,90,45,1000]
//make sure to add two lowest positive integer

const addTwoLowestNumber = (numbers) =>{
    const [firstNum,secondNum] = numbers.sort((a,b)=>a-b)
    return firstNum + secondNum
}

 console.log(addTwoLowestNumber(sortNUum));
const object=[
    {name:'fisto',age:10},
    {name:'ope',age:30},
    {name:'tosin',age:40},
    {name:'tayo',age:50},
]


const sortAge = object.sort((a,b)=>a.age-b.age)

console.log(sortAge);