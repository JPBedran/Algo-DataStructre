class doubleLinkedList{
  constructor(value){
    this.head = {
      value = value,
      previous = null,
      next = null
    }
    this.tail = this.head;
    this.length = 1;
  }
}