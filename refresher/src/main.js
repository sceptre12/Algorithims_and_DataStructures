console.log("Refreshing my mind on algorithims");

console.log('dataStructures');

var dummyData = {
            randNumbers: [235,5676,214,5687,1123,483,34666,120,1234],
            numbersOccurringMultipleTimes: [4,4,4,123,12456,83,6,6,6,12,67,12,78,43,345,12,346,657,7,8,7,7,12,9,45,10,67]
        };

var dataStructures = (()=>{
    return{
        linkList: function(){
            var root = createNode(null);
            
            return{
                insert: insert,
                delete: deleteNode,
                root: root
            }
            
            function insert(num){
                var currentNode = this.root;
                if(!currentNode.key){
                    currentNode.key = num;
                }else{
                    var newNode = createNode(num);
                    while(true){
                        if(!currentNode.next){
                            currentNode.next = newNode;
                            newNode.prev = currentNode;
                            return;
                        }else{
                            currentNode = currentNode.next;
                        }
                    }
                }
            }
            
            function deleteNode(num){
                var nodeToDelete = find(num,this);
                if(nodeToDelete){
                    var prevNode = nodeToDelete.prev;
                    var nextNode = nodeToDelete.next;
                    prevNode.next = nextNode;
                    nextNode.prev = prevNode;
                    return true;
                }
                return false;
            }
            
            function find(num,ref){
                var currentNode = ref.root;
                while(true){
                    if(currentNode.key != num){
                        currentNode = currentNode.next;
                        if(!currentNode) return false;
                    }else{
                        return currentNode;
                    }
                }
            }
            
            function createNode(num){
                return{
                    key: num,
                    next: null,
                    prev: null
                }
            }
            
        },
        
        stacks: function(){
            var stack = [];
            
            return {
                push: push,
                peek: peek,
                isEmpty: isEmpty,
                pop: pop,
                stack: stack
            }
            
            function isEmpty(){
                return !this.stack.length;
            }
            
            function push(val){
                this.stack.unshift(val);// unshifts adds to the front of the arr
            }
            
            function pop(){
                return this.stack.shift();// removes the first element from the arr
            }
            
            function peek(){
                return this.stack[0];
            }
        },
        
        queue: function(){
          var queue = [];
          return {
              enqueue: enqueue,
              dequeue: dequeue,
              isEmpty: isEmpty,
              peek: peek,
              queue: queue
          }
          
          function isEmpty(){
                return !this.stack.length;
            }
          
          function enqueue(num){
              this.queue.push(num);// Adds to the back of the array
          }
          
          function peek(){
              return this.queue[0];
          }
          
          function dequeue(){
              return this.queue.shift();
          }
          
        },
        
        hashTable: function(){
            var hashTable = [];
            var size = 0;
            return {
                init: init,
                insert: insert,
                search: search,
                deleteNum: deleteNum, 
                hashTable: hashTable
            }
            
            function insert(num){
                var hashTable = this.hashTable;
                var pos = hash(num);
                var newNode = createNode(num);
                if(!hashTable[pos]){
                    hashTable[pos] = newNode;
                }else{
                    var currentNode = hashTable[pos];
                    while(true){
                        if(!currentNode.next){
                            currentNode.next = newNode;
                            return;
                        }else{
                            currentNode = currentNode.next;
                        }
                    }
                }
            }
            
            function search(num){
                var hashTable = this.hashTable;
                var pos = hash(num);
                if(emptySlot(num,this)) return false;
                
                if(hashTable[pos].key === num){
                    return hashTable[pos];
                }else{
                    var currentNode = hashTable[pos];
                    while(true){
                        if(currentNode.key === num){
                            return currentNode;
                        }else{
                            if(currentNode.next){
                                currentNode = currentNode.next;
                            }else{
                                return false;
                            }
                        }
                    }
                }
            }
            
            function deleteNum(num){
                var hashTable = this.hashTable;
                var pos = hash(num);
                if(emptySlot(num,this)) return false;
                
                var currentNode = hashTable[pos];
                var parentNode = null;
                while(true){
                    if(currentNode.key === num){
                        if(!parentNode){
                            hashTable[pos] = currentNode.next;
                        }else{
                            parentNode.next = currentNode.next;
                        }
                        return true;
                    }
                    parentNode = currentNode;
                    currentNode = currentNode.next;
                }
            }
            
            function emptySlot(num,ref){
                return !ref.hashTable[hash(num)];
            }
            
            function init(num){
                size = num || 5;
            }
            
            function hash(num){
                return num % size;
            }
            
            function createNode(num){
                return {
                    key: num,
                    next: null
                }
            }
            
        },
        
        trees: function(){
            var root = null;
            return {
                insert: insert,
                search: search,
                deleteNode: deleteNode,
                root: root
            }
            
            function insert(num){
                let _self = this;
                var newNode = createNode(num);
                if(!_self.root){
                    _self.root = newNode;
                    return;
                }else{
                    var currentNode = _self.root;
                    while(true){
                        if(num > currentNode.key){
                            if(currentNode.right){
                                currentNode = currentNode.right;
                            }else{
                                currentNode.right = newNode;
                                return;
                            }
                        }else if(num < currentNode.key){
                            if(currentNode.left){
                                currentNode = currentNode.left;
                            }else{
                                currentNode.left = newNode;
                                return;
                            }
                        }
                    }
                }
            }
            
            function search(num){
                let _self = this;
                if(!_self.root) return false;
                
                var currentNode = _self.root;
                while(true){
                    if(!currentNode) return false;
                    if(num > currentNode.key){
                        currentNode = currentNode.right;
                    }else if( num < currentNode.key){
                        currentNode = currentNode.left;
                    }else{
                        return currentNode;
                    }
                }
            }
            
            function deleteNode(num){
                let _self = this;
                if(!_self.root) return false;
                if(_self.search(num)){
                    removeNode(_self.root,num);
                }else{
                    return false;
                }
            }
            
            function removeNode(node,num){
                if(!node){
                    return node;
                }else if(num > node.key){
                    node.right = removeNode(node.right,num);
                }else if(num < node.key){
                    node.left = removeNode(node.left,num);
                }else{
                    if(!node.left && !node.right){
                        // No children
                        node = null;
                    }else if((!node.left && node.right) || (!node.right && node.left)){
                        // Only one children
                        if(!node.left){
                            node = node.right;
                        }else if(!node.right){
                            node = node.left;
                        }
                    }else{
                        // Two children
                        var minNode = findMin(node.right);
                        node.key = minNode.key;
                        node.right = removeNode(node.right,minNode.key);
                    }
                }
                return node;
            }
            
            function findMin(node){
                if(node.left){
                    return findMin(node.left);
                }else{
                    return node;
                }
            }
            
            function createNode(num){
                return {
                    key: num,
                    left: null,
                    right: null
                }
            }
        },
        populateStructures: function(){
            var linkList = LinkListIntro(this);
            var stack = StackIntro(this);
            var queue = QueueIntro(this);
            var hashTable = HashTableIntro(this);
            var tree = TreeIntro(this);
        
            console.log('Add Items');
            this.data.randNumbers.forEach((num)=>{
                printAndInsert(linkList,num);
            });
            
            console.log('Delete Item');
            printAndDelete(linkList,5687);
            console.log('LinkList end ')
            
            console.log('Push to stack');
            this.data.randNumbers.forEach((num)=>{
                stack.push(num);
            });
            console.log(stack.stack);
            
            console.log('Pop from stack');
            console.log(stack.peek());
            stack.pop();
            console.log(stack.stack)
            
            console.log('End of stack');
            
            console.log('Add To Queue');
            this.data.randNumbers.forEach((num)=>{
                queue.enqueue(num);
            });
            console.log(queue.queue);
            
            console.log('Remove from queue');
            console.log(queue.peek());
            queue.dequeue();
            console.log(queue);
            
            console.log('End of Queue');
            
            console.log('Add to HashTable');
            this.data.randNumbers.forEach((num)=>{
                hashTable.insert(num);
            });
            console.log(hashTable.hashTable);
            
            console.log('Search HashTable');
            console.log(hashTable.search(214));
            console.log(hashTable.search(999999));
            
            console.log('Delete Item from hashTable');
            hashTable.deleteNum(1123);
            console.log(hashTable.hashTable);
            
            
            console.log('Insert into Tree');
            this.data.randNumbers.forEach((num)=>{
                tree.insert(num);
            });
            console.log(tree.root);
            
            console.log('Find In tree');
            console.log(897868,tree.search(897868));
            console.log(34666, tree.search(34666));
            console.log(120, tree.search(120));
            
            console.log('Delete From tree');
            console.log(214,tree.deleteNode(214));
            console.log(tree.root);
            
            
            
            
            
            
            function printAndInsert(structure,val){
                structure.insert(val);
                console.log(val,structure.root);
            }
            
            function printAndDelete(structure,val){
                structure.delete(val);
                console.log(val,structure.root);
            }
            
            function LinkListIntro(ref){
                console.log('Linked List');
                var linkList = ref.linkList();
                console.log('Empty List');
                console.log(linkList.root);
                return linkList;
            }
            
            function StackIntro(ref){
                console.log('Stack AKA LIFO');
                var stack = ref.stacks();
                console.log('Empty Stack');
                console.log(stack.stack);
                return stack;
            }
            
            function QueueIntro(ref){
                console.log('Queue AKA FIFO');
                var queue = ref.queue();
                console.log('Empty Queue');
                console.log(queue.queue);
                return queue;
            }
            
            function HashTableIntro(ref){
                console.log('Hash Table');
                var hashTable = ref.hashTable();
                hashTable.init(7);
                console.log('Empty Hash Table');
                console.log(hashTable.hashTable);
                return hashTable;
            }
            
            function TreeIntro(ref){
                console.log('Binary Tree');
                var tree = ref.trees();
                console.log('Empty Tree');
                console.log(tree.root);
                return tree;
            }
        },
        
        data: dummyData
    }
})();

var sortingAndSearch = (()=>{
    return {
        data: dummyData,
        
        binarySearch: (num)=>{
            
        },
        
        bubbleSort: function(arr){
            var tempArr = arr.slice();
            console.log(tempArr.length);
            for(var a = 0; a < tempArr.length; a++){
                for(var b = 0; b < tempArr.length; b++){
                    if(tempArr[a] < tempArr[b]){
                        this.swap(tempArr,a,b);
                    } 
                }
            }
            return tempArr;
        },
        
        quickSort: function(arr){
            
        },
        
        insertionSort: function(arr){
            var tempArr = arr.slice();
            for(var a =1; a < tempArr.length; a++){
                var key = tempArr[a];
                var b = a -1;
                while(b >= 0 && key < tempArr[a]){
                    tempArr[b + 1] = tempArr[b];
                    b--;
                }
                tempArr[b + 1] = key;
            }
        },
        
        selectionSort: function(arr){
            
        },
        
        mergeSort: function(arr){
            var tempArr = arr.slice();
            recursiveSplit(tempArr);
            
            function recursiveSplit(arr){
                if(arr.length < 2) return;
                var midPoint = Math.floor(arr.length/2);
                var leftArr =arr.filter((num,index)=> index < midPoint);
                var rightArr = arr.filter((num,index)=> index >= midPoint);
                merge(arr,leftArr,rightArr);
            }
            
            function merge(origArr,leftArr,rightArr){
                var leftArrLen = leftArr.length;
                var rightArrLen = rightArr.length;
                var li = 0;
                var ri = 0;
                var oi =0;
                
                while(li < leftArrLen && ri < rightArrLen){
                    if(leftArr[li] < rightArr[ri]){
                        origArr[oi] = leftArr[li];
                        li++;
                    }else{
                        origArr[oi] = rightArr[ri];
                        ri++;
                    }
                    oi++;
                }
                
                while(li< leftArrLen){
                    origArr[oi] = leftArr[li];
                    oi++;
                    li++;
                }
                
                while(ri < rightArrLen){
                    origArr[oi] = rightArr[ri];
                    oi++;
                    ri++;
                }
                
            }
        },
        swap: (arr,posA,posB)=>{
            var tempSpot = arr[posA];
            arr[posA] = arr[posB];
            arr[posB] = tempSpot;
        },
        
        displaySort: function(){
            var data = this.data.randNumbers;
            console.log('Data');
            console.log(data);
            
            console.log('BubbleSort');
            console.log(this.bubbleSort(data));
            
        }
    }
})();

var problems = ()=>{
    
    return {
        minimumStack: ()=>{
            /*
                Find minimum returns the smallest element in the stack
            */
            console.log('minimumStack');
            var data = this.dataStructures.data.randNumbers;
            var stack1 = this.dataStructures.stacks();
            var stack2 = this.dataStructures.stacks();
            
            data.forEach((num)=>{
                if(!stack2.peek()){
                    stack1.push(num);
                    stack2.push(num);
                }else if(num < stack2.peek()){
                    stack1.push(num);
                    removeAndAdd(stack2,num);
                }else{
                    stack1.push(num);
                }
            });
            
            
            function removeAndAdd(stack,val){
                stack.pop();
                stack.push(val);
            }
            
            console.log(stack1.stack);
            console.log(stack2.stack);
            
        },
        
        targetSum: ()=>{
            /*
                Given an integer x and an unsorted array of integers,
                make an algorithim that will determine if whether 2 of the 
                numbers add up to x
            */
            console.log('Target Sum');
            var data = this.dataStructures.data.randNumbers;
            var targetSum = 697; // true;
            // var targetSum = 7813412; // false
            var set = new Set();
            
            for(var a = 0; a <data.length; a++){
                if(set.has(data[a])){
                   return true;
                }
               set.add(targetSum - data[a]);
            }
            return false;
        },
        
        queueUsingAStack: ()=>{
            /*
                Create a queue using a stack;
                Stack is LIFO 
                Queue is FIFI 
            */
            /*
                My ideas is to push it into a stack,
                then pop that stack into another stack
                Now that second stack is basically the queue; 
            */
            
            console.log('queue Using Stack');
            var data = this.dataStructures.data.randNumbers;
            var stack1 = this.dataStructures.stacks();
            var stack2 = this.dataStructures.stacks();
            console.log('Data');
            console.log(data);
            
            console.log('Enqueue');
            data.forEach((num)=>{
               enqueue(num); 
            });
            console.log(stack1.stack);
            
            
            console.log('Dequeue');
            dequeue();
            console.log(stack2.stack);
            
            function enqueue(num){
                while(!stack2.isEmpty()){
                    stack1.push(stack2.pop());
                }
                stack1.push(num);
            }
            
            function dequeue(){
                while(!stack1.isEmpty()){
                    stack2.push(stack1.pop());
                }
                stack2.pop();
            }
        
            
        },
        
        detectNumbersOccuringMultipleTimes: ()=>{
            /*
                determines how many times a number occurs
            */
            console.log('Detect Numbers Occuring multiple Times');
            var data = dummyData.numbersOccurringMultipleTimes;
            var hashMap = {};
            
            
            data.forEach((num)=>{
               if(!hashMap[num]) {
                   hashMap[num] = 1;
               }else{
                   hashMap[num]++;
               }
            });
            
            var greatest = 0;
            var val = 0;
            console.log(hashMap);
            Object.keys(hashMap).forEach((num)=>{
                if(hashMap[num] > greatest){
                    greatest = hashMap[num];
                    val = num;
                }
            });
            
            return val;
        }
    }
}