/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var twoSumResult = function(nums) {
    var result = {};
    var tmp;
    for(var i=0; i<nums.length; i++) {
        for(var j=i+1; j<nums.length; j++) {
            tmp = nums[i] + nums[j];
            result[tmp] = result[tmp] || [];
            result[tmp].push([nums[i],nums[j]]);
        }
    }
    return result;
}

var diff = function(i,j,k) {
    if (i === j) {
        return false;
    }
    if (k === j) {
        return false;
    }
    if (i === k) {
        return false;
    }

    return true;
}

var threeSum = function(nums) {
    nums = nums.sort(cmp);
    var ans = [];
    var twoSum = twoSumResult(nums);
    console.log(twoSum);
    for (var i=0; i<nums.length; i++) {
        for (var j in twoSum) {
            console.log(j);
            if ((parseInt(j) + nums[i]) === 0) {
                for (var k=0; k<twoSum[j].length; k++) {
                    ans.push([twoSum[j][k][0], twoSum[j][k][1], nums[i]])
                }
            }
        }
    }
    console.log(ans);
    return ans;
};

function cmp(a,b) {
    if (a<b) {
        return -1;
    }
    else {
        return 1;
    }
}
