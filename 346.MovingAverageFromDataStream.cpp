class MovingAverage {

private:
    queue<int> myq;
    int limitSize;
    int sum = 0;

public:
    /** Initialize your data structure here. */

    MovingAverage(int size) {
        limitSize = size;
    }

    double next(int val) {
        int curSize = myq.size();
        if (curSize < limitSize)
        {
            myq.push(val);
            sum = sum + val;
        }
        else
        {
            sum = sum - myq.front();
            myq.pop();
            myq.push(val);
            sum = sum + val;
        }

        return (double)sum/myq.size();
    }
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * MovingAverage obj = new MovingAverage(size);
 * double param_1 = obj.next(val);
 */
