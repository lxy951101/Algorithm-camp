const _nums1 = [1,2,3];
const _nums2 = [2,5,6];

const twoPointMerge = (nums1, nums2) => {
    let m = nums1.length - 1;
    let n = nums2.length - 1;
    while (m >= 0 && n >= 0) {
        if (nums1[m] > nums2[n]) {
            nums1[m + n + 1] = nums1[m];
            m--;
        } else {
            nums1[m + n + 1] = nums2[n];
            n--;
        }
    }
    while (n >= 0) {
        nums1[n] = nums2[n];
        n--;
    }
    return nums1;
}
