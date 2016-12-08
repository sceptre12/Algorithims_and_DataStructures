var Queue = function() {
    console.log('queue');
    console.log('LIFO');
    return {
        queue: [],
        enqueue: function(num) {
            this.queue.push(num);
        },
        dequeue: function() {
            return this.queue.shift();
        },
        peek: function() {
            if (this.queue.length) {
                return this.queue[0];
            }
            return false;
        },
        isEmpty: function(){
            return this.queue.length === 0;
        }
    }
}
