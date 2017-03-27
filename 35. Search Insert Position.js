function searchInsert (nums, target) {
    var start = 0,
        numsLen = nums.length,
        end = numsLen - 1;
        //mid = start + (end - start) / 2;

    if (nums === null || nums.length === 0) return -1;

    while ((start + 1) < end) {
        var mid = parseInt(start + (end - start) / 2);
        if (target === nums[mid]) {
            return mid;
        }
        else if (target < nums[mid]) {
            end = mid;
            //console.log(end);
        }
        else {
            start = mid;
            //console.log(start);
        }
    }

    if (target <= nums[start]) {
        return start;
    }

    if (target <= nums[end]) { //ok
        return end;
    }

    if (target > nums[end]) { //ok
        return end + 1;
    }

}
