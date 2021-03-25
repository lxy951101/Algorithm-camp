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
head.next = new ListNode(2);
head.next.next = new ListNode(4);
head.next.next.next = new ListNode(6);

const head2 = new ListNode(3);
head2.add(5);

const mergeTwoLists = (l1, l2) => {
    const head = new ListNode();
    let cur = head;
    while(l1 && l2) {
        if (l1.val <= l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    // 处理链表不等长
    cur.next = l1 !== null ? l1 : l2;
    return head.next;
}

console.log(mergeTwoLists(head, head2).toString());