// I assumed it was receiving a string as input but it is receiving an array
// that meant I didn't need to split the string into an array.
// the site is pass/fail with no console, so I had to dig into the code to see why it was breaking. Thankfully it was an easy fix.

function jumpingOnClouds(a) {
    let index = 0
    let jumps = 0
    while (index < a.length - 1) {
        if (a[index + 2] == "0") {
            jumps += 1
            index += 2
        } else if (a[index + 1] == "0") {
            jumps += 1
            index += 1
        } else {
            console.log("no valid jumps!")
        }

    }
    return jumps
}

console.log(jumpingOnClouds("0100010".split("")))
