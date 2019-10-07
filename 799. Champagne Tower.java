class Solution {

    public long getSumValue(long i) {
        return i * (i + 1) / 2;
    }

    public double champagneTower(int poured, int query_row, int query_glass) {
        if (poured == 0) {
            return 0;
        }
        long start = 0, end = 1000000;
        long level = 0;
        while (start + 1 < end) {
            // System.out.println("start="+start);
            // System.out.println("end="+end);
            long mid = (start + end) / 2;
            // System.out.println("mid="+mid);

            long midSumValue = getSumValue(mid);
            long prevSumValue = getSumValue(mid-1);

            // System.out.println("midSumValue="+midSumValue);
            // System.out.println("prevSumValue="+prevSumValue);

            if (prevSumValue < poured && poured < midSumValue) {
                level = mid - 1;
                break;
            }

            if (poured > midSumValue) {
                start = mid;
            } else {
                end = mid;
            }
        }
        if (level == 0) {
            if (getSumValue(end) < poured) {
                level = end;
            } else {
                level = start;
            }
        }
        System.out.println("level"+level);

        // if (query_row < level) {
        //     return 1.0;
        // }

        long diff = poured - getSumValue(level);
        System.out.println("diff"+diff);

        long nextLevel = level+2;
        long fraction = nextLevel*2-2;
        System.out.println("fraction"+fraction);


        if (query_row <= level) return 1;
        else if (query_row == level+1) {
           if (query_glass == 0 || query_glass == level) return (double)diff/(double)fraction;
           else return ((double)diff/(double)fraction)*2;
        }
        else return 0;


    }
}
