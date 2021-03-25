function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const search = (root, n) => {
    if (!root) {
        return null;
    }
    if (root.val === n) {
        return root;
    } else if (root.val > n) {
        return search(root.right, n);
    } else {
        return search(root.left, n);
    }
}

const insertIntoBST = (root, n) => {
    if (!root) {
        root = new TreeNode(n);
        return root;
    }
    if (root.val > n) {
        root.left = insertIntoBST(root.left, n);
    } else { 
        root.right = insertIntoBST(root.right, n);
    }
    return root;
}