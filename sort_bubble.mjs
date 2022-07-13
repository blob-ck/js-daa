function bubbleSort(arr) {
    console.log(`---start---\n======== 정렬 전========\n[ ${arr.join(', ')} ]`);
    for (let minusCount = 1; minusCount < arr.length; minusCount++) {
        for (let index = 0; index < arr.length - minusCount; index++) {
            if (arr[index] > arr[index + 1]) {
                let temp = arr[index];
                arr[index] = arr[index + 1];
                arr[index + 1] = temp;
            }
        }
    }
    console.log(`\n======== 정렬 후 ========\n[ ${arr.join(', ')} ]\n---end---\n`);
}

const arr1 = [4,1,3,2];
bubbleSort(arr1);

const arr2 = [3,2];
bubbleSort(arr2);

const arr3 = [2];
bubbleSort(arr3);

const arr4 = [];
bubbleSort(arr4);