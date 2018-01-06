/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.smain = [];
    this.smin = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    var smain = this.smain;
    var smin = this.smin;
    smain.push(x);
    if (smin.length === 0) {
        smin.push(x);
    }
    else if (x < smin[smin.length-1]) {
        smin.push(x);
    }
    else {
        smin.push(smin[smin.length-1]);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    var smain = this.smain;
    var smin = this.smin;
    smain.pop();
    smin.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    var smain = this.smain;
    // var smin = this.smin;
    return smain[smain.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
        // var smain = this.smain;
    var smin = this.smin;
    return smin[smin.length-1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// class MinStack {
//
//     Stack<Integer> smain;
//     Stack<Integer> smin;
//     /** initialize your data structure here. */
//     public MinStack() {
//         smain=new Stack<>();
//         smin=new Stack<>();
//     }
//
//     public void push(int x) {
//         smain.push(x);
//         if (smin.size() == 0) {
//             smin.push(x);
//         }
//         else if (x < smin.peek()) {
//             smin.push(x);
//         }
//         else {
//             smin.push(smin.peek());
//         }
//         return;
//     }
//
//     public void pop() {
//         if (smain.size() > 0) {
//             smain.pop();
//             smin.pop();
//             return;
//         }
//     }
//
//     public int top() {
//         return smain.peek();
//     }
//
//     public int getMin() {
//         return smin.peek();
//     }
// }
//
// /**
//  * Your MinStack object will be instantiated and called as such:
//  * MinStack obj = new MinStack();
//  * obj.push(x);
//  * obj.pop();
//  * int param_3 = obj.top();
//  * int param_4 = obj.getMin();
//  */
