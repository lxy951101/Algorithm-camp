class ListNode {
    constructor(val) {
        this.val = val;
        this.prev = this.next = null;
    }
}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);

const deleteN = (head, n) => {
    const dummy = new ListNode();
    dummy.next = head;
    let slow = dummy;
    let fast = dummy;
    let i = 0;
    while (i < n) {
        if (fast.next) {
            fast = fast.next;
            i++;
        } else {
            return dummy.next;
        }
    }
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
}

console.log(deleteN(head, 4));