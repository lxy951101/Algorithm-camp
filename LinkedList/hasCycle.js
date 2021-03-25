const hasCycle = (head) => {
    while (head) {
        if (head.flag) {
            return true;
        }
        head.flag = true;
        head = head.next;
    }
    return false;
}

const detectCycle = (head) => {
    while (head) {
        if (head.flag) {
            return head;
        }
        head.flag = true;
        head = head.next;
    }
    return null;
}

// 快慢指针思路
const detectCycleV2 = (head) => {
    let slow = head;
    let fast = head;
    while (slow && fast) {
        if (slow === fast) {
            return slow;
        }
        slow = slow.next;
        const v = fast?.next?.next;
        if (!v) {
            return null;
        }
        fast = fast.next.next;
    }
    return null;
}