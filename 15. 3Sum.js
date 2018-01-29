/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
    // sort in ascending order
    nums.sort(function(a,b) {
       return a-b;
    });

    var ans = [];
    // shift 1st number, and check whether its right-hand numbers produces a corresponding two sum
    for (var i=0; i<nums.length-2; i++) {
        // add this to speed up!!!
        if (nums[i] === nums[i-1]) continue;

        var tmp = twoSum(-nums[i], i+1, nums.length-1);
        var tmpLen = tmp.length;
        if (tmpLen === 0) continue;
        for (var j=0; j<tmpLen; j++) {
            ans.push([ nums[i], nums[tmp[j][0]], nums[tmp[j][1]] ]);
        }
    }

    return removeDup(ans);


    function removeDup(arr) {
        var hash = {};
        for (var i=0; i<arr.length; i++) {
            hash[arr[i]] = arr[i];
        }

        var ans2 = [];
        for (var i in hash) {
            ans2.push(hash[i]);
        }
        return ans2;
    }

    // two sum helper func
    function twoSum (target, start, end) {
        var ans3 = [];
        while (start !== end) {
            if ((nums[start]+nums[end]) > target) {
                end--;
            }
            else if ((nums[start]+nums[end]) < target) {
                start++;
            }
            else {
                ans3.push([start, end]);
                start++;
            }
        }
        return ans3;
    }
};


// FAILED
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort();
    if (nums.length < 3) return [];
    var i, j, result = new Set(), helper;
    for (i=0; i<nums.length-2; i++) {
        helper = twoSum((i+1), -nums[i], nums);
        // console.log(helper);
        for (j=0; j<helper.length; j++) {
            result.add(JSON.stringify([nums[i], helper[j][0], helper[j][1]]));
        }
    }

    var output = [];
    for (i of result) {
        output.push(JSON.parse(i));
    }
    return output;
};

function twoSum (start, sum, nums) {
    var hash = {}, i, twoSumResult = [];
    for (i=start; i<nums.length; i++) {
        if (hash[sum-nums[i]]) twoSumResult.push([nums[i], sum-nums[i]].sort());
        else hash[nums[i]] = i;
    }
    return twoSumResult;
}
