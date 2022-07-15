// 강의와 다르게 구현 -> 강의 소스와 빅오 비교 필요
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const midIndex = parseInt(arr.length / 2);
    const firstArr = mergeSort(arr.slice(0, midIndex));
    const secondArr = mergeSort(arr.slice(midIndex));
    return sortAtMerge(firstArr, secondArr);
}

function sortAtMerge(firstArr, secondArr) {
    let firstIndex = 0;
    let secondIndex = 0;
    const sortedArr = [];
    while(sortedArr.length < firstArr.length + secondArr.length) {
        if (firstArr[firstIndex] < secondArr[secondIndex]) {
            sortedArr.push(firstArr[firstIndex]);
            firstIndex++;
            if (!firstArr[firstIndex]) {
                secondArr.slice(secondIndex).forEach(e => sortedArr.push(e));
                break;
            }
        } else {
            sortedArr.push(secondArr[secondIndex]);
            secondIndex++;
            if (!secondArr[secondIndex]) {
                firstArr.slice(firstIndex).forEach(e => sortedArr.push(e));
                break;
            }
        }
    }
    return sortedArr;
}

const arr = [ 3, 6, 1, 65, 7, 467, 5, 1, 54, 234 ];
console.log(`[ ${mergeSort(arr).join(', ')} ]`);