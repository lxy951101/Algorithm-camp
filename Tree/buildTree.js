function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];

// 从前序（先序）与中序遍历序列构造二叉树
const buildTree = (preorder, inorder) => {
    // 缓存结点总个数（遍历序列的长度）
    const len = preorder.length
    // 定义构造二叉树结点的递归函数
    function build(preL, preR, inL, inR) {
        // 处理越界情况
        if(preL > preR) {
            return null
        }
        // 初始化目标结点
        const root = new TreeNode()
        // 目标结点映射的是当前前序遍历序列的头部结点（也就是当前范围的根结点）
        root.val = preorder[preL]  
        // 定位到根结点在中序遍历序列中的位置
        const k = inorder.indexOf(root.val)  
        // 计算出左子树中结点的个数
        const numLeft = k - inL  
        // 构造左子树
        root.left = build(preL+1, preL+numLeft, inL, k-1)    
        // 构造右子树
        root.right = build(preL+numLeft+1, preR, k+1, inR)  
        // 返回当前结点
        return root
    }   
    // 递归构造二叉树
    return build(0, len - 1, 0, len - 1);
}

const tree = buildTree(preorder, inorder);

const postOrder = (root) => {
    const res = [];
    const stack = [root];
    while (stack.length) {
        const cur = stack.pop();
        res.unshift(cur.val);
        if (cur.left) {
            stack.push(cur.left);
        }
        if (cur.right) {
            stack.push(cur.right);
        }
    }
    return res;
}

const postorder = postOrder(tree);

const buildTreeV2 = (postorder, inorder) => {
    const len = postorder.length;
    const build = (postL, postR, inL, inR) => {
        if (postL > postR) return null;
        const root = new TreeNode();
        root.val = postorder[postR];
        const k = inorder.indexOf(root.val); // 根节点索引
        const rightNum = inR - k; // 右子树节点数量
        root.left = build(postL, postR - rightNum - 1, inL, k - 1);
        root.right = build(postR - rightNum, postR - 1, k + 1, inR);
        return root;
    }
    return build(0, len - 1, 0, len - 1);
}

console.log(buildTreeV2(postorder, inorder));

