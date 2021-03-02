const SORT_SIZE = 10;

const insertionSort = require('./insertionSort');
const mergeSort = require('./mergeSort');
const quickSort = require('./quickSort');

const qsort = (arr) => {
    if (arr.length <= 4) {
        insertionSort(arr);
    } else if (arr.length <= SORT_SIZE) {
        mergeSort(arr);
    } else {
        quickSort(arr);
    }
    return arr;
};

console.log(qsort([3,10,9,7,14,2,8,3,6]));