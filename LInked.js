//simple linkedlist
const nodeone = {
    data:123
};
const nodeTwo={
    data:456
};

nodeone.next = nodeTwo

console.log(nodeone);


class Node {
   constructor(data, next = null){
    this.data = data;
    this.next = next;
   }
}

class LinkedList {
    constructor(){
        this.head = null;
    }
}
const list = new LinkedList();
list.head = new Node(10)
console.log(list);
