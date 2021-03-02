function sqrt(x) {
    let low = 0;
    let high = x;
    while (low <= high) {
        const mid = low + ((high - low) / 2);
        const value = mid * mid - x;
        if (value < .000001 && value > -.000001) { // 当差值小于0.000001时，返回值
            return mid;
        } else if (value > .000001) { // mid值偏大
            high = mid;
        } else {
            low = mid;
        }
    }
    return -1;
}

console.log(sqrt(6));