class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
        
    }
}

class Tree {
    constructor(array) {
    this.root = this.buildTree(array);
    }

    buildTree(array) {
        let uniqueArray = [...new Set(array)];
        uniqueArray.sort();
        let start = 0;
        let end = uniqueArray.length-1;
        let mid = (start+end)/2;

        let leftArray = uniqueArray.slice(start,mid);
        let rightArray = uniqueArray.slice(mid+1,end+1);
        if(start > end ) {
            return null;
        }
        let root = new Node(uniqueArray[mid], this.buildTree(leftArray), this.buildTree(rightArray));
        return root;
    }
    
    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const newNode = new Node(value);
        if(this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root,newNode) {
        if(newNode.data < root.data) {
            if(root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left,newNode)
                }
        } else {
            if(root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right,newNode);
            }
        }
    }
   
    search(root, value) {
        if(!root) {
            false
        } else {
            if (root.data === value ) {
                return root;
            } else {
                if(value < root.data) {
                    while(root.left) {
                    return this.search(root.left, value);
                    }
                    return 'value not found';
                } else {
                    while(root.right) {
                   return this.search(root.right, value);
                    }
                    return 'value not found';
                }
            }
        }
    }

    levelOrder() {
        const queue = [];
        queue.push(this.root);
        while(queue.length) {
            let curr = queue.shift();
            console.log(curr.data);
            if(curr.left) {
               queue.push(curr.left);
                
            }
            if(curr.right) {
                queue.push(curr.right);
                
        }
        



        }
    }

    inOrder(root) {
        if(root.left) {
            this.inOrder(root.left);
        }
        console.log(root.data);
        if(root.right) {
            this.inOrder(root.right);
        }
    }
   
    preOrder(root) {
        if(root) {
            console.log('pre order: ' + root.data)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    postOrder(root) {
        if(root.left) {
            this.postOrder(root.left);
        }
        if(root.right) {
            this.postOrder(root.right);
        }
        console.log(root.data);
        
    }
    
    height(root) {
        if (root == null) {
          return -1;
        } else {
          let left = this.height(root.left);
          let right = this.height(root.right);
    
          return Math.max(left, right) + 1;
        }
    }

    depth(node, root = this.root) {
    let depth = -1;

    if (node == null) return depth;

    if (
        root == node ||
        (depth = this.depth(node, root.left)) >= 0 ||
        (depth = this.depth(node, root.left) >= 0)
    ) {
        return depth + 1;
    }

    return depth;
    }

    isBalanced(root) {
        let leftHeight = this.height(root.left);
        let rightHeight = this.height(root.right);
        if(Math.abs(leftHeight - rightHeight) > 1) {
            return false;
        }
        return true;
    }

    min(root) {
        if(!root.left) {
            return console.log(root.data);
        }
            return this.min(root.left);
        }
            
    max(root) {
        if(!root.right) {
            return console.log(root.data);
        }
        return this.max(root.right);
        
    }

}

let newArray = [1,9,9,7,2,4,6,2,3, 10,-5];
tree = new Tree(newArray);
console.log(tree);

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }


  prettyPrint(tree.root);
  console.log(tree.isBalanced(tree.root))


