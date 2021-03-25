const str = '{[()]}';
const str1 = '{([)]}';

const isValid = (str) => {
    const leftSign = ['{', '[', '('];
    const rightSign = ['}', ']', ')'];
    const stack = [];
    let i = 0;
    while (i < str.length) {
        const char = str[i];
        if (~leftSign.indexOf(char)) {
            stack.push(char);
        } else if (~rightSign.indexOf(char)) {
            const v = stack.pop();
            if (v !== char) {
                return false;
            }
        }
        i++;
    }
    return true;
}

console.log(leftToRight(str1));