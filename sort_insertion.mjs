function _insertionSort(arr) {
    // 1. 배열의 길이 - 1 만큼 바깥 순회
    // 2. 인덱스 1 부터 정렬된 영역의 원소 개수만큼 순회 but break 조건 있음(크기비교하여 정렬된 영역의 원소와 같거나 크면 정지)
    // 3. 비교하면서 정렬된 영역의 원소보다 작다면 비교를 시작한 인덱스에 큰 수를 밀어넣고 이전 인덱스로 순회하며 비교

    for (let i = 1; i < arr.length; i++) { // 정렬된 영역의 인덱스 -> 점차 길이가 늘어남을 인덱스 증가로 표현
        const insertingNumber = arr[i];
        let currentIndex;
        for (currentIndex = i - 1; currentIndex >= 0; currentIndex--) {
            if (insertingNumber >= arr[currentIndex]) {
                break;
            }
            
            arr[currentIndex + 1] = arr[currentIndex];
        }

        arr[currentIndex + 1] = insertingNumber;
    }

    return arr;
}

function insertionSort(arr) {
    const text = `
    | ---------------------------------------
    | ======== 정렬 전 ======================
    | [ ${arr.join(', ')} ]
    | >>>>>>>> 정렬 후 >>>>>>>>>>>>>>>>>>>>>>
    | [ ${_insertionSort(arr).join(', ')} ]
    | ---------------------------------------
    `
    console.log(text);
}


const arr = [1,5,1,123,51,234,52,82,9];
insertionSort(arr);
