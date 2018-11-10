// MERGE SORT
// BIG O

// TIME = BEST / AVG / WORST = O(n log n)
// SPACE = O(n) it takes up a lot more space than bubble or any of the earlier sorts.

// it is a combination of two things - merging and sorting
// it exploits the fact that arrays of 0 or 1 element are always sorted.
// it decomposes the array until it is composed of 0 or 1 element arrays
// then merges them back together in order and repeat until there is only one array

// first off is the merge function
function merge(a, b) {
    //combine two sorted arrays
    outArr = [];
    aIndex = 0;
    bIndex = 0;
    while (aIndex < a.length && bIndex < b.length) {
        //while we havent run out of elements of either array
        for (let i = 0; i < a.length; i++) {
            //iterate over array a
            if (a[aIndex] < b[bIndex]) {
                outArr.push(a[aIndex]); //if b is bigger, add a to out array
                aIndex++; // increment the counter
            } else {
                //if a is bigger or if they are equal
                outArr.push(b[bIndex]); // push b to the list
                bIndex++; // increment the b counter
            }
        }
    }
    while (aIndex !== a.length) {
        //if there are extra elements in a (b must have been smaller)
        outArr.push(a[aIndex]); //add them to the out array
        aIndex++;
    }
    while (bIndex !== b.length) {
        //if there are extra elements in b
        outArr.push(b[bIndex]); //add the elements to the list.
        bIndex++;
    }
    return outArr;
}

function mergeSort(arr) {
    // this recursively splits an array down until it is single elements
    // then it combines those elements while sorting them
    // in order to make one sorted list.
    if (arr.length === 1) return arr; //base case for recursion
    let center = Math.floor(arr.length / 2); // find center
    let left = mergeSort(arr.slice(0, center)); //recurse left side
    let right = mergeSort(arr.slice(center)); //recurse right side
    return merge(left, right); // combine the two together
}

mergeSort([1, 7, 3, 6, 4, 9, 2, 5, 8, 0]);
