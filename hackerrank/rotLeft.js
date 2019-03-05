//https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays&h_r=next-challenge&h_v=zen

// I'm pretty happy with this.
// it's a one-liner and it's pretty performant.
// it also came to mind pretty quickly.

// after I got it approved I looked at some comments and it seems they are thinking about large numbers of rotations, so I fixed it to have modulo so it is still constant time.
function rotLeft(a, d) {
  return a.slice(d % a.length).concat(a.slice(0,d % a.length))
}

console.log(rotLeft([1,2,3,4,5,6,7,8,9],3))
console.log(rotLeft([1,2,3,4,5,6,7,8,9],12)) //edge case - overflow
console.log(rotLeft([1,2,3,4,5,6,7,8,9],0))
console.log(rotLeft([1,2,3,4,5,6,7,8,9],-3)) // it even works on negatives!
