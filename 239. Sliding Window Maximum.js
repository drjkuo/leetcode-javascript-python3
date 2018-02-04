class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        int[] result = new int[nums.length-k+1];
        PriorityQueue<Integer> pq = new PriorityQueue<Integer>(Collections.reverseOrder());
        if (nums.length == 0 || nums == null) return new int[0];

        for (int i=0; i<nums.length; i++) {
            pq.add(nums[i]);
            if (pq.size() >= k) {
                result[i-k+1] = pq.peek();
                pq.remove(nums[i-k+1]);
            }
        }

        return result;

    }
}
