// || is logical or.
(someVariableName || 0) // this means if the variable exists then use it, but
// use 0 if the variable is false / undefined / 0 or ""
// there is a weird pattern with ? and :
// ifThisIsTrue ? doThisPart : doThisIfItWasFalse
lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
// the line above either increments lookup[letter] or sets it to 1
