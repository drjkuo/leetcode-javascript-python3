class Solution {
    public int p[];
    public int count;

    public int find(int x) {
        if (x != p[x]) p[x] = find(p[x]);
        return p[x];
    }

    public void union(int x, int y) {
        int rootx = p[x];
        int rooty = p[y];
        if (rootx != rooty) {
            p[y] = rootx;
            count--;
        }
    }

    public int findCircleNum(int[][] M) {

        int rowNum = M.length;;
        count = rowNum;
        p = new int[rowNum];

        for(int i=0; i<rowNum; i++) p[i] = i;

        for(int i=0; i<rowNum; i++) {
            for(int j=i+1; j<rowNum; j++) {
                System.out.print(i+""+j+"\n");
                if (M[i][j] == 1) {
                    union(i, j);
                }
            }
        }

        return count;
    }

}
