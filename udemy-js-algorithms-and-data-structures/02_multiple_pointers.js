// MULTIPLE POINTERS

// these problems are about creating pointers or values that correspond to ans index or position and move towards the beginning, end or middle based on a certain condition.
// these are very efficient for solvine problems with minimal space complexity as well.

// write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both calues that sum to zero or undefined if a pair does not exist.

// the list specifically needs to be sorted.

// the naive approach would be to do nested loops. go all the way through both loops and see if any pairs add to zero.

// The less naive version is to have two pointers. one at start and one at end. if the number is above zero then move the right pointer one to the left. If the number is below zero move the left pointer right.

// there are sorting methods that do similar pointer-based movements.
// space complexity - O(N)
// time complexity - O(1)

function sumZero(arr){
	let left = 0;
	let right = arr.length - 1;
	while (left < right){ //stop when the pointers cross over
		let sum = arr[left] + arr[right];
		if (sum === 0){
			return [arr[left], arr[right]];
		} else if(sum > 0){
			right--;
		} else {
			left++;
		}
	}
}

// count unique values
// implement a function called countUniqueValues, which accepts a sorted array
// and counts the unique values in the array. there can be negative numbers in the
// array, but it will always be sorted.

// this is good for the two pointers fix, but in a different implementation.

// start one pointer (i) at 0 and another (j) at 1.
// compare the two. if i != j then increment i and j, and write j to the current
// i position. if they are the same, then only increment j.
// This has the neat effect of writing all of the unique values to the beginning 
// of the array, and when j hits the last element, i+1 is the number of unique 
// elements.

function countUniqueValues(arr){
	let i = 0;
	let j = 1;
	let count = 1;

    if (arr.length === 0){ //check for empty array
		return 0;   
    }

	while (j < arr.length){
		if (arr[i] !== arr[j]){
		    count += 1;
			i += 1;
			arr[i] = arr[j]; //this writes the uniques to the head of the array.
			j += 1;
		} else {
			j += 1;
	    }
    }
    return count;
}