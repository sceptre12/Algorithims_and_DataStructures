(function() {
    var data = [12, 5323, 123, 245, 234234, 2342, 36564, 154];
    console.log(data);

    function binarySearch(number, arr) {
        var min = 0;
        var max = arr.length - 1;
        var midPoint = Math.floor(max / 2);

        while (true) {
            if (number < arr[midPoint]) {
                max = midPoint;
                midPoint = Math.floor(max / 2);
            }
            else if (number > arr[midPoint]) {
                min = midPoint;
                midPoint = max - Math.floor((max - min) / 2);
            }
            else {
                return {
                    index: midPoint,
                    num: arr[midPoint]
                }
            }
        }
    }

    /**
     O(n^2) Worst and average case
    */

    // function bubbleSort(arr){
    //     var tempArr = arr.slice();
    //     for(var a = 0 ; a < tempArr.length; a++){
    //         for(var b = 0; b < tempArr.length; b++){
    //             if(tempArr[a] > tempArr[b]){
    //                 var temp = tempArr[a];
    //                 tempArr[a] = tempArr[b];
    //                 tempArr[b] = temp;
    //             }
    //         }
    //     }
    //     return tempArr;
    // }

    // console.log('Bubble Sort');
    // console.log(bubbleSort(data));

    // console.log('BINARY SEARCH');
    // console.log(binarySearch(245,bubbleSort(data)))

    // Worst Case O(n^2) 
    // Best case performance is O(n)
    // Average Case Performance is O(n^2)
    // Stable sort
    
    function insertionSort(arr) {
        var tempArr = arr.slice();
        for (var a = 1; a < tempArr.length; a++) {
            var key = tempArr[a];
            var b = a - 1;
            while(b>=0 && key < tempArr[b]){
                tempArr[b + 1] = tempArr[b];
                b--;
            }
            tempArr[b + 1] = key;
        }
        return tempArr;
    }
    

    console.log('Insertion Sort');
    console.log(insertionSort(data));

    // function selectionSort(arr){
    //     var tempArr = arr.slice();
    //     for (var a = 0; a < tempArr.length; a++){
    //         var smallest = a;
    //         // Looks for the smallest element in the array
    //         for(var b = a + 1; b < tempArr.length; b++){
    //             if(tempArr[smallest] > tempArr[b]){
    //                 smallest = b;
    //             }
    //         }
    //         // Swap the current index with the smallest item
    //         var smallestItem = tempArr[smallest];
    //         tempArr[smallest] = tempArr[a];
    //         tempArr[a] = smallestItem;

    //     }
    //     return tempArr;
    // }
    // console.log('Selction Sort');
    // console.log(selectionSort(data));

    // console.log('mergesort')
    // Not an inplace sorting algoritim
    // worst case running time of nLogn
    // o(n) space complexity

    // function mergeSort(tempData){
    //     var tempArr = tempData.slice(0);
    //     recursiveSplit(tempArr);
    //     return tempArr;

    //     function recursiveSplit(arr){
    //         if(arr.length < 2){
    //             return;
    //         }
    //         var splitIndex = Math.floor(arr.length/2);
    //         var leftArr = arr.filter(function(num,index){ return index < splitIndex;});
    //         var rightArr = arr.filter(function(num,index){ return index >= splitIndex});
    //         recursiveSplit(leftArr);
    //         recursiveSplit(rightArr);
    //         merge(arr,leftArr,rightArr);
    //     }

    //     function merge(origArr,leftArr,rightArr){
    //         var leftArrLength = leftArr.length;
    //         var rightArrLength = rightArr.length;
    //         var leftIndex = 0;
    //         var rightIndex = 0;
    //         var origArrIndex = 0;

    //         while(leftIndex < leftArrLength && rightIndex < rightArrLength){
    //             if(leftArr[leftIndex] < rightArr[rightIndex]){
    //                 origArr[origArrIndex] = leftArr[leftIndex];
    //                 leftIndex++;
    //             }else{
    //                 origArr[origArrIndex] = rightArr[rightIndex];
    //                 rightIndex++;
    //             }
    //             origArrIndex++;
    //         }
    //         while(leftIndex < leftArrLength){
    //             origArr[origArrIndex] = leftArr[leftIndex];
    //             origArrIndex++;
    //             leftIndex++;
    //         }
    //         while(rightIndex < rightArrLength){
    //             origArr[origArrIndex] = rightArr[rightIndex];
    //             origArrIndex++;
    //             rightIndex++;
    //         }
    //     }
    // }

    function mergeSort(dataArr) {
        var tempArr = dataArr.slice();
        recursiveSplit(tempArr);
        return tempArr;

        function recursiveSplit(arr) {
            if (arr.length < 2) {
                return;
            }
            var splitIndex = Math.floor(arr.length / 2);
            var leftArr = arr.filter(function(num, index) {
                return index < splitIndex
            });
            var rightArr = arr.filter(function(num, index) {
                return index >= splitIndex
            });
            recursiveSplit(leftArr);
            recursiveSplit(rightArr);
            merge(arr, leftArr, rightArr);
        }

        function merge(origArr, leftArr, rightArr) {
            var leftArrLen = leftArr.length;
            var rightArrLen = rightArr.length;
            var leftIndex = 0;
            var rightIndex = 0;
            var origIndex = 0;
            while (leftIndex < leftArrLen && rightIndex < rightArrLen) {
                if (leftArr[leftIndex] < rightArr[rightIndex]) {
                    origArr[origIndex] = leftArr[leftIndex];
                    leftIndex++;
                }
                else {
                    origArr[origIndex] = rightArr[rightIndex];
                    rightIndex++;
                }
                origIndex++;
            }
            while (leftIndex < leftArrLen) {
                origArr[origIndex] = leftArr[leftIndex];
                origIndex++;
                leftIndex++;
            }
            while (rightIndex < rightArrLen) {
                origArr[origIndex] = rightArr[rightIndex];
                origIndex++;
                rightIndex++;
            }
        }
    }
    console.log('Merge Sort')
    console.log(mergeSort(data));
    
    console.log('Binary Search');
    // console.log(binarySearch(88,mergeSort(data)));

    // console.log('quicksort')
    function quicksort(tempData) {
        var tempArr = tempData.slice(0);
        sort(tempArr, 0, tempArr.length - 1);
        return tempArr;

        function sort(origArr, startIndex, lastIndex) {
            if (startIndex >= lastIndex) {
                return;
            }
            var pivotIndex = pivot(origArr, startIndex, lastIndex);
            sort(origArr, startIndex, pivotIndex - 1);
            sort(origArr, pivotIndex + 1, lastIndex);
        }

        function pivot(origArr, startIndex, lastIndex) {
            var pointer = 0;
            var pivotNum = origArr[lastIndex];
            for (var a = 0; a < lastIndex; a++) {
                if (origArr[a] <= pivotNum) {
                    var temp = origArr[a];
                    origArr[a] = origArr[pointer];
                    origArr[pointer] = temp;
                    pointer++;
                }
            }
            var temp = origArr[pointer];
            origArr[pointer] = origArr[lastIndex];
            origArr[lastIndex] = temp;
            return pointer;
        }
    }
})();
