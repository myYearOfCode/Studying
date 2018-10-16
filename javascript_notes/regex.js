
regex

.test() will return true if the search term is found in the string 
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
// Returns true

.match() will actually extract the first match.
"Hello, World!".match(/Hello/); // Returns ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex); // Returns ["expressions"]

.exec() will return something that you can get the index of the search result from
var closeParen = /\)/.exec(str); 
if ((closeParen) && (str[closeParen.index-4]!="(")) { 
console.log(closeParen.index);
console.log('missing a paren')
return false 
}

/Hello/ - literal string search. case sensitive. whitespace insensitive
/Hello|Goodbye/ - OR search with multiple patterns. matches "Hello" or "Goodbye". 
any number of patterns can be chained together.
/Hello/i - ignore case flag. (the /i part) case Insensitive
/Hello/g - extract multiple matches. (the /g part) Global
"." = wildcard character
[] = character classes. a way to specify allowable chars. 
 /b[aiu]g/ will accept bag, big and bug.- = when used inside of a character set 
 this allows you to specify a range. ie /[a-z]/ is all lowercase letters
[^a-z] - negate a character set with the "^".
+ = char appears one or more times consecutively. ie /s+/
* = char appears zero or more times consecutively. ie /As*/ will hit on "As", 
"Ass", and "A" because those have one, two and zero s's
greedy - expressions are greedy by default. they will find the longest sub-string 
possible that fits the expression.  
/t[a-z]*i/ will return titani when given titanic.

lazy uses the ? modifier.  /t[a-z]*?i/ will return ti when given titanic to 
search through. put the ? before the ending character or pattern.

	^ outside of a character set means to search the beginning of a string. /^beginning/
	$ allows you to find endings. /caboose$/
	/\w/ is special in js, it is equal to /[A-Za-z0-9_]/
	/\W/ is special in js, it is equal to /[^A-Za-z0-9_]/
	/\d/ is numbers only. [0-9]
	/\D/ is non-numbers only. [^0-9]
	/\s/ matches whitespace, carriage return, tab, form feed, and new line chars. [\r\t\f\n\v]
	/\S/ matches non-Whitespace.
	{3,6} quantity specifier allows you to specify the min and max that a number 
	will appear. /a{3,5}h/ note - it won't fail if you give it more of the char, it 
	just won't select it. to fail then add a negative character [^s] set after the 
	quantity specifier.
	{3,} quantity specifier lower number only. 
	{3} quantity specifier exact number only. 
	? zero or one of the preceding element
	(?=...) pos. lookahead makes sure something is present but doesn't return it.
	(?!=...) neg. lookahead makes sure something isnt present and doesn't return it.
	/(\w+)\s\1/ capture groups in parens followed by a \ and a number. these help you 
find the nth occurrence of a pattern. BUT ONLY IF YOU KNOW THE SHIT IN THE MIDDLE, 
or fake it with .* The number needs to be placed in a regex where it would be in 
the real world. ie you aren't saying "search for the fourth time this thing 
appears" you are saying "search for this phrase, then this other stuff, then the 
phrase should appear again, then other stuff..." it just saves you time of 
reusing the same search pattern.

find and replace with capture groups
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
// Returns "The sky is blue."
You can also access capture groups in the replacement string with dollar signs ($).
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
// Returns "Camp Code"


I don't understand why the \D* needs to be in the second positive lookup regex
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\D*\d{2,})/; // Change this line
let result = pwRegex.test(sampleWord);
Use look aheads in the pwRegexto match passwords that are greater than 5 chars 
long and have two consecutive digits.

note - .match and .test have reversed order for string and regexp. annoying

test if the string starts and ends with the same vowel.
const re = new RegExp(/^([aeiou]{1}).*\1$/);
re.test(abcdea') // true
