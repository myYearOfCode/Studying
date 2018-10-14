
function duplicateEncode(word){
  charArray={}
  outString=""
  word=word.toLowerCase()
  for (let i=0; i<word.length; i++){
  // make word into a character frequency array
    if (word[i] in charArray){
      charArray[word[i]] = charArray[word[i]] + 1 
    } else {
    charArray[word[i]] = 1
    }
  }
  for (let i=0; i<word.length; i++){
  // analyze frequency array and make output
    if (charArray[word[i]]>1){
      outString += ")"
    } else {
      outString += "("
    }
  }
  return outString
}

(duplicateEncode("din"))//,"(((");
(duplicateEncode("recede"))//,"()()()");
(duplicateEncode("Success"))//,")())())","should ignore case");
(duplicateEncode("(( @"))//,"))((");
