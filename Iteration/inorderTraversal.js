function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const inorderTraversal = (root) => {
    const res = [];
    const stack = [];
    let cur = root;
    while (cur || stack.length) {
        // 遍历左孩子
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        res.push(cur.val);
        cur = cur.right;
    }
}