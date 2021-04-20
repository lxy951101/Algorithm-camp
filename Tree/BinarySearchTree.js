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


// 删除指定结点
// 想要删除某个结点，首先要找到这个结点。在定位结点后，我们需要考虑以下情况：
// 结点不存在，定位到了空结点。直接返回即可。
// 需要删除的目标结点没有左孩子也没有右孩子——它是一个叶子结点，删掉它不会对其它结点造成任何影响，直接删除即可。
// 需要删除的目标结点存在左子树，那么就去左子树里寻找小于目标结点值的最大结点，用这个结点覆盖掉目标结点
// 需要删除的目标结点存在右子树，那么就去右子树里寻找大于目标结点值的最小结点，用这个结点覆盖掉目标结点
// 需要删除的目标结点既有左子树、又有右子树，这时就有两种做法了：要么取左子树中值最大的结点，要么取右子树中取值最小的结点。两个结点中任取一个覆盖掉目标结点，都可以维持二叉搜索树的数据有序性

const deleteNode = (root, n) => {
    if (!root) {
        return root;
    }
    const findMax = (root) => {
        while (root.right) {
            root = root.right;
        }
        return root;
    }
    const findMin = (root) => {
        while (root.left) {
            root = root.left;
        }
        return root;
    }
    if (root.val === n) {
        if (!root.left && !root.right) {
            root = null;
        } else if (root.left) {
            const maxLeft = findMax(root.left);
            root.val = maxLeft.val;
            root.left = deleteNode(root.left, maxLeft.val);
        } else {
            const minRight = findMin(root.right);
            root.val = minRight.val;
            root.right = deleteNode(root.right, minRight.val);
        }
    }
}

const isValidBST = (root) => {
    const dfs = (root, minValue, maxValue) => {
        if (!root) {
            return true;
        }
        if (root.val <= minValue || root.val >= maxValue) {
            return false;
        }
        return dfs(root.left, minValue, root.val) && dfs(root.right, val, maxValue);
    }
    return dfs(root, -Infinity, Infinity);
}

// 核心思想，将中间元素提取出来

const sortedArrayToBST = (nums) => {
    if (!nums.length) {
        return null;
    }
    const buildBST = (low, high) => {
        if (low > high) {
            return null;
        }
        const mid = ((high - low) >> 1) + low;
        const cur = new TreeNode(nums[mid]);
        cur.left = buildBST(low, mid - 1);
        cur.right = buildBST(mid + 1, high);
        return cur;
    }
    const root = buildBST(0, nums.length - 1);
    return root;
}