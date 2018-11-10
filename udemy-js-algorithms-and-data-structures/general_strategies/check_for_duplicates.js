// this is a super clean way to check for duplicates in an array
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
// by converting to a set you eliminate any duplicates, by checking
// against the original you see if there were any to start with.

// these are two other ways to solve this

// areThereDuplicates Solution (Frequency Counter)
function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

// areThereDuplicates Solution ( Multiple Pointers )
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}
