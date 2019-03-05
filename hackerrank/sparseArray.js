//https://www.hackerrank.com/challenges/sparse-arrays/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

/*
I have no idea why this is called 'sparse array'. it doesn't seem to line up with my mental image of that. I spent a lot of time trying to do this with two nested map functions and spent so long writing an elegant solution that I overlooked a crucial detail. It isn't looking if the query string is contained in the search string, it is looking to see if they are the SAME. I spent a lot of time in regex when a simple === will do. oof.
*/

// Complete the matchingStrings function below.
function matchingStrings(strings, queries) {
    let outArray = []
    let results = 0
    queries.forEach((query) => {
        results = 0
        strings.forEach((string) => {
            if (query === string) {
                results++
            }
        })
        outArray.push(results)
    })
    return outArray
}
