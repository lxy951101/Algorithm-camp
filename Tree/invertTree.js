function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const invertTree = (root) => {
    if (!root) {
        return root;
    }
    let right = invertTree(root.right);
    let left = invertTree(root.left);
    // 交换当前遍历到底额两个左右孩子的结点
    root.left = right;
    root.right = left;
    return root;
}