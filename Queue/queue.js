// 用栈实现队列
class Queue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }
    push(val) {
        this.stack1.push(val);
    }
    pop() {
        // 我们需要坚持让stack2里的元素全部出栈之后，再让stack1中元素入栈，就可以保证队列的顺序无误
        if (this.stack2.length <= 0) {
            while (this.stack1.length) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }
    peek() {
        if (this.stack2.length <= 0) {
            while (this.stack1.length) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2[this.stack2.length - 1];
    }
    empty() {
        return !this.stack1.length && !this.stack2.length;
    }
}

class twoQueue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }
    push(val) {
        this.stack1.push(val);
    }
    pop() {
        if (this.stack1.length <= 0) {
            while (this.stack2.length) {
                this.stack1.push(this.stack2.pop());
            }
        }
        return this.stack1.pop();
    }
    unshift(val) {
        this.stack2.push(val);
    }
    shift() {
        if (this.stack2.length <= 0) {
            while (this.stack1.length) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }
}