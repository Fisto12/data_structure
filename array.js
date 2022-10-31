// an array is a data structure that hold collection of values
//can contain different data type like number, object string or booleans
//they are iterable

const arr = [1,2,3,'vishwas']

console.log(arr[arr.length-1]); //vishwas

//push method

arr.push(4)
console.log(arr); // [1,2,3,'vishwas',4]

//iterate
for(let item of arr){
  console.log(item);
}

//add element to start of array
arr.unshift(0)
console.log(arr); //[0, 1, 2, 3, 'vishwas', 4]

//remove item from end
arr.pop();
console.log(arr); //[0, 1, 2, 3, 'vishwas']

//remove item from beginning
arr.shift()
console.log(arr); [1, 2, 3, 'vishwas']


//map,filter,reduce,concat,splice,slice
//splice
const number = [1,4,6,8,9,11,22]
const names = ['kola','shade','titi','fisayo','tosin']

console.log(names.splice(2,1));
console.log(names);

const result = number.splice(1,4)
console.log(result); //[4, 6, 8, 9]

const number2 = [1,2,3,4,5,6,7,8,9,10]
const response = number2.splice(2,7,'a','b')
console.log(number2); //[1, 2, 'a', 'b', 10]
console.log(response); //[3, 4, 5, 6, 7, 8, 9]


//objects

const students = {
  name:'fisayo',
  surname:'iyiola',
  department:'geology',
  level:'300lv',
  details:()=>{
    console.log('I am' + " " + students.surname + " " + students.name + " " +'from the department of' +  students.department)
  }
}
console.log(students.details());

//  lexical scoping
  //var i = 1
// (
//   function(){
//     console.log(i); //logs 1
//    (
//     function(){
//       console.log(i); //logs 1
//     }()
//    )
//   }()
// )
//console.log(i); // i is not defined


// local lexical scoping

// (
//   function(){
//     var i = 1;
//    (
//     function(){
//       console.log(i); //logs 1
//     }()
//    )
//   }()
// )
//console.log(i); // i is not defined.. vraible defined inside isnt available outside


//global lexical scoping

// (
//   function(){
//       j = 1;
//    (
//     function(){ 
//     console.log(j); //logs 1
//     }()
//    )
//   }()
// )
// console.log(j); 
// logs 1  //because variable isnt defined it is available everywhere


// VAR

// (
//   function(){
//     var j = 1
//    if(true){
//     var j = 2
//     console.log(j); //logs 2
//    }
//    console.log(j); //logs 2
//   }()
// )

//LET

(
  function(){
    let j = 1
   if(true){
    let j = 2
    console.log(j); //logs 2
   }
   console.log(j); //logs 1
  }()
)

//HOISTING
// var k = 2

//  const x =  function(){
//     console.log(k); // gives undefined not 2
//      var k =4
//   }
//   x()



//normal function 

let operation = function (num1,num2,callback){
  if(callback==='add'){
    return num1 + num2 
  }
  else if(callback==='multiply'){
      return num1 * num2 
  }
  else if(callback==='divide'){
      return num1 / num2 
  }
}

console.log(operation(50,30,'divide'))

//call back

const add = (num1,num2)=>{
  return num1 + num2 
}

const multiply = (num1,num2)=>{
  return num1 * num2 
}

const divide = (num1,num2)=>{
  return num1 / num2 
}

const MathOps = (a,b,callback)=>{
  return callback(a,b)
}
console.log(MathOps(30,20,multiply));

//or

const anotherMathOps = (num1,num2,callback) => {
  return callback(num1,num2)
}
  console.log(anotherMathOps(20,10,(a,b)=>{
    return a + b
  }));
