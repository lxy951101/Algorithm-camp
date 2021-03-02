function merge(arr, [start1, end1] = [], [start2, end2] = []) {
    const tmp = [];
    let start = start1;
    let end = end2;
    let i = 0;
    while (start1 <= end1 && start2 <= end2) {
        if (arr[start1] <= arr[start2]) {
            tmp[i++] = arr[start1++];
        } else {
            tmp[i++] = arr[start2++];
        }
    }
    // 判断哪个子数组中有剩余数据
    if (start2 <= end2) {
        while (start2 <= end2) {
            tmp[i++] = arr[start2++];
        }
    } else {
        while (start1 <= end1) {
            tmp[i++] = arr[start1++];
        }
    }
    // 将tmp中的数组拷贝回A
    let j = 0;
    while (start <= end) {
        arr[start++] = tmp[j++]
    }
}

function mergeSort(arr, start = 0, end) {
    end = typeof end === 'undefined' ? arr.length - 1 : end;
    if (start >= end) return arr;
    const mid = (start + end) >> 1;
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    merge(arr, [start, mid], [mid + 1, end]);
    return arr;
}

function mergeSortGenerate(arr) {
    if (arr.length <= 1) return arr;
    for (let size = 1; size < arr.length; size *= 2) {
        for (let i = 0; i < arr.length; i += size * 2) {
            const tmp = [];
            let start = i;
            const end = i + size;
            const end1 = i + size;
            const end2 = i + size * 2;
            let k = 0;
            let start1 = i;
            let start2 = i + size + 1;
            while (start1 <= end1 && start2 <= end2) {
                if (arr[start1] <= arr[start2]) {
                    tmp[k++] = arr[start1++];
                } else {
                    tmp[k++] = arr[start2++];
                }
            }
            if (start2 <= end2) {
                while (start2 <= end2) {
                    tmp[k++] = arr[start2++];
                }
            } else {
                while (start1 <= end1) {
                    tmp[k++] = arr[start1++];
                } 
            }
                
            
            console.log(tmp);
            // let j = 0;
            // while (start <= end) {
            //     arr[start++] = tmp[j++]
            // }
        }
    }
    return arr;
}

module.exports = mergeSortGenerate;