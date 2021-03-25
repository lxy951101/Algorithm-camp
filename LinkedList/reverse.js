class ListNode {
    constructor(val) {
        this.val = val;
        this.prev = this.next = null;
    }
    add(val) {
        if (val instanceof ListNode) {
            this.next = val;
        } else if (typeof val === 'number') {
            this.next = new ListNode(val);
        }
    }
    toString() {
        let cur = this;
        let str = '';
        while (cur) {
            str += cur.val;
            if (cur.next) {
                str += '->';
            }
            cur = cur.next;
        }
        return str;
    }
}

const head = new ListNode(1);
head.add(2);
head.next.add(3);
head.next.next.add(4);
head.next.next.next.add(5);

const reverse = (head) => {
    if (!head || !head.next) {
        return head;
    }
    let pre = null;
    let cur = head;
    while (cur) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
}

// console.log(reverse(head).toString());

const reverseLocal = (head, m, n) => {
    const dummy = new ListNode();
    dummy.next = head;
    let pre = null;;
    let cur = dummy;
    let p = dummy;
    let leftHead = null;
    for (let i = 0; i < m - 1; i++) {
        p = p.next;
    }
    leftHead = p; // m - 1节点 1
    let start = leftHead.next; // m 节点 2
    pre = start; // 2
    cur = pre.next; // 3
    for (let i = m; i < n; i++) {
        // cur 3   4, next 4 5;pre 2 3
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    //  leftHead 的后继结点此时为反转后的区间的第一个结点
    leftHead.next = pre;
    // 将区间内反转后的最后一个结点 next 指向 cur
    start.next = cur;
    return dummy.next;
}