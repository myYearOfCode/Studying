//MUTATING ARRAY METHODS
///////////////////////////////////////////////////////////////////////////////
array.push()
// add an element to the end of the array
array.unshift()
// add an element to the beginning of the array (really slow compared to push)
array.pop()
// remove element from the end and return it
array.shift()
// remove element from the beginning and return it (really slow compared to pop)
array.splice()
// two things: 
// 	delete an element or elements from an array
// 	and optionally insert elements into the array
	// ex:
	// array.spice(startFromThisIndex, removeThisNumberOfElements, 
					// addThisElement, addThisElement,...)
array.reverse()
	// reverses the array in-place
array.sort()
	// sorts the array alphabetically
	// for numeric sort 
			array.sort((a, b) => a - b); // For ascending sort
			array.sort((a, b) => b - a); // For descending sort
// NON-MUTATING ARRAY METHODS
///////////////////////////////////////////////////////////////////////////////			
array.concat()
//combine two or more arrays
array.slice( startFromThisIndex, copyThisNumberOfElements )
//copies a portion of an array and makes a new array out of it
array.join()
//combine elements in an array into a string.
//default is to put a , between elements, but anything passed in will work.
array.indexOf(arrayElement, startFromIndex)
//returns the 1st index of the element, starting at the optional startFromIndex
array.lastIndexOf(arrayElement, startFromIndex)
//returns the index of the last matching element, starting at the optional startFromIndex
array.forEach()
// this is just a shorter way to write a for loop, and it is similar to map,
// but forEach does not return a value.
// this is almost impossible to escape (without throwing an exception)
// if you need to escape, consider every() or some().
array.every()
// this takes in a method that contains a bool test and returns true if all of 
// the elements pass the test.
array.some()
// this is like every, but it returns true if any element passes the test.
array.map()
// this method takes a function and executes it on every element in the array.
// it returns a new array with the outputs of the function
array.filter()
// this runs a function on each element and then if the function returns true
// it adds the element to a new array.
array.reduce()
// this tries to run a function on an array and end up with a single value.
// adding and averaging are simple use cases.
