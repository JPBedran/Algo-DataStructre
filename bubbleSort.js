var numbers = [99,44,6,2,1,5,63,87,283,4,0]

function bubbleSort(arr){
  const length = arr.length;
  for (let i=0;i<length; i++){
    for(let j=0;j<length; j++){
        if(arr[j]<arr[i]){
          let t = arr[i]
          arr[i] = arr[j]
          arr[j]=t;
      }
    }
  }
  return arr
}
console.log(bubbleSort(numbers))