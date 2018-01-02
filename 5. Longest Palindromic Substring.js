/**
 * @param {string} s
 * @return {string}
 */



var longestPalindrome = function(s) {
    var ans="";

    if(s === null || s.length === 0){
        return "";
    }


    for (var i = 0; i < s.length; i++) {
        onePalindrome (s, i, i);
        onePalindrome (s, i, i+1);
        // console.log('single',ans);
    }

    return ans;

    function onePalindrome (s, start, end) {
        while (start >=0 && end < s.length && s[start] === s[end]) {
            start--;
            end++;
        }

        var cur = s.substring(start+1, end);

        if (cur.length > ans.length) {
            ans = cur.slice();
        }

    }
};

/*
Java sol

class Solution {
    public int gstart, gend, maxlen = 0;

    public String longestPalindrome(String s) {
        for (int i=0; i<s.length(); i++) {
            System.out.print(s.charAt(i)+" ");
            checkPalindrome(s, i, i);
            checkPalindrome(s, i, i+1);
        }
        return s.substring(gstart+1, gend);

    }

    public void checkPalindrome (String s, int start, int end) {
        while (start >= 0 && end < s.length() && s.charAt(start) == s.charAt(end)) {
            start--;
            end++;
        }

        int len = end - start - 1;
        if (len > maxlen) {
            gstart = start;
            gend = end;
            maxlen = len;
        }
    }
}



*/
