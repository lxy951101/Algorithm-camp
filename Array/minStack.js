class minStack {
    constructor() {
        this.stack = [];
        this.supStack = [];
    }
    push(val) {
        this.stack.push(val);
        // 注意最小值相等的时候也需要push，否则pop的时，最小值将因此改变
        if (this.supStack.length === 0 || this.supStack[this.supStack.length - 1] >= val) {
            this.supStack.push(val);
        }
    }
    pop() {
        // 若出栈的值和当前最小值相等，那么辅助栈也要对栈顶元素进行出栈，确保最小值有效性。
        if (this.stack.pop() === this.supStack[this.supStack.length - 1]) {
            this.supStack.pop();
        }
    }
    top() {
        return this.stack[this.stack.length - 1];
    }
    getMin() {
        return this.supStack[this.supStack.length - 1];
    }
}