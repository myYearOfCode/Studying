
// this went pretty smoothly. I thought I could iterate over a string with forEach without splitting it. nope. I also checked for more things than needed.
// at least that helped me verify it was working right.
function countingValleys(n, s) {
  let steps = 0
  let altitude = 0
  let valleys = 0
  let hills = 0
  s.split("").forEach(each => {
    console.log(each)
      if (each == "D"){
      if (altitude == 0) {
        valleys += 1
      }
      altitude -= 1
      steps += 1
    } else {
      if (altitude == 0) {
        hills += 1
      }
      altitude += 1
      steps += 1
    }
    console.log(`${steps} steps, ${altitude} altitude, ${valleys} valleys, ${hills} hills, `)
  })
console.log(`${steps} steps, ${altitude} altitude, ${valleys} valleys, ${hills} hills, `)
return valleys
}

countingValleys(3, "UDDDUDUU")
