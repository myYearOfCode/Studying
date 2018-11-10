// recursion
// a function that calls itself.
// this is useful when you don't know the number of loops that you need 
// to do while processing something.

// this can be more complicated than a function calling itself. there can be more steps.
// ie function A can call function B which calls function A. that is one level of recursion.

// recursion is also super helpful in tree data structures and DOM traversal.

// call stack is a data structure in javascript
// think of it as a stack of papers.
// functions are added to the top of the stack and removed from the stack.
// if a function calls another function, the first function 'puts the second function 
// on top of itself in the stack'

// *base case
// *how the recursive input is modified

// NON RECURSIVE VERSION
function countDown(num){
	for(var i = num; i > 0; i--){
		console.log(i);
	}
	console.log('all done!')
}

countDown(5)

// RECURSIVE VERSION
// this doesn't pass values from one level to the next, so it is a bit simpler.
function countDown(num){
	if (num<= 0) { //base case
		console.log("All done!");
		return; //the return is what stops the recursion.
	}
	console.log(num);
	num--; // this is why the next recursion is differnet than the last one.
	countDown(num);
}

// another recursive example
// this returns values from recursive functions in order to add all pos ints <= num. 
function sumRange(num){
	if(num === 1) return 1; // base case
	return num + sumRange(num - 1); // recursive incrementer
}

// recursion pitfalls
// forgetting to include a basecase, OR setting a basecase that never happens
// returning the wrong thing, or forgetting to increment the recursive call.
// forgetting to return in the basecase. it will run infinitely. stack overflow!

// helper method recursion design pattern
// this is a design pattern commonly used with recursion
// there is an outer method and an inner method that recursively calls itself
// The non-helper function is largely there just to allow a (usually result) 
// variable to be set

// PURE RECURSION - 
// the other option of helper method recursion when you need to return an array
// this is harder to read, and not necessarily better. It does have shorter code though.

// when trying to solve with pure recursion, 
// FOR ARRAYS use methods like slice, the spread operator
// and concat that make copies of arrays instead of mutating them.
// FOR STRINGS you need to use slice, substr or substring since strings are immutable
// FOR OBJECTS use Object.assign or the spread operator.

function collectOddValues(arr){
	let newArr  = [];

	if (arr.length === 0) {
		return newArr; //base case, the first time something is returned.
	}

	if (arr[0] % 2 !== 0) {
		newArr.push(arr[0]);
	}

	newArr = newArr.concat(collectOddValues(arr.slice(1)));
	// the line above concats the current array with all of the recursive results.
	return newArr;
}

// cute little fib example
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}