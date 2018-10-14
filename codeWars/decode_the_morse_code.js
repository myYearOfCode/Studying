decodeMorse = function(morseCode){
  outString = ""
  morseCode = morseCode.trim()
  let words = morseCode.split('   ')
  for (let i = 0; i < words.length; i++) {
    var word = words[i]
    var chars = word.split(' ')
    for (let j = 0; j < chars.length; j++) {
      outString += MORSE_CODE[char]
    }
    if ((i<words.length-1)){
    outString += " " //add back in non-trailing spaces
    }
  }
  return outString
}