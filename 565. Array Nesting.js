/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
    if (nums === null) throw new Error("input error");
    if (nums.length === 0) return 0;

    var visited = [], result = -Infinity;

    for (var i=0; i<nums.length; i++) {
        visited = [];
        DFS(nums, visited, i, 0);
    }

    return result;


    function DFS(nums, visited, i, lengthS) {
        if (visited.indexOf(i) !== -1) { // visited
            result = Math.max(result, lengthS);
            return;
        }
        else { // not visited
            visited.push(i);
            DFS(nums, visited, nums[i], lengthS+1);
            visited.pop();
        }
    }
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
    if (nums === null) throw new Error("input error");
    if (nums.length === 0) return 0;

    var visited = {}, result = -Infinity;

    for (var i=0; i<nums.length; i++) {
        visited = {};
        DFS(nums, visited, i, 0);
    }
    
    return result;


    function DFS(nums, visited, i, lengthS) {
        if (visited[i] !== undefined) { // visited
            result = Math.max(result, lengthS);
            return;
        }
        else { // not visited
            visited[i] = true;;
            DFS(nums, visited, nums[i], lengthS+1);
            delete visited[i];
        }
    }
};
