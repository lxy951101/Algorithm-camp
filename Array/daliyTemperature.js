const temperatures = [73, 74, 75,71, 69, 72, 76, 73];

const daliyTemperatures = (T) => {
    const n = T.length;
    const result = [];
    const stack = [];
    for (let i = 0; i < n; i++) {
        // 将单调递减的元素放入栈中，直至单调递减停止时，计算相隔的天数
        while (stack.length && T[i] > T[stack[stack.length - 1]]) {
            const top = stack.pop();
            result[top] = i - top;
        }
        stack.push(i);
    }
    return result;
}


