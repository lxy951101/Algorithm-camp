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
}

const head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(3);

const headV2 = new ListNode(1);
headV2.next = new ListNode(1);
headV2.next.next = new ListNode(2);
headV2.next.next.next = new ListNode(3);


const deleteDuplicates = (head) => {
    let cur = head;
    while (cur !== null && cur.next !== null) {
        if (cur.val === cur.next.val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return head;
}


// 删除全部重复节点
const deleleDuplicatesV2 = (head) => {
    // 极端情况：0个或1个结点，则不会重复，直接返回
    if (!head || !head.next) {
        return head;
    }
    const dummy = new ListNode();
    dummy.next = head;
    let cur = dummy;
    // 当 cur 的后面有至少两个结点时
    while (cur.next && cur.next.next) {
        // 对 cur 后面的两个结点进行比较
        if (cur.next.val === cur.next.next.val) {
            // 若值重复，则记下这个值
            const val = cur.next.val;
            // 反复地排查后面的元素是否存在多次重复该值的情况
            while (cur?.next?.val === val) {
                // 若有，则删除
                cur.next = cur.next.next;
            }
        } else {
            // 若不重复，则正常遍历
            cur = cur.next;
        }
    }
    // 返回链表的起始结点
    return dummy.next;
}

console.log(deleteDuplicates(head),';', deleleDuplicatesV2(headV2));