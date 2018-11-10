// binary_search
// ONLY WORKS ON SORTED ARRAYS numbers - numeric strings - alphabetical
// split array into two, then see if input is greater than or less than the middle point
// this ends up being a log n time complexity O(N)
// This was previously called "divide and conquer" as a strategy / pattern
// 
create a left and right pointers. 
create a middle between those two. you can average the indecies of the pointers and
average them. You can round up or down, but do it consistently.
if the input number is greater than the middle, move the left to the middle and repeat.
if the input number is less than the middle, move the right to the middle and repeat.
could this be done recursively? should it be done recursively?

