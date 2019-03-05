// wtf are hackos? why do I need to spend these in order to see the tests I am failing? This feels like a shitty version of candy crush.
let input1 = [
[1, 1, 1, 0, 0, 0],
[0, 1, 0, 0, 0, 0],
[1, 1, 1, 0, 0, 0],
[0, 0, 2, 4, 4, 0],
[0, 0, 0, 2, 0, 0],
[0, 0, 1, 2, 4, 0]
]

let input = [
[0, -4, -6, 0, -7, -6],
[-1, -2, -6, -8, -3, -1],
[-8, -4, -2, -8, -8, -6],
[-3, -1, -2, -5, -7, -4],
[-3, -5, -3, -6, -6, -6],
[-3, -6, 0, -8, -6, -7]]

let max = 0
let count = 0
for (let x = 0; x < (input[0].length-2); x++){
  for (let y = 0; y < (input.length-2); y++){
    let sum = input[x][y]+input[x][y+1]+input[x][y+2]+input[x+1][y+1]+input[x+2][y]+input[x+2][y+1]+input[x+2][y+2]
    count++
    console.log(sum, count)
    console.log(count);
    max = sum > max ? sum : max
  }
}
console.log(max)
