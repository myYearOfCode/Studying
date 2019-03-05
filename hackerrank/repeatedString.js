// method 0
// below works but is not performant. (times out on huge sets) O(n)
// there has to be a better way with less iteration.
// function repeatedString(s, n) {
//     let counter = 0;
//     let length = s.length;
//     for (let i = 0; i < n; i++){
//         counter = s[i % length] === 'a' ? counter + 1 : counter
//     }
//     return counter
// }

// method 1
// this might be O(1) because as the numeric size increases the number of operations stays the same.
// the tricky part is that as the string size increases it scales linearly. I wonder what the right way to assess this is.
function repeatedString(s, n) {
    let counter = 0;
    // count per one string.
    for (let i = 0; i < s.length; i++){
        counter = s[i] === 'a' ? counter + 1 : counter
    }
    // count per all the full strings
    counter *= (Math.floor(n/s.length))
    // count for the partial loop
    for (let i = 0; i < n % s.length; i++){
        counter = s[i] === 'a' ? counter + 1 : counter
    }
    return counter
}


console.log(repeatedString('aba', 10))
console.log(repeatedString('aba', 10000000000000000000))
