function _selectionSort(originArray) {
    const arr = [...originArray];
    
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
    
        for (let j = i + 1; j < arr.length; j ++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }

        if (minIndex != i) {
            let temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }

    return arr;
}

function selectionSort(arr) {
    const text = `
    | ---------------------------------------
    | ======== 정렬 전 ======================
    | [ ${arr.join(', ')} ]
    | >>>>>>>> 정렬 후 >>>>>>>>>>>>>>>>>>>>>>
    | [ ${_selectionSort(arr).join(', ')} ]
    | ---------------------------------------
    `
    console.log(text);
}

const arr = [5,1,6,78,12,4,3,9,8];
selectionSort(arr);