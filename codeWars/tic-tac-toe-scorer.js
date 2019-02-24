//https://www.codewars.com/kata/525caa5c1bf619d28c000335/solutions/javascript
//written up here https://myyearofcode.com/2019/02/23/2-23-codewars/
function isSolved(b) {
  for (let r = 0; r < 3; r++){
    if (b[r][0] === b[r][1] && b[r][0] == b[r][2] && b[r][0] !== 0) {
      return b[r][0] //== 1 ? "X" : "Y" //"row match" //
    }
  }
  for (let c = 0; c < 3; c++){
    if (b[0][c] === b[1][c] && b[1][c] == b[2][c] && b[0][c] !== 0) {
      return b[0][c] //== 1 ? "X" : "Y" //"column match" //
    }
    if ((b[0][0] === b[1][1] && b[1][1] == b[2][2] && b[0][0] !== 0)) {
      return b[0][0] //== 1 ? "X" : "Y" //"diagonal match" //
    }
    if ((b[0][2] === b[1][1] && b[1][1] == b[2][0] && b[0][2] !== 0)) {
      return b[0][2] //== 1 ? "X" : "Y" //"diagonal match" //
    }
  }
  for (let r = 0; r < 3; r++){
  console.log(b[r])
    if (b[r].includes(0)) { //test for empty spots to rule out a draw
      return -1
    }
  }
  return 0 //it must be a draw
}
