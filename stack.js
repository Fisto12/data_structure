class Stack {
    constructor() {
        this.data = [10,50,5];
    }
    add(record) {
     this.data.push(record)
    }
    pop() {
      return this.data.pop()
    }
    peek() {
        return this.data[this.data.length-1]
    }
}

const res = new Stack()
console.log(res.peek());
res.add(70);
res.add(80)
console.log(res.peek()); //80
console.log(res.pop());
