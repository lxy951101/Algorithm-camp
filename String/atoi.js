const _text = ' 42';

const atoi = (text) => {
    const max = 2 ** 31 - 1;
    const min = -max - 1;
    const str = text.replace(/^\s*([-\+]?[0-9]+?)/, '$1');
    const num = str - 0;
    if (isNaN(num)) {
        return 0;
    }
    if (num > max) {
        return max;
    } else if (num < min) {
        return min;
    }
    return num;
}

console.log(atoi(_text));