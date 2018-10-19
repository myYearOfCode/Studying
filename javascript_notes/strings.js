STRING FORMATTING
// template literals as a way of making strings.
// use backticks and ${} to  put variables in strings.

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

// in console.log and console.debug there is a second way of 
// inserting into a string
console.log('my string here %s',stringVariableName)
	%O Pretty-print an Object on multiple lines.
	%o Pretty-print an Object all on a single line.
	%s String.
	%d Number (both integer and float).
	%j JSON. Replaced with the string '[Circular]' if the argument contains circular references.
	%% Single percent sign ('%'). This does not consume an argument.


STRING METHODS
string.length
// returns length
string.indexOf("findMe", optionalStartingPosition)
// returns the index of the first occurrance
string.lastIndexOf("findMe", optionalStartingPosition)
// returns the index of the last occurrance
string.search("findMe")
// similar to indexOf, but this
// does NOT have an optional starting position
// does allow regex

EXTRACTING STRING PARTS
string.slice(start,end)
// non-inclusive end.
// returns the extracted part in a new string
// if the second bit is left off it will run to the end of the str.
// negative indicies are allowed
string.substring(start, end)
// exactly like slice, but this doesn't allow negative indexing. BORING
string.substr(start, length)
// the length is an interesting feature.
// if the first arg is neg., it will start at end and use that arg as length
string.replace("school", "bootcamp")
// returns a new version of the string with the first string replaces with #2
// by default it only works on the first match
// by defaule it is case sensitive
// to change those things use regex and /i (case) or /g (greedy) flags
string.toUpperCase()
string.toLowerCase()
// i bet you can figure these two out.
string.concat(one, or, more, " " , strings)
// mush together multiple strings.
// same as the plus operator.
string.trim()
// remove whitespace from both sides of a string.

EXTRACTING STRING CHARACTERS
string.charAt()
// returns the char at the specified index
string.charCodeAt()
// returns the character code at the specified index
string[0]
// returns the char at a specified index.
// called property access.
string.split(",")
// split a string into an array based on commas. if the parens contain ""
// then the new array is just single characters.
string.match("toMatch")
// returns the # of matches.
string.repeat(5)
// returns a new string with 5 copies of the input string in it.
string.startsWith()
// does the string start with the search term?

String(5) // => "5"
//creating a string from a non-string value

STRING ESCAPING
Code Output
\'      single quote
\"     double quote
\\     backslash
\n     newline
\r     carriage return
\t     tab
\b    backspace
\f     form feed



