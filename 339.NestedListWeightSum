/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */

var depthSum = function(nestedList) {
    return helper(nestedList, 1);
};

var helper = function(list, depth) 
{ 
    let sum = 0;
    let ll = list.length;
    for (let i=0; i<ll; i=i+1)
    {
        if (list[i].isInteger() === true) { sum = sum + depth*list[i].getInteger(); }
        else { sum = sum + helper(list[i].getList(), (depth+1)); }
    }
    return sum;
}


