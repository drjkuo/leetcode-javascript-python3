class MinStack {

    Stack<Integer> smain;
    Stack<Integer> smin;
    /** initialize your data structure here. */
    public MinStack() {
        smain=new Stack<>();
        smin=new Stack<>();
    }

    public void push(int x) {
        smain.push(x);
        if (smin.size() == 0) {
            smin.push(x);
        }
        else if (x < smin.peek()) {
            smin.push(x);
        }
        else {
            smin.push(smin.peek());
        }
        return;
    }

    public void pop() {
        if (smain.size() > 0) {
            smain.pop();
            smin.pop();
            return;
        }
    }

    public int top() {
        return smain.peek();
    }

    public int getMin() {
        return smin.peek();
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(x);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */
