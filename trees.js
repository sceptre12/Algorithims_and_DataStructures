var binaryTree = function() {
    return {
        insert: insert,
        storeTraversalOutput: storeTraversalOutput,
        deleteNode: deleteNode,
        search: search,
        root: null
    };


    function deleteNode(key) {
        var _self = this;
        removeNode(_self.root, key);
    }
    
    function removeNode(node, num){
       
        if(node === null){
            return node;
        } else if(num > node.key){
            node.rightNode = removeNode(node.rightNode,num);
        }else if(num < node.key){
            node.leftNode = removeNode(node.leftNode,num);
        }else{
            if(node.leftNode === null && node.rightNode === null){
                node = null;
            }else if (node.leftNode === null){
                node = node.rightNode;
            }else if(node.rightNode === null){
                node = node.leftNode;
            }else{
                var minNode = findMin(node.rightNode);
                node.key = minNode.key;
                node.rightNode = removeNode(node.rightNode, minNode.key);
            }
        }
        return node;
    }

    // function removeNode(node, key) {
    //     if (node === null) {
    //         return node;
    //     }
    //     else if (key < node.key) {
    //         node.leftNode = removeNode(node.leftNode, key);
    //     }
    //     else if (key > node.key) {
    //         node.rightNode = removeNode(node.rightNode, key);
    //     }
    //     else {
    //         // found node 
    //         // Case 1: No child 
    //         if (node.leftNode === null && node.rightNode === null) {
    //             node = null;
    //         }
    //         else if (node.leftNode === null) {
    //             // Case 2: One right child 
    //             node = node.rightNode;
    //         }
    //         else if (node.rightNode === null) {
    //             // Case 2: One left child 
    //             node = node.leftNode;
    //         }
    //         else {
    //             // Case 3: two children
    //             var tempNode = findMin(node.rightNode);
    //             node.key = tempNode.key;
    //             node.rightNode = removeNode(node.rightNode, tempNode.key);
    //         }
    //     }

    //     return node;
    // }

    function findMin(node) {
        if (node.leftNode === null) {
            return node;
        }
        findMin(node.leftNode);
    }

    function storeTraversalOutput() {
        var storage = {
            inOrderTraversal: [],
            preOrderTraversal: [],
            postOrderTraversal: []
        }
        inOrderTraversal(this.root, storage.inOrderTraversal);
        preOrderTraversal(this.root, storage.preOrderTraversal);
        postOrderTraversal(this.root, storage.postOrderTraversal);
        return storage;
    }

    function preOrderTraversal(node, storage) {
        if (node === null) {
            return;
        }
        storage.push(node.key);
        preOrderTraversal(node.leftNode, storage);
        preOrderTraversal(node.rightNode, storage);
    }

    function inOrderTraversal(node, storage) {
        if (node === null) {
            return;
        }
        inOrderTraversal(node.leftNode, storage);
        storage.push(node.key);
        inOrderTraversal(node.rightNode, storage);
    }

    function postOrderTraversal(node, storage) {
        if (node === null) {
            return;
        }
        postOrderTraversal(node.leftNode, storage);
        postOrderTraversal(node.rightNode, storage);
        storage.push(node.key);
    }


    function search(num){
        var _self = this;
        if(!_self.root) return false;
        var currentNode = _self.root;
        while(true){
            if(num === currentNode.key){
                return currentNode;
            } 
            else if(num > currentNode.key){
                currentNode = currentNode.rightNode;
                if(!currentNode) return false;
            }else if( num < currentNode.key){
                currentNode = currentNode.leftNode;
                if(!currentNode) return false;
            }
        }
    }


    function insert(num){
        var _self = this;
        var newNode = createNode(num);
        if(!_self.root){
            _self.root = newNode;
            return;
        }else{
            var focusNode = _self.root;
            var parentNode = null;
            while(true){
                parentNode = focusNode;
                if(num < focusNode.key){
                    focusNode = focusNode.leftNode;
                    if(focusNode === null){
                        parentNode.leftNode = newNode;
                        return;
                    }
                }else if(num > focusNode.key){
                    focusNode = focusNode.rightNode;
                    if(focusNode === null){
                        parentNode.rightNode = newNode;
                        return;
                    }
                }else{
                    return; // returns if num is duplicate
                }
            }
        }
    }

    function createNode(num) {
        return {
            key: num,
            leftNode: null,
            rightNode: null
        }
    }

}

var TreeOperations = {
    binaryTreeOp: function() {
        var tree1 = binaryTree();
        console.log(tree1.root);

        tree1.insert(45);
        tree1.insert(34);
        tree1.insert(54);
        tree1.insert(50);
        tree1.insert(39);
        tree1.insert(75);
        tree1.insert(44);
        tree1.insert(54);
        tree1.insert(12);
        tree1.insert(23);
        tree1.insert(43);
        tree1.insert(67);
        tree1.insert(57);
        console.log('root');
        console.log(tree1.root);
        console.log('Traversals');
        console.log('In Order Traversal');
        console.log(tree1.storeTraversalOutput())
        console.log('Delete 43');
        console.log(tree1.deleteNode(43));
        console.log(tree1.root);
        console.log('find 43');
        console.log(tree1.search(43));
        console.log('find 45');
        console.log(tree1.search(45));
        console.log('find 75');
        console.log(tree1.search(75));
    }
};