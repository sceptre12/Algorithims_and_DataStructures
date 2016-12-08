var hashTable = function(size){
    var length = size || 8;
    var table = [];
    
    return {
        insert: insert,
        findNum: findNum,
        deleteItem: deleteItem,
        table: table
    };
    
    
    function insert(num){
        var _table = this.table;
        var position = hash(num);
        if(_table[position] === undefined){
            _table[position] = createNode(num);
        }else{
            var currentNode = createNode(num);
            var previousNode = _table[position].next;
            _table[position].next = currentNode;
            currentNode.prev = _table[position];
            if(previousNode){
                currentNode.next = previousNode;
                previousNode.prev = currentNode;
            }
        }
    }
    
    function deleteItem(num){
        var _table = this.table;
        var position = hash(num);
        if(_table[position].key === num){
            if(_table[position].next){
                _table[position] = _table[position].next;
                _table[position].prev = null;
            }else{
                _table[position] = undefined;
            }
            return true;
        }else{
            var node = _table[position].next;
            while(true){
                if(node){
                    if(node.key === num){
                        node.prev.next = node.next;
                        node = null;
                        return true;
                    }else{
                        node = node.next;
                    }
                }else{
                    return false;
                }
            }
        }
    }
    
    function findNum(num){
        var _table = this.table;
        var position = hash(num);
        if(_table[position] === undefined) return false;
        if(_table[position].key !== num){
            var node = _table[position].next;
            while(true){
                if(node){
                    if(node.key === num){
                        return node;
                    }else{
                        node = node.next;
                    }
                }else{
                    return false;
                }
            }
        }else{
            return _table[position];
        }
    }
    
    function createNode(num){
        return {
            key: num,
            next: null,
            prev: null
        };
    }
    
    function hash(num){
        return num % length;
    }
};