'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let inventory = {}
    ar.forEach(each => {
      console.log(each)
        if (inventory[each]) {
            inventory[each] += 1
        } else {
            inventory[each] = 1
        }
    })
    let numPairs = 0
    // man I ALWAYS get it wrong on how to get keys of an object in js.
    Object.keys(inventory).forEach((key) => numPairs += Math.floor(inventory[key]/2))
    return(numPairs)

}
sockMerchant(10, [10,20,30,20,15,20,20,15])
// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
// console.log(`a`);
//     const n = parseInt(readLine(), 10);
// console.log(`// BUG: `);
//     const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));
// console.log(`c`);
//     let result = sockMerchant(n, ar);
//
//     ws.write(result + "\n");
//
//     ws.end();
// }

// main();
