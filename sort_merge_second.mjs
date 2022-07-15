function mergeSort(arr, leftIndex, rightIndex) {
    if (leftIndex < rightIndex) {
        const midIndex = parseInt((leftIndex + rightIndex) / 2);
        mergeSort(arr, leftIndex, midIndex);
        mergeSort(arr, midIndex + 1, rightIndex);
        merge(arr, midIndex, leftIndex, rightIndex);
    }
}

function merge(arr, midIndex, leftIndex, rightIndex) {
    console.log(arr, midIndex, leftIndex, rightIndex);
    if (arr.length <= 1) return;
    const tempArr = [];
    const startIndex = leftIndex;
    const length = rightIndex - midIndex + 1;
    let currentNumber;
    for (let i = 0; i < length; i++) {
        if (leftIndex > midIndex) {
            arr.slice(midIndex + 1).forEach(n => tempArr.push(n));
            break;
        }
        if (rightIndex < midIndex) {
            arr.slice(leftIndex, midIndex + 1).forEach(n => tempArr.push(n));
            break;
        }

        currentNumber = (arr[leftIndex] < arr[rightIndex]) 
                            ? arr[leftIndex++]
                            : arr[rightIndex++];

        tempArr.push(currentNumber);
    }
    
    console.log(tempArr);
    tempArr.forEach((n, i) => arr[startIndex + i] = n);
}

// const arr = [ 3, 6, 1, 65, 7, 467, 5, 1, 54, 234 ];
const arr = [ 3, 6, 1, 65 ];
mergeSort(arr, 0, arr.length - 1);
console.log(`[ ${arr.join(', ')} ]`);
