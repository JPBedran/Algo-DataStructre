class linkedList{
  constructor(value){
    this.head = {
      value = value,
      next = null
    }
    this.tail = this.head;
    this.length = 1;
  }
  append(value){
    const newNode = {
      value = value,
      next = null
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value){
    const newNode = {
      value = value,
      next = null
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++
    return this;
  }
  traverse(index){
    let count = 0;
    let currentNode = this.head;
    while (count <= index){
      currentNode = this.head.next;
      count++;
    }
    return currentNode;
  }
  insert(index,value){
    const newNode = {
      value = value,
      next = null
    }
    let targetNode = traverse(index-1);
    newNode.next = targetNode.next;
    targetNode.next = newNode;
    this.length++;
    return this;
  }
}
linkedList(10)
console.log(linkedList)