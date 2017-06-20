/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    q1 = [];
    q2 = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    q1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (q2.length === 0) {
        if (q1.length === 0) {
            return null;
        }
        else {
            while (q1.length > 0) {
                var temp = q1.pop();
                q2.push(temp);
            }
            return q2.pop();
        }
    }
    else {
        return q2.pop();
    }
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (q2.length === 0) {
        if (q1.length === 0) {
            return null;
        }
        else {
            while (q1.length > 0) {
                var temp = q1.pop();
                q2.push(temp);
            }
            return q2[q2.length-1];
        }
    }
    else {
        return q2[q2.length-1];
    }
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if (q1.length === 0 && q2.length === 0) {
        return true;
    }
    else {
        return false;
    }

};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
