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
        var tmp = twoSum(-nums[i], i+1, nums.length-1);
        // console.log(tmp);
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
