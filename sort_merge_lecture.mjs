// 강의 소스
function mergeSort(arr, leftIndex, rightIndex) {
    if (leftIndex < rightIndex) {
        const midIndex = parseInt((leftIndex + rightIndex) / 2);
        mergeSort(arr, leftIndex, midIndex);
        mergeSort(arr, midIndex + 1, rightIndex);
        merge(arr, leftIndex, midIndex, rightIndex);
    }
}

function merge(arr, leftIndex, midIndex, rightIndex) {
    let leftAreaIndex = leftIndex;
    let rightAreaIndex = midIndex + 1;

    let tempArr = [];
    tempArr.length = rightIndex + 1;
    tempArr.fill(0, 0, rightIndex + 1); // fill with 0 from position 0 until position 8
    
    let tempArrIndex = leftIndex;
    while(leftAreaIndex <= midIndex && rightAreaIndex <= rightIndex) {
        if (arr[leftAreaIndex] <= arr[rightAreaIndex]) {
            tempArr[tempArrIndex] = arr[leftAreaIndex++];
        } else {
            tempArr[tempArrIndex] = arr[rightAreaIndex++];
        }
        tempArrIndex++;
    }

    if (leftAreaIndex > midIndex) {
        for (let i = rightAreaIndex; i <= rightIndex; i++, tempArrIndex++) {
            tempArr[tempArrIndex] = arr[i];
        }
    } else {
        for (let i = leftAreaIndex; i <= midIndex; i++, tempArrIndex++) {
            tempArr[tempArrIndex] = arr[i];
        }
    }

    for (let i = leftIndex; i <= rightIndex; i++) {
        arr[i] = tempArr[i];
    }
}

const arr = [ 3, 6, 1, 65, 7, 467, 5, 1, 54, 234 ];
mergeSort(arr, 0, arr.length - 1);
console.log(`[ ${arr.join(', ')} ]`);