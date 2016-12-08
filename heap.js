/**
 * Formulas to know 
 * to find the child the operation is 
 * ~ 2(currentIndexofInterest) + 1 = (LeftChild)
 * ~ 2(currentIndexofInterest) + 2 = (rightChild)
 * to find the parent of interest
 * ~ Math.floor(((currentIndexofInterest) -1) / 2) = Parent
 * 
 * 
 * RUN TIME COMPLEXITY
 * Average - Theta(n Log(n))
 * Best - Omega(n Log(n))
 * Heap sort Algorithim
 * - In place sorting algorithim
 * - Only a constant number of elements are stored outside of the 
 * input array at any time 
 * - makes an efficent priority queue 
 * (incomplete)
 **/
var heapOperations = function(type) {
    return {
        type: type,
        insert: insert,
        heapSort: heapSort,
        removeItem: removeItem,
        removeFirst: removeFirst,
        heap: []
    }

    function heapSort(arr) {
        var tempArr = arr.slice();
        if (tempArr.length) {
            /**
             * We're going to loop through the array backwards and heapify it
             * */
            var parentIndex = tempArr.length - 3;
            for (var i = 0; i < tempArr.length - 3; i++) {
                maxHeapify(tempArr,type,i);
            }
            console.log(tempArr);
        }
    }

    function removeItem(num) {
        var _heap = this.heap;

        var itemIndex = _heap.indexOf(num);
        // If the num does not exist inside of the arr
        if (itemIndex < 0) return false;
        //gets the last index and puts it's content inside of 
        // the item being deleted slot. 
        var lastIndex = _heap.length - 1;
        _heap[itemIndex] = _heap[lastIndex]; // places the last item in the num being deleted index
        _heap.splice(lastIndex, 1); // removes the last index

        maxHeapify(_heap, type, itemIndex);
        return true;
    }

    function removeFirst() {
        var _heap = this.heap;
        var lastIndex = _heap.length - 1;
        _heap[0] = _heap[lastIndex];
        _heap.splice(lastIndex, 1);

        maxHeapify(_heap, type, 0);
    }


    function insert(num, arr) {
        var _heap = arr || this.heap;
        if (_heap.indexOf(num) < 0) {
            _heap.push(num);
            buildHeap(_heap, type);
        }
    }

    /**
     * Checks to make sure that the last item is not
     * greater than its parent. In the event it is greater
     * than it's parent the last item is switched with its parent.
     * This keeps repeating till it is no longer greater than
     * its parent.
     * 
     */
    function buildHeap(arr, type) {
        // gets the last index
        var lastIndex = arr.length - 1;
        // While the last index is greater than 0
        while (lastIndex > 0) {
            // get the parent index
            var parentIndex = Math.floor((lastIndex - 1) / 2);
            // get the items inside the parent
            // and the last index 
            var lastItem = arr[lastIndex];
            var parentItem = arr[parentIndex];

            if (type === 'maxHeap') {
                // checks to see if the lastItem is greater
                // than the parentItem  if so then do a swap
                if (lastItem > parentItem) {
                    // replaces item at parentIndex with
                    // last item and do the same for the
                    // lastIndex
                    arr[parentIndex] = lastItem;
                    arr[lastIndex] = parentItem;

                    // Keeps track of the lastItem that was
                    // inserted by changing the lastIndex 
                    // to be the parentIndex which is 
                    // currently where the lastItem is located
                    lastIndex = parentIndex;
                }
                else {
                    break;
                }
            }
            else if (type === 'minHeap') {
                // checks to see if the lastItem is less
                // than the parentItem  if so then do a swap
                if (lastItem < parentItem) {
                    // replaces item at parentIndex with
                    // last item and do the same for the
                    // lastIndex
                    arr[parentIndex] = lastItem;
                    arr[lastIndex] = parentItem;

                    // Keeps track of the lastItem that was
                    // inserted by changing the lastIndex 
                    // to be the parentIndex which is 
                    // currently where the lastItem is located
                    lastIndex = parentIndex;
                }
                else {
                    break;
                }
            }

        }
    }



    function maxHeapify(arr, type, parentIndex) {
        while (parentIndex < arr.length) {
            // get the childIndexes of the parentIndex
            var leftChildIndex = 2 * (parentIndex) + 1;
            var rightChildIndex = 2 * (parentIndex) + 2;
            // gets the contents from the left, Right, and Parent index's
            var leftChildItem = arr[leftChildIndex];
            var rightChildItem = arr[rightChildIndex];
            var parentItem = arr[parentIndex];



            if (type === 'maxHeap') {
                /**
                 * If the left child is greater than the right child 
                 * then swap the item in the left child with the parent 
                 * If the right child is greater than the left child
                 * then swap the item in the right child with the parent
                 * */
                if (leftChildItem > rightChildItem && leftChildItem > parentItem) {
                    arr[parentIndex] = leftChildItem;
                    arr[leftChildIndex] = parentItem;
                    parentIndex = leftChildIndex;
                }
                else if (rightChildItem > leftChildItem && rightChildItem > parentItem) {
                    arr[parentIndex] = rightChildItem;
                    arr[rightChildIndex] = parentItem;
                    parentIndex = rightChildIndex;
                }
                else {
                    break;
                }
            }
            else if (type === 'minHeap') {
                /**
                 * If the left child is less than the right child 
                 * then swap the item in the left child with the parent 
                 * If the right child is less than the left child
                 * then swap the item in the right child with the parent
                 * */
                if (leftChildItem < rightChildItem && leftChildItem < parentItem) {
                    arr[parentIndex] = leftChildItem;
                    arr[leftChildIndex] = parentItem;
                    parentIndex = leftChildIndex;
                }
                else if (rightChildItem < leftChildItem && rightChildItem < parentItem) {
                    arr[parentIndex] = rightChildItem;
                    arr[rightChildIndex] = parentItem;
                    parentIndex = rightChildIndex;
                }
                else {
                    break;
                }
            }

        }
    }
}