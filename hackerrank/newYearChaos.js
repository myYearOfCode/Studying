
// https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays&h_r=next-challenge&h_v=zen
// lineState = [2,1,5,3,4]
lineState = [2,5,1,3,4]
lineState3 = [1, 2, 5, 3, 7, 8, 6, 4]
function minimumBribes(lineState) {
  let shortCounter = 0;
  let swaps = 0
  let j;
  for (let i = 0; i < lineState.length-1; i++){
    // j = i + 1
    console.log(`i = ${i}`);
    if (lineState[i] > lineState[i+1]){
      // console.log(`${lineState[i]} ${lineState[j]}`);
      // console.log(`before ${lineState}`)
      shortCounter++
      swaps++
      lineState = lineState.slice(0,i).concat(lineState[i+1], lineState[i], lineState.slice(i+2))
      // console.log(`after ${lineState}`)
      if (shortCounter > 2){
        console.log("Too chaotic")
      }

    } else {
      // console.log(`no swap needed: ${lineState[i]} < ${lineState[j]}`);
      shortCounter = 0
    }
  }
  console.log(swaps)

}

console.log(minimumBribes(lineState));


// 1 2 5 3 7 8 6 4
// 1 2 3 7 5 6 4 8
// 1 2 3 5 6 4 7 8
12345
12354
12534
12354
13254

13254
12354
12345
