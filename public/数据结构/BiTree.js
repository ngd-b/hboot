/**
 * 二叉树
 */
function TreeNode(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

function BiTree(root){
    // root 为 TreeNode 对象
    // 初始化时保证左右子树为  null；
    root.left = null;
    root.right = null;
}
BiTree.prototype = {
    insertLeftNode(curr,val){
        // 在当前 curr 左子树插入值 val
        let preLeftNode;
        if(!curr){
            return null;
        }
        // 原节点的左子树作为新插入节点的左子树
        preLeftNode = curr.left;
        // 新建节点代替当前的左节点
        let newLeftNode = new TreeNode(val);
        newLeftNode.left = preLeftNode;
        newLeftNode.right = null;
        // 原节点指向新的左子节点
        curr.left = newLeftNode;
        // 返回新的左子树
        return newLeftNode; 
    },
    insertRightNode(curr,val){
        let preRightNode;
        if(!curr){
            return null;
        }
        // 原节点右子树
        preRightNode = curr.right;
        // 新建节点
        let newRigthNode = new TreeNode(val);
        newRigthNode.right = preRightNode;
        newRigthNode.left = null;
        // 改变当前指向
        curr.right = newRigthNode;
        // 返回新的右子树
        return newRigthNode;
    },
    deleteLeftNode(curr){
        // 删除左子树
        if(curr===null || curr.left === null){
            return null;
        }
        // 销毁左子树
        this.destoryNode(curr.left);
        // 当前左子节点指向为空
        curr.left = null;

        return curr;
    },
    deleteRightNode(curr){
        // 删除右子树
        if(curr === null ||curr.right === null){
            return null;
        }
        this.destoryNode(curr.right);
        // 
        curr.right = null;
        return curr;
    },
    destoryNode(node){
        // 节点销毁，遍历处理每个不是叶节点的指向
        if(node!==null && node.left!==null){
            this.destoryNode(node.left);
        }
        if(node!==null && node.right!==null){
            this.destoryNode(node.right);
        }
        node = null;
    }
}

// 测试示例
let root = new TreeNode("F")
let Tree = new BiTree(root);
// 插入左子树
let leftNode = Tree.insertLeftNode(root,"B"),
    rightNode = Tree.insertRightNode(root,"C"),
    leftNode_1 = Tree.insertLeftNode(root,"D");
    leftNode_1_2 = Tree.insertRightNode(leftNode_1,"E");
    rightNode_1 = Tree.insertLeftNode(rightNode,"G");
    rightNode_2 = Tree.insertRightNode(rightNode_1,"I");
Tree.deleteLeftNode(leftNode_1);
Tree.deleteRightNode(leftNode_1);
console.log(JSON.stringify(root));