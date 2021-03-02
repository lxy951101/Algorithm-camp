// 循环队列
class CircularQueue {
    constructor(length) {
        this.items = new Array(length);
        this.n = length;
        this.head = 0;
        this.tail = 0;
    }
    enqueue(item) {// 入队
        // 队列满了
        if ((this.tail + 1) % n === this.head) return false;
        this.items[this.tail] = item;
        this.tail = (this.tail + 1) % this.n;
        return true;
    }
    dequeue() { // 出队
        // 如果 head === tail 表示队列为空
        if (this.head === this.tail) return null;
        const ref = this.items[head];
        this.head = (this.head + 1) % this.n;
        return ref;
    }
}