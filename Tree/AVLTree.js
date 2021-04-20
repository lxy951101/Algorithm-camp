function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


// 思路：从下往上递归遍历树中的每一个结点，计算其左右子树的高度并进行对比，只要有一个高度差的绝对值大于1，那么整棵树都会被判为不平衡。
const isBalanced = (root) => {
    let flag = true;
    const dfs = (root) => {
        if (!root || !flag) {
            return 0;
        }
        const left = dfs(root.left);
        const right = dfs(root.right);
        if (Math.abs(left - right) > 1) {
            flag = false;
            return 0;
        }
        return Math.max(left, right) + 1;
    }
    dfs(root);
    return flag;
}

const balanceBST = (root) => {
    const nums = [];
    const inorder = (root) => {
        if (!root) {
            return null;
        }
        inorder(root.left);
        nums.push(root.val);
        inorder(root.right);
    }
    const buildAVL = (low, high) => {
        if (low > high) {
            return null;
        }
        const mid = low + ((high - low) >> 1);
        const cur = new NodeList(nums[mid]);
        cur.left = buildAVL(0, mid - 1);
        cur.right = buildAVL(mid + 1, high);
        return cur;
    }
    inorder(root);
    return buildAVL(0, nums.length - 1);
}