function quickSort(arr, left, right) {
    if (left > right) return;
    const pivotIndex = divide(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
}

function divide(arr, left, right) {
    let pivotIndex = left;
    let leftStartIndex = left + 1;
    let rightStartIndex = right;

    while(leftStartIndex <= rightStartIndex) {
        if (arr[leftStartIndex] <= arr[pivotIndex]) leftStartIndex++;
        if (arr[rightStartIndex] >= arr[pivotIndex]) rightStartIndex--;
        if (leftStartIndex <= rightStartIndex
            && arr[leftStartIndex] > arr[pivotIndex]
            && arr[pivotIndex] > arr[rightStartIndex]
            ) {
                swap(arr, leftStartIndex, rightStartIndex);
        }
    }

    swap(arr, pivotIndex, rightStartIndex);
    pivotIndex = rightStartIndex;

    return pivotIndex;
}

function swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

const arr = [ 5, 2, 11, 56, 3, 4, 1, 6, 7, 10, 9, 2, 44, 22, 18 ]
quickSort(arr, 0, arr.length - 1);
console.log(arr.join(', '))