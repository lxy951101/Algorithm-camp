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

module.exports = ListNode;