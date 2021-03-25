class Tree {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function createTreeDemo() {
    const tree = new Tree(1);
    tree.left = new Tree(2);
    tree.right = new Tree(3);
    tree.left.left = new Tree(4);
    tree.left.right = new Tree(5);
    tree.right.left = new Tree(6);
    tree.right.right = new Tree(7);
    return tree;
}

const _tree = createTreeDemo();

// 先序遍历：中-》左-》右
const firstOrder = (_tree) => {
    const list = [];
    const _firstOrder = (tree) => {
        if (tree !== null) {
            list.push(tree.val);
            _firstOrder(tree.left);
            _firstOrder(tree.right);
        }
    }
    _firstOrder(_tree);
    return list;
}

// 先序遍历：中-》左-》右 (迭代)
const firstOrderV2 = (tree) => {
    const list = [];
    const queue = [tree];
    while (queue.length) {
        const cur = queue.shift();
        if (cur !== null) {
            list.push(cur.val);
            queue.push(cur.left);
            queue.push(cur.right);
        }
    }
    return list;
}

console.log('firstOrder:', firstOrder(_tree), ';firstOrderV2:', firstOrderV2(_tree));

// 中序遍历：  左-》中-》右

const middleOrder = (_tree) => {
    const list = [];
    const _middleOrder = (tree) => {
        if (tree !== null) {
            _middleOrder(tree.left);
            list.push(tree.val);
            _middleOrder(tree.right);
        }
    }
    _middleOrder(_tree);
    return list;
}

// 后序遍历  左-》右-》中

const lastOrder = (_tree) => {
    const list = [];
    const _lastOrder = (tree) => {
        if (tree !== null) {
            _lastOrder(tree.left);
            _lastOrder(tree.right);
            list.push(tree.val);
        }
    }
    _lastOrder(_tree);
    return list;
}
