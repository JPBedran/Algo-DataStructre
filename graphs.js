class Graph{
  constructor(){
    this.numberOfNodes = 0;
    this.adjacentList={

    }
  }
  addVertex(node){
    // actual node
    this.adjacentList[node]=[];
    this.numberOfNodes++;
  }
  addEdge(node1,node2){
    // connection between node 1 and 2
    this.adjacentList[node1].push(node2)
    this.adjacentList[node2].push(node1);
  }
  showConnections(){

  }
}