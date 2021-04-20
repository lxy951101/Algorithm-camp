/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

// 复制带随机指针的链表

/**
 * @param {Node} head
 * @return {Node}
 */
const copyRandomList = (head) => {
    if (!head) return null;
    let copyHead = new Node();
    let copyNode = copyHead;
    let cur = head;
    const hashMap = new Map();
    while (cur) {
        copyNode.val = cur.val;
        copyNode.next = cur.next ? new Node() : null;
        hashMap.set(cur, copyNode);
        cur = cur.next;
        copyNode = copyNode.next;
    }
    cur = head;
    copyNode = copyHead;
    while (cur) {
        copyNode.random = cur.random ? hashMap.get(cur.random) : null;
        copyNode = copyNode.next;
        cur = cur.next;
    }
    return copyHead;
}
