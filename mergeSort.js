class Node{
  constructor(value){
    this.value = value;
    this.right = null;
    this.left = null;
  }
}
class BinaryTree{
  constructor(){
    this.root = null;
  }
  insert(value){
    const newNode = new Node(value);
    if (this.root===null){
      this.root = newNode
    }else{
      let currentNode = this.root;
      while(currentNode){
        if(value>currentNode.value){
          if(!currentNode.right){
            currentNode.right = newNode; 
            return this
          }
          currentNode = currentNode.right;
        }else{
          if(!currentNode.left){
            currentNode.left = newNode;
            return this
          }
          currentNode = currentNode.left;
        }
      }
    }
  }
}


function mergeSort(arr){
  if (arr.length==1){
    return arr
  }
  let arr_length = Math.round((arr.length)/2)
  let left = arr.splice(0,arr_length)
  let right = arr
  console.log(left,right,"sort")
  return merge(
    mergeSort(right),
    mergeSort(left)
  )
}

// juntar esuqerda e direita
function merge(right,left){
  console.log(left,right)
  // let tree = new ReverseTree
  // tree.right = right;
  // tree.left
  // let new_arr = []
  // if (left >= right){
  //   new_arr = right.push(left)
  // }else{
  //   new_arr = left.push(right)
  // }
  // return new_arr
}
class ReverseNode{
  constructor(value){
    this.parent = null
    this.value = null;
    this.right = null;
    this.left = null;
  }
}
class ReverseTree{
  constructor(){
    this.root = null;
  }
  insert(value){
    const newNode = new ReverseNode(value)
    if (!this.root){
      this.root = newNode
    }else{

    }
  }
}
let arrays = [3,2,1,4,6,7];
console.log(mergeSort(arrays))

// get Array
// seperate arr in Half
// seperate half in half untill arr of one
// current element and next element and sort and join
// do to next and join
// go joining untill arr in its original size


