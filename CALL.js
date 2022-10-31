const obj1 = {
    name:'dragon',
    health:100,
    heal(num1,num2){
         return this.health += num1 + num2
    }
}

const obj2 = {
    name:'chicken',
    health:30,
  
}
console.log(obj2);
 obj1.heal.call(obj2,20,50)
 console.log(obj2);

 //apply takes array
  obj1.heal.call(obj2,[20,50])
 console.log(obj2);

 //bind
 const healChiken = obj1.heal.bind(obj2,20,50)
 console.log(healChiken( ));