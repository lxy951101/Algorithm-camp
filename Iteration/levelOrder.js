function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const levelOrder = (root) => {
    const res = [];
    if (!root) {
        return res;
    }
    const queue = [];
    queue.push(root);
    while (queue.length) {
        const level = [];
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            const top = queue.shift();
            level.push(top.val);
            if (top.left) {
                queue.push(top.left);
            }
            if (top.right) {
                queue.push(top.right);
            }
        }
        res.push(level);
    }
    return res;
}