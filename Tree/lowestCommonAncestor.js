function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// 寻找二叉树的最近公共祖先
// 思路：
const lowestCommonAncestor = function(root, p, q) {
    // 编写 dfs 逻辑
    function dfs(root) {
        // 若当前结点不存在（意味着无效）或者等于p/q（意味着找到目标），则直接返回
        if(!root || root === p || root === q) {
            return root 
        }
        // 向左子树去寻找p和q
        const leftNode = dfs(root.left)  
        // 向右子树去寻找p和q
        const rightNode = dfs(root.right)  
        // 如果左子树和右子树同时包含了p和q，那么这个结点一定是最近公共祖先
        if(leftNode && rightNode) {
            return root 
        } 
        // 如果左子树和右子树其中一个包含了p或者q，则把对应的有效子树汇报上去，等待进一步的判断；否则返回空
        return leftNode || rightNode
    } 
    return dfs(root);
}