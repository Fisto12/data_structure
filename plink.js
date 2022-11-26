class Node {
    constructor(data,next=null){
       this.data=data
       this.next = next
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }
    insertFirst(data){
      this.data = new Node(this.head)
    }
}

const list = new LinkedList()
list.head=new Node(10)

console.log(list);