const quickSort = require('./quickSort');

const DEFAULT_BUCKET_SIZE = 5; // 每个桶装元素的默认数量

function bucketSort(arr, bucketSize = DEFAULT_BUCKET_SIZE) {
    if (arr.length <= 1) return arr;
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } else if (arr[i] > max) {
            max = arr[i];
        }
    }
    // 桶的个数
    const bucketCount = Math.floor((max - min) / bucketSize) + 1;
    const buckets = [];
    for (let i = 0; i < bucketCount; i++) {
        buckets[i] = [];
    }
    // 利用映射函数将数据分配到各个桶中
    for (let i = 0; i < arr.length; i++) {
        buckets[Math.floor((arr[i] - min) / bucketSize)].push(arr[i]);
    }
    arr.length = 0;
    for (let i = 0; i < buckets.length; i++) {
        quickSort(buckets[i]);
        for (let j = 0; j < buckets[i].length; j++) {
            arr.push(buckets[i][j]);
        }
    }    
    return arr;
}

console.log(bucketSort([0,1,2,4,3,2,1,0]))