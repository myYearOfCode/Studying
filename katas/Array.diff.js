// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
function array_diff(a, b) {
  let matchValues = []
  for (let i = 0;i<b.length; i++){
        for (let j = 0; j<a.length; j++){
            if (a[j]===b[i]){
             matchValues.push(j)
             }
        }
  }
  matchValues.sort(function(a, b){return a-b})
  let deduped_set = new Set(matchValues)
  matchValues= [...deduped_set]
  return strip_array(a,matchValues)
}

function strip_array(array, list) {
    for (let i = list.length; i>0; i--){
        let match=list.pop()
        array.splice(match,1)
    }
    return array
}
