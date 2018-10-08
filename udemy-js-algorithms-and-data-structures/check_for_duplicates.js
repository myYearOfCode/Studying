// this is a super clean way to check for duplicates in an array
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
// by converting to a set you eliminate any duplicates, by checking 
// against the original you see if there were any to start with.