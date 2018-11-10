// // SLIDING WINDOW
// this pattern involves creating a window which can either be an array or number
// from one position to another.

// Depending on a certain condition, the window either increases or closes (and a 
// new window is created)

// Very useful for keeping track of aa subset of data in an array/string etc.

// this can be useful for finding patterns in strings or numbers, finding odd / even 
// numbers, or the max sum of x consecutive numbers.

// Write a function called maxSubArraySum which accepts an array of integers and a 
// number called n. The function should calculate the maximum sum of n consecutive
// elements in the array.

// the naive solution simply loops through all possible combinations of the right
// number of characters

function maxSubArraySum(arr, num){ //O(N) linear complexity
	let maxSum = 0;
	let tempSum = 0;
	if (arr.length < num) return null;
	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
	}
	tempSum = maxSum;
	for (let i = num; i < arr.length; i++) {
		tempSum = tempSum - arr[i - num] + arr[i];
		maxSum = Math.max(maxSum, tempSum)
	}
	return maxSum;
}

// this strategy is pretty smart because as the window moves it is subtracting the 
// left number that is newly outside of the window and adding the right number.
// that is so much better than adding all of the numbers every time.