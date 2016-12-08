/**
 * Breadth first Traversal
 * Time complexity can be expressed as O(|V| + |E|)
 * |V| - the number of vertices 
 * |E| - the number of edges in the graph
 * 
 * Depth first Traversal 
 * Time complexity can be expressed as O(V^2)
 * */


var Graph = function(){
    var graphSetup = [{v: 0, e: 1},{v: 0, e: 2},{v: 1, e: 2},{v: 2, e: 0},{v: 2, e: 3},{v: 3, e: 3} ];
    return {
        numOfVertex: 0,
        adjacencyList: [],
        constructor: function (num){
            this.numOfVertex = num;
            createEmptyNodes(num,this);
        },
        addEdge: function(vertex,edge){
            if(vertex >= this.numOfVertex || edge >= this.numOfVertex) return false;
            insert(vertex,edge,this);
            return true;
        },
        bft: bft,
        dft: dft,
        setup: function(){
            var _self = this;
            _self.constructor(4);
            graphSetup.forEach(function(node){
                _self.addEdge(node.v,node.e);
            });
            console.log(_self.adjacencyList);
            _self.bft(2);
            _self.dft(2);
        }
        
    }
    
    function dft(num){
        if(!this.adjacencyList.length) return;
        var visited = [];
        dftUtil(num,visited,this);
    }
    
    function dftUtil(num, visted, _this){
        visted[num] = true;
        console.log(num);
        var adjacentVertex = _this.adjacencyList[num];
        while(true){
            if(!visted[adjacentVertex.key]){
                dftUtil(num,visted,_this);
            }
            if(!adjacentVertex.next) return;
            adjacentVertex = adjacentVertex.next;
        }
    }
    
    function bft(num){
        if(num >= this.numOfVertex ) return;
        var visited = [];
        var queue = new Queue();
        
        // Mark all vertices as false ie not visited
        populateVisitedArr(visited,this);
        
        // Mark the current node as visited and then enqueue it
        visited[num] = true;
        queue.enqueue(num);
        
        while(!queue.isEmpty()){
            // Dequeue a Vertex from queue and print it 
            num = queue.dequeue();
            console.log(num);
            
            /** 
             * Get all of the adjacent Vertices of the dequeued vertex num
             * If adjacentVertex has not been visted, then mark it visited and enqueue it
             * */
             var adjacentVertex = this.adjacencyList[num];
             while(true){
                 if(!visited[adjacentVertex.key]){
                     visited[adjacentVertex.key] = true;
                     queue.enqueue(adjacentVertex.key);
                 }
                 
                 if(adjacentVertex.next){
                     adjacentVertex = adjacentVertex.next;
                 }else{
                     break;
                 }
             }
        }
    }
    
    function insert(vertex,edge,_this){
        if(!_this.adjacencyList[vertex].key && _this.adjacencyList[vertex].key !== 0){
            _this.adjacencyList[vertex].key = edge;
        }else{
            var parentNode = _this.adjacencyList[vertex];
            while(true){
                if(!parentNode.next){
                    parentNode.next = createNode(edge);
                    return;
                }
                parentNode = parentNode.next;
            }
        }
    }
    function populateVisitedArr (arr, _this){
        var a = 0;
        while(a < _this.numOfVertex){
            arr.push(false);
            a++;
        }
    }
    
    function createEmptyNodes (num,_this){
        var a =0;
        while(a < num){
            _this.adjacencyList.push(createNode(null));
            a++;
        }
    }
    
    function createNode(key){
        return {
            key: key,
            next: null
        }
    }    
}
