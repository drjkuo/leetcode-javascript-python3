/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    //
    for (var i=0; i<n; i++) {
        nums1.unshift(0);
    }

    console.log(nums1);

    var i=0, j=0, cur=0;
    while (i < m && j < n) {
        if (nums1[i+n] < nums2[j]) {
            nums1[cur] = nums1[i+n];
            cur++;
            i++;
        }
        else {
            nums1[cur] = nums2[j];
            cur++;
            j++;
        }
        console.log(nums1);
    }

    // if nums1 has nothing left
    while (j < n) {
        nums1[cur] = nums2[j];
        cur++;
        j++;
        console.log(nums1);
    }

    while (i < m) {
        nums1[cur] = nums1[i+n];
        cur++;
        i++;
        console.log(nums1);
    }

    return;


};


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if (nums1 instanceof Array === false || nums2 instanceof Array === false) throw new Error("input error");

    var i=m-1, j=n-1, p=n+m-1;
    while (i>=0 || j>=0) {
        if (i>=0 && j>=0) {
            if (nums1[i] > nums2[j]) {
                nums1[p] = nums1[i];
                i -= 1;
                p -= 1;
            }
            else {
                nums1[p] = nums2[j];
                j -= 1;
                p -= 1;
            }
            continue;
        }

        if (j>=0) {
            nums1[p] = nums2[j];
            j -= 1;
            p -= 1;
            continue;
        }

        if (i>=0) {
            nums1[p] = nums1[i];
            i -= 1;
            p -= 1;
            continue;
        }
    }

    return;

};
