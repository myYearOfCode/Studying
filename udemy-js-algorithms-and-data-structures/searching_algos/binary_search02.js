// binary search is O(logN)
//NEEDS to be a sorted list of else it won't work
// can be done iteratively or recursively' 
function binarySearch(arr,val){
  let left= 0
  let right = arr.length-1
  let middle = Math.floor((left + right) / 2)
  while (arr[middle] !== val){
    // if (val === arr[middle]) return middle
    //should I check for left and right here as well?
    if (val < arr[middle]){
        right = middle -1
    } else {
        left = middle +1
    }
    middle = Math.floor((left + right) / 2)
  }
  return -1
}

debug(binarySearch([1,2,3,4,5],2))