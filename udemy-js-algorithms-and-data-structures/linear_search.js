// linear search
// is this item in this array?
// naive approach = start at the beginning and compare every item from start to end.
// indexOf includes, find, findIndex all use this naive approach
// linear search may be needed if you have unsorted data

function linearSearch(arr, val){ //O(N)
	for (let i = 0; i < arr.length; i++){
		if (arr[i]===val){
			return i
		} 
	}
	return -1
}