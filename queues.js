class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek(){
    
  }
  enqueue(){
    const newNode = new Node(value)
    if (this.length==0){
      this.first = newNode;
    }
    this.last = this.first;
    this.length++
  }
  dequeue(){

  }
}