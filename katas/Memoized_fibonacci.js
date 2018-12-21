// https://www.codewars.com/kata/529adbf7533b761c560004e5/train/javascript
//
// Problem Context
// The Fibonacci sequence is traditionally used to explain tree recursion.
//
// function fibonacci(n) {
//     if(n==0 || n == 1)
//         return n;
//     return fibonacci(n-1) + fibonacci(n-2);
// }
// This algorithm serves welll its educative purpose but it's tremendously
// inefficient, not only because of recursion, but because we invoke the fibonacci
// function twice, and the right branch of recursion (i.e. fibonacci(n-2))
// recalculates all the Fibonacci numbers already calculated by the left branch
// (i.e. fibonacci(n-1)).
//
// This algorithm is so inefficient that the time to calculate any Fibonacci
// number over 50 is simply too much. You may go for a cup of coffee or go take a
// nap while you wait for the answer. But if you try it here in Code Wars you will
// most likely get a code timeout before any answers.
//
// For this particular Kata we want to implement the memoization solution. This
// will be cool because it will let us keep using the tree recursion algorithm while
// still keeping it sufficiently optimized to get an answer very rapidly.
//
// The trick of the memoized version is that we will keep a cache data structure
// (most likely an associative array) where we will store the Fibonacci numbers as
// we calculate them. When a Fibonacci number is calculated, we first look it up in
// the cache, if it's not there, we calculate it and put it in the cache, otherwise
// we returned the cached number.
//
// Refactor the function into a recursive Fibonacci function that using a memoized
// data structure avoids the deficiencies of tree recursion Can you make it so the
// memoization cache is private to this function?

// this was my initial passing code.
let memoStore = {};

let fib_lookup = function(fib){
  if (memoStore[fib]) return memoStore[fib];
  let new_fib = fibonacci(fib);
  memoStore[fib] = new_fib;
  return new_fib;
}

var fibonacci = function(n) {
    if(n==0 || n == 1) return n; //recursion basecase
    return fib_lookup(n-1) + fib_lookup(n-2);
}

//while writing this up I re-read the instructions and saw the line about keeping
// the memoized data private to the function. I rebuilt it into this by wrapping
// everything in another function. I'm not sure if that is the best way to do it,
// but it should all be private this way.

let fibonacci = function(fib) {
  let memoStore = {};

  let inner_fibonacci = function(n){
    if(n==0 || n == 1) return n; //recursion basecase
    return fib_lookup(n-1) + fib_lookup(n-2);
  };

  let fib_lookup = function(fib){
    if (memoStore[fib]) return memoStore[fib];
    let new_fib = inner_fibonacci(fib);
    memoStore[fib] = new_fib;
    return new_fib;
  };

 return fib_lookup(fib);
}

// this is when I submitted it for final and checked the other answers. It seems
// like mine worked as expected, but all of the top rated answers used IIFE for
// closure. I found this good page on IIFE and tried to refactor into using one
// of those.
// https://medium.com/@vvkchandra/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6
// but I couldn't get it quickly and I'm not 100% sure that it would even
// be an improvement.
