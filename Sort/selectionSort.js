function selectionSort(arr) {
    if (arr.length <= 1) return arr;
    for (let i = 0; i < arr.length; i++) {
        let index = i;
        let j = i + 1;
        for (;j < arr.length;j++) {
            if (arr[j] < arr[index]) {
                index = j;
            }
        }
        [arr[i], arr[index]] = [arr[index], arr[i]];
    }
    return arr;
}
