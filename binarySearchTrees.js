class Node{
  constructor(value){
    this.right = null;
    this.left = null;
    this.root = value;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }
  insert(value){
    const newNode = new Node(value);
    if(this.root===null){
      this.root = newNode
    }else{
      let currentNode = this.root;
      while(currentNode){
        if(value>currentNode.value){
          if(!currentNode.right){
            currentNode.right = newNode;
            return this
          }
          currentNode=currentNode.right
        }else{
          if(!currentNode.left){
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        }
      }
    }
  }
  lookup(value){
    // check if root exists
    if (!this.root){
      return false;
    }
    let currentNode = this.root;
    while (currentNode){
      if (value<currentNode.value){
        currentNode = currentNode.left;
      }else if(value>currentNode.value){
        currentNode = currentNode.right;
      }else if(currentNode.value == value){
        return currentNode
      }
      // this was my solution
      //   if (currentNode.value==value){
      //     return this;
      //   }
      // }else{
      //   currentNode = currentNode.right
      //   if (currentNode.value == value){
      //     return this;
      //   }
    }
    return false
  }
  remove(value){
    if(!this.root){
      return false;
    }
    let currentNode = this.root;
    while(currentNode){
      // what started as my attempt
      // if (value>currentNode.value){
      //   if (value==currentNode.right.value){
      //     currentNode.right = null;
      //     return this;
      //   }else{
      //     currentNode = currentNode.right
      //   }
      // }else{
      //   if()
      // }
      let parentNode = null;
      if (value<currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.right;
      }else if(value>currentNode.value){
        parentNode = currentNode; 
        currentNode = currentNode.left
      }else if(currentNode.value===value){
        if (currentNode.right===null){
          if (parentNode ===null){
            this.root = currentNode.left;
          }else{
            if(currentNode.value>parentNode.value){
              parentNode.right = currentNode.left;
            }else if(currentNode.value<parentNode.value){
              parentNode.left = currentNode.left;
            }
          }
        }else if(currentNode.right.left === null){
          if (parentNode === null){
            this.root = currentNode.left;
          }else{
            currentNode.right.left = currentNode.left;
            if (currentNode.value<parentNode.value){
              parentNode.left = currentNode.right;
            }else if(currentNode.value>parentNode.value){
              parentNode.right = currentNode.right;
            }
          }
        }else{
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while(leftmost.left !== null){
              leftmostParent = leftmost;
              leftmost = leftmost.left;
          }
          // change tree sides
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode ===null){
            this.root = leftmost;
          }else{
            if(currentNode.value<parentNode.value){
              parentNode.left = leftmost;
            }else if(currentNode.value>parentNode.value){
              parentNode.right = leftmost;
            }
          }   
        }
      return true;
      }
    }
  }
}