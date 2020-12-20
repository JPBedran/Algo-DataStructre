var numbers = [99,44,6,2,1,5,63,87,283,4,0]
// PRIMEIRO QUE EU FIZ
// function selectionSort(arr){
//   const length = arr.length;
//   for (let i=0;i<length; i++){
//     for(let j=0;j<length; j++){
//         if(arr[j]<arr[i]){
//           let t = arr[i]
//           arr[i] = arr[j]
//           arr[j]=t;
//       }
//     }
//   }
//   return arr
// }

// CORRETO POR TEORIA
function selectionSort(arr){
  const length = arr.length;
  for (let i=0;i<length; i++){
    let min = i
    console.log("Primeiro i: ",i)
    // console.log(min)
    let temp = arr[i]
    for(let j=i+1;j<length; j++){
      console.log("seg i: ",i,min)
      // FIRST MISTAKE WAS THIS
      // WAS DOING ARR[I] INSTEAD OF ARR[MIN]
      if(arr[j]<arr[min]){
        min = j 
      }
    }
    arr[i]=arr[min]
    arr[min]=temp
  }
  return arr
}
console.log(selectionSort(numbers))