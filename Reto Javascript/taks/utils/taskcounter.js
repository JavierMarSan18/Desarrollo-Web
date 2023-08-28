var taskCount = (function() {
    var count = 0; 
    return {
        increment: function() {
            count++;
        },
        get: function() {
            return count;
        },
        incrementAndGet: function(){
            this.increment();
            return count;
        }
    };
})();