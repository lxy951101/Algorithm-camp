function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const postorderTraversal = (root) => {
    const res = [];
    if (!root) {
        return res;
    }
    const stack = [root];
    while (stack.length) {
        const top = stack.pop();
        res.unshift(top.val);
        if (top.left) {
            stack.push(top.left);
        }
        if (top.right) {
            stack.push(top.right);
        }
    }
    return res;
}