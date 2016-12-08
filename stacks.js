var Stack = function() {
    console.log('stacks');
    console.log('FIFO');
    return {
        stack: [],
        peek: function() {
            return this.stack[0];
        },

        pop: function() {
            return this.stack.shift();
        },

        push: function(num) {
            this.stack.unshift(num);
        },
        isEmpty: function(){
            return this.stack.length === 0;
        }
    }
}
