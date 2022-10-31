function multiplyBy2(a,b){
  return a * b
}

const multiplyBy10 = multiplyBy2.bind(this,2)
console.log(multiplyBy10(10)); //20

const multiplyBy40 = multiplyBy2.bind(this,10)
console.log(multiplyBy40(40)); //400