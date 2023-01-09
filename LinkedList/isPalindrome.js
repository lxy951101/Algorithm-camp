const ListNode = require('./ListNode.js')


const generateLinkList = (arr) => {
    const head = new ListNode(arr[0])
    let cur = head;
    for (let i = 1, l = arr.length; i < l; i++) {
        const num = arr[i]
        cur.add(num);
        cur = cur.next;
    }
    return head;
}

const head = generateLinkList([1,2,3,2,1]);
const head2 = generateLinkList([1,2,3,3,2,1]);
const head3 = generateLinkList([1,4,5,2,1]);

console.log(head)





/**
 * 快慢指针法
 */
function isPalindrome2(header) {
    let slow = header;
    let fast = header;
    const stack = [];
    while (fast) {
        slow = slow.next;
        if (fast.next) {
            fast = fast.next.next;
        } else {
            fast = fast.next;
        }
    }
    while (slow) {
        stack.push(slow.val);
        slow = slow.next;
    }
    slow = header;
    while (stack.length && slow) {
        if (slow.val === stack[stack.length - 1]) {
            stack.pop();
            slow = slow.next;
        } else {
            return false;
        }
    }
    return true;
}

isPalindrome2(head);
isPalindrome2(head2);

/**
 * 空间复杂度1 
 * @param {*} header 
 */
function isPalindrome3(header) {
    let slow = header;
    let fast =  header;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // 链表逆序
    let prev = null;
    while (slow) {
        const next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }
    // 从左右两边朝里判断
    let left = header;
    let right = fast;
    let flag = true;
    while (left && right) {
        if (left.val === right.val) {
            left = left.next;
            right = right.next;
        } else {
            flag = false;
            break;
        }
    }
    // 最后恢复顺序
    prev = null;
    while (fast) {
        const next = fast.next;
        fast.next = prev;
        prev = fast;
        fast = next;
    }
    return flag;
}

isPalindrome3(head)
isPalindrome3(head2)
isPalindrome3(head3)


