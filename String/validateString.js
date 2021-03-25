// 判断是否是回文字符串

const validateString = (text) => {
    return text === text.split('').reverse().join('');
};

// 判断删除一个字符后是否是回文字符串
const _text1 = "abca";
const _text2 = "abcca";
const _text3 = "abcbca";

// 工具方法，用于判断字符串是否回文
function isPalindrome(s, st, ed) {
    while (st < ed) {
        if (s[st] !== s[ed]) {
            return false;
        }
        st++;
        ed--;
    }
    return true;
}

const validPalindrome = (text) => {
    let l = 0;
    let r = text.length - 1;
    while (l < r && text[l] === text[r]) {
        l++;
        r--;
    }
    // 尝试判断跳过左指针元素后字符串是否回文
    if (isPalindrome(text, l + 1, r)) {
        return true
    }
    // 尝试判断跳过右指针元素后字符串是否回文
    if (isPalindrome(text, l, r - 1)) {
        return true
    }
    return true;
}

console.log(validPalindrome(_text1), validPalindrome(_text2), validPalindrome(_text3));