// const nodeone = {
//     data:123
// };
// const nodetwo = {
//     data:456
// };

// nodeone.nextNode = nodetwo
// console.log(nodeone);
//{ data: 123, nextNode: {data: 456} }

//insert node
class Node {
   constructor(data,next=null){
   this.data = data;
   this.next = next
   }
}
class LinkedList {
 constructor(){
   this.head = null
 }
 insertFirst(data){
    this.head = new Node(data,this.head)
 }
 size(){
    let counter = 0;
    let node = this.head
    while(node){
        counter++
        node= node.next
    }
    return counter
 }
 getFirst() {
    return this.head
 }
 getLast(){
    if(!this.head){
     return null
    } 
    let node = this.head
    while(node){
   if(!node.next){
     return node
   }
   node = node.next
    }
 }
 clear(){
    this.head = null
 }
}

const list = new LinkedList();
list.head =  new Node(10);
list.insertFirst(15);
list.insertFirst(45);
list.insertFirst(55);
list.insertFirst(65);
    console.log(list)
    //{ head: Node {data: 15 next: Node {data: 5, next: null} }
console.log(list.getFirst());
console.log(list.getLast());
console.log(list.size());


function midpoint(list){
    let slow  = list.getFirst();
    let fast = list.getFirst();
    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next
    }
    return slow
}
console.log(midpoint(list));