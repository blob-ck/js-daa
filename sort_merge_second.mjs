function mergeSort(arr, leftIndex, rightIndex) {
    if (leftIndex < rightIndex) {
        const midIndex = parseInt((leftIndex + rightIndex) / 2);
        mergeSort(arr, leftIndex, midIndex);
        mergeSort(arr, midIndex + 1, rightIndex);
        merge(arr, leftIndex, midIndex, rightIndex);
    }
}

function merge(arr, leftIndex, midIndex, rightIndex) {
    if (arr.length <= 1) return;

    const tempArr = [];
    const startIndex = leftIndex;
    const length = rightIndex - leftIndex + 1; // for문 반복횟수를 이렇게 애매하게 할 바엔 while을 쓰는게 나아보임

    let leftArrIndex = leftIndex;
    let rightArrIndex = midIndex + 1;
    let currentNumber;
    
    for (let i = 0; i < length; i++) {
        if (leftArrIndex > midIndex) {
            arr.slice(rightArrIndex, rightIndex + 1).forEach(n => tempArr.push(n));
            break;
        }
        if (rightArrIndex > rightIndex) {
            arr.slice(leftArrIndex, midIndex + 1).forEach(n => tempArr.push(n));
            break;
        }

        currentNumber = (arr[leftArrIndex] < arr[rightArrIndex]) 
                            ? arr[leftArrIndex++]
                            : arr[rightArrIndex++];
                            console.log(currentNumber);
        tempArr.push(currentNumber);
    }
    
    tempArr.forEach((n, i) => arr[startIndex + i] = n);
}

const arr = [ 3, 6, 1, 65, 7, 467, 5, 1, 54, 234 ];
mergeSort(arr, 0, arr.length - 1);
console.log(`[ ${arr.join(', ')} ]`);
