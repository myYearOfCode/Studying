// bubble sort - also called sinking sort
// the one use case is... sorted or nearly sorted. It can be O(n) best-case
// BIG O = O(n^2) BEST = O(n) SPACE = O(1)
// otherwise it is a mental exercise
// the largest values bubble to the top.
// optimizations
// 	(1) you don't have to compare the last n elements after n rounds.
// 	(2) if you check for swaps you may be able to exit early

// ideally define a function called swap to clean up the code.

let bubbleSort = arr => {
	for (let j = 0; j < arr.length - 1; j++) {
		let swaps = 0;
		for (let i = 0; i < arr.length - (1 + j); i++) {
			//this is one optimization
			if (arr[i + 1] < arr[i]) {
				[arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
				swaps++;
			}
			console.log(rounds);
		}
		if (swaps === 0) break; //this is the other optimization.
	}
	return arr;
};

bubbleSort([5, 4, 3, 2, 1, 6, 7, 8, 9]);
