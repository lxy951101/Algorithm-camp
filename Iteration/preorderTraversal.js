function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const preorderTraversal = (root) => {
    const res = [];
    if (!root) {
        return res;
    }
    const stack = [root];
    while (stack.length) {
        const top = stack.pop();
        res.push(top.val);
        if (top.right) {
            stack.push(top.right);
        }
        if (top.left) {
            stack.push(top.left);
        }
    }
    return res;
}