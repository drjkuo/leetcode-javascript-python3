/**
 * Initialize your data structure here.
 */
//var hash;

var RandomizedSet = function() {
    this.hash = {};
    this.arr = [];
    return null;
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (!this.hash.hasOwnProperty(val)) {
        this.hash[val] = this.arr.length;
        this.arr.push(val);
        return true;
    }
    else {
        return false;
    }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.hash.hasOwnProperty(val)) {
        var index = this.hash[val];
        var last = this.arr.pop();
        // this.arr.splice(index, 1, last); // update arr
        if (index < this.arr.length) {
            this.arr[index] = last;
            this.hash[last] = index; // update hash
        }
        delete this.hash[val];
        return true;
    }
    return false;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    if (this.arr.length === 0) return null;
    var index = Math.floor(Math.random() * this.arr.length);
    return this.arr[index];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
