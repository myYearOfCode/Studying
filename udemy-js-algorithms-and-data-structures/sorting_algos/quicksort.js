quicksort
BIG O
BEST / AVG = O(nlogn)
WORST = O(n^2)

pick the first element as a pivot (this has implications, but they have not yet been explained)
IF the list is already sorted or partially sorted, the pivot will always be the minimum element, so you will only sort one element per round. to avoid this, do a random number or pick a number in the middle.
make a var to keep track of the number of swaps. (ie pivot index) this can be 1 if we picked index 0 to be the pivot
iterate through the entire array
compare the nth element to the pivot.
	if it is smaller, swap it with the pivot index element (the first number in the list that is more than the pivot)
	then increment the swap count
	if it is not smaller, move on to the next element
at the end, swap the index with the last element that is less than the pivot. this is an opportunity for an oboe, watch out.

practically speaking, there is a function that returns a split but not sorted list that is called pivot. Since this sort is done in-place it doesn't need to be merged back together. This pivot function is put in a recursive function with a left and right argument that have default values. That is so the first time it is run it will run on the whole array. It finds the pivot by running pivot. Next it runs itself on the left side (start up to the pivot, but not including it) and right side (one after the pivot to the end). WRAP BOTH THE left and right recursive calls in a while loop that is checking for the right and left values to not be the same. this is checking if the sub array length passed to the recursive function is one element long. 
after that while loop, return the array. (BASE CASE)