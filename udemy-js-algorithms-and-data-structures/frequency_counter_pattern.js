// frequency counter pattern. O(n)
// instead of looping through the first array and then checking for the value 
// in the second array, we can loop over each array separately.
// 
// pro tip: indexOf is the same as a for loop. keep an eye out when trying to
// find complexity
// 
// essentially, loop through the array and append each char count to a dict.
// do the same thing with the second array
// then compare the two dicts at the end.

// this can be seen in anagram questions or in similar math questions where for instance
// you are checking if one array is the square / +1 from or the square root of the other array.
// in the second instance you make both comparison dicts, then do two checks
// #1 make sure the key exists in the other dict (using whatever math you need here. ex n^2)
// #2 make sure the values (frequencies) are the same

// this can be done with one object (dict) if thesecond time through it you decrement it.

function frequency_checker(arrayA,arrayB){
	// short-circuit check for length
	if (arrayA.length !== arrayB.length){
		return false
	}
	let frequency_counterA={}
	let frequency_counterB={}
	for (let val of arrayA){
		frequency_counterA[val] = (frequency_counterA[val] || 0) + 1
		// the above line is logical or. if the first thing is false or not found
		// then don't worry about it and use 0.
	}
	for (let val of arrayB){
		frequency_counterB[val] = (frequency_counterB[val] || 0) + 1
	}
	// ok two dicts are made now
	// lets start checking them
	for (let val in frequency_counterA){
		// make sure the same keys exist in both dicts
		if (frequency_counterB[val] === -1){
			return false
		}
		// make sure the values (frequencies) match as well
		if (frequency_counterB[val] !== frequency_counterA[val]){
			return false
		}
	}	
	return true
}

function anagram_checker(stringA,stringB){
	arrayA = stringA.split("")
	arrayB = stringB.split("")
	// short-circuit check for length
	if (arrayA.length !== arrayB.length){
		return false
	}
	let frequency_counterA={}
	let frequency_counterB={}
	for (let val of arrayA){
		frequency_counterA[val] = (frequency_counterA[val] || 0) + 1
		// the above line is logical or. if the first thing is false or not found
		// then don't worry about it and use 0.
	}
	for (let val of arrayB){
		frequency_counterB[val] = (frequency_counterB[val] || 0) + 1
	}
	// ok two dicts are made now
	// lets start checking them
	for (let val in frequency_counterA){
		// make sure the same keys exist in both dicts
		if (frequency_counterB[val] === -1){
			return false
		}
		// make sure the values (frequencies) match as well
		if (frequency_counterB[val] !== frequency_counterA[val]){
			return false
		}
	}	
	return true
}