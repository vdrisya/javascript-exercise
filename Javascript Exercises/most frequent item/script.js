function mostFrequent(arr) {
    let frequency = {};
    let maxCount = 0;
    let mostFrequentItem;

    for (let item of arr) {
        frequency[item] = (frequency[item] || 0) + 1;

        if (frequency[item] > maxCount) {
            maxCount = frequency[item];
            mostFrequentItem = item;
        }
    }

    return mostFrequentItem;
}

// Example usage:
let arr = [1, 2, 2, 2, 3, 3, 4];
console.log(mostFrequent(arr));  // Output: 3
