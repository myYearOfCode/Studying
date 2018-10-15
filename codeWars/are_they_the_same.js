//Are they the "same"?
// https://www.codewars.com/kata/are-they-the-same/train/javascript
function comp(array1, array2){
  if (array1 === null || array2 === null) return false
  if (array1.length !== array2.length) return false

// console.log(array1.sort(function(a, b){return a-b}))
// console.log(array2.sort(function(a, b){return a-b}))
  let freqObj={}
  array1.forEach((element) => {
    freqObj[element] ? freqObj[element] += 1 : freqObj[element] = 1
  })
  let exitVal = false
  console.log(freqObj)
  array2.forEach((element) => {
    if (freqObj[Math.sqrt(element)] in array1){
      freqObj[Math.sqrt(element)] -= 1 
      console.log(freqObj)
    } else {
      return false
    }
  })
  return true
}