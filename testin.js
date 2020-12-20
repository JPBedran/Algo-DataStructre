class ReverseNode{
  constructor(value){
    this.value = value
    this.parent = null;
    this.right = null;
    this.left = null;
  }
}
class ReverseTree{
  constructor(){
    this.root = null
  }
  insert(value){
    const newNode = new ReverseNode(value)
    if (!this.root){
      this.root = newNode
    }else{
      let currentNode = this.root
      while(currentNode){
        currentNode.parent =
        currentNode.parent.value = [currentNode.value,currentNode.right.value]
      }
    }
  }
}
// tree = new ReverseTree
// tree.insert([2])
// console.log(tree)
node = new ReverseNode([2])
node2 = new ReverseNode([1])
node1 = new ReverseNode()
node1.right = node
node1.left = node2
node1.value = [node1.right.value, node1.left.value]
console.log(node1)