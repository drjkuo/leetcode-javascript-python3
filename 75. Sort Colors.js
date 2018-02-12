var sortColors = function(nums) {
    var hash = {}, i, j;
    for (i=0; i<nums.length; i++) {
        hash[nums[i]] = hash[nums[i]] || 0;
        hash[nums[i]] += 1;
    }

    var result = [];

    for (i=0; i<3; i++) {
        for (j=0; j<hash[i]; j++)
            result.push(i);
    }

    return result;
};
