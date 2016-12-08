(function(){
    console.log('Linked List ~ start');
    var rootNode = {
        data: {
            name: 'root'
        }, // whatever data
        next: null, // next node
        prev: null
    }
    function addNode(node){
        if(!rootNode.next) {
            rootNode.next = node;
            node.prev = rootNode;
            return;
        }
        var tempNode = rootNode.next;
        while(true){
            if(!tempNode.next){
                tempNode.next = node;
                node.prev = tempNode;
                return;
            }
            tempNode = tempNode.next;
        }
    }
    function createNode(name){
        return {
            data: {
                name: name
            },
            next: null,
            prev: null
        }
    }

    function searchForNode(name){
        if(rootNode.data.name === name){
            return rootNode;
        }
        var currNode = rootNode.next;
        while(true){
            if(currNode.data.name === name){
                return currNode;
            }
            if(!rootNode.next){
                return null;
            }
            currNode = currNode.next;
        }
    }

    function deleteNode(name){
        var nodeToDelete = searchForNode(name);
        if(nodeToDelete){
            nodeToDelete.prev.next = nodeToDelete.next;
            nodeToDelete.next.prev = nodeToDelete.prev;
            return nodeToDelete;
        }
        return null;
    }

})();
