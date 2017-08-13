/**
 * Initialize your data structure here.
 */
//var hash;

var RandomizedSet = function() {
    this.hash = {};
    return null;
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (!this.hash.hasOwnProperty(val)) {
        this.hash[val] = 1;
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
    if (this.hash[val] !== undefined) {
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
    if (Object.keys(this.hash).length === 0) return null;
    var keys = Object.keys(this.hash);
    var index = Math.floor(keys.length * Math.random());
    console.log(index);
    return this.hash[keys[index]];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
