// Selection sort
// BIG O = O(n^2) BEST = O(n^2) SPACE = O(1)

// the only advantage of this method is when writing speed is very slow. Otherwise there is no advantage.

// it is similar to bubble sort, but it places the lowest values first and it swaps once per sort.

// loop through once and find the smallest element, when you get to the end you move the lowest value you found to the start.
// reuse the swap code from bubble sort.
// loop through all numbers to find the smallest value. save it's index
// when you get to the end swap the starting value and the smallest value
// repeat again starting at the next value

function selectionSort(arr) {
	let count = 0;
	console.log(arr);
	for (let i = 0; i < arr.length - 1; i++) {
		let min = i;
		for (let j = i; j < arr.length; j++) {
			if (arr[j] < arr[min]) min = j;
		}
		if (i !== min) swap(arr, min, i); //only swap if they are different
		count++;
	}
	return arr;
}

let swap = (arr, a, b) => {
	[arr[a], arr[b]] = [arr[b], arr[a]];
};

selectionSort([12, 37, 85, 36, 75, 856, 3376, 48]);
