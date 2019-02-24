//https://www.codewars.com/kata/greed-is-good/train/javascript
//written up here https://myyearofcode.com/2019/02/23/2-23-codewars/
let returnHash = (dice) => {
  countHash = {'1':0,'2':0,'3':0,'4':0,'5':0,'6':0}
  dice.map((each) => {
      countHash[each] += 1
  })
  return countHash
}

let calcScore = (countHash) => {
  let score = 0
  if (countHash[1] > 2) {
    countHash[1] -= 3
    score += 1000
  };
  [2,3,4,5,6].map(roll => {
    if (countHash[roll] > 2) {
      countHash[roll] -= 3
      score += (roll*100)
    }
  })
  score += ((countHash[1]*100) + (countHash[5]*50))
  return score
 }

function score( dice ) {
  return calcScore(returnHash(dice))
}
