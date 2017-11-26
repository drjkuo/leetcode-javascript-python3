// The deletion distance between two strings is the minimum sum of ASCII values of characters that you need to delete in the two strings in order to have the same string. The deletion distance between cat and at is 99, because you can just delete the first character of cat and the ASCII value of 'c' is 99. The deletion distance between cat and bat is 98 + 99, because you need to delete the first character of both words. Of course, the deletion distance between two strings can't be greater than the sum of their total ASCII values, because you can always just delete both of the strings entirely.Implement an efficient function to find the deletion distance between two strings.You can refer to the Wikipedia article on the algorithm for edit distance if you want to. The algorithm there is not quite the same as the algorithm required here, but it's similar.

"at", "cat" => 99
"boat", "got" => 298
"thought", "sloughs" => 674


// var str1 = "at",
//     str2 = "cat";

// var str1 = "boat",
//     str2 = "got";

var str1 = "thought",
    str2 = "sloughs";

var l1 = str1.length,
    l2 = str2.length;

var dp = [];

while (dp.length !== l1+1) {
   dp.push([]);
}

// console.log(dp);

for (var i=0; i<=l1; i++) {
   for (var j=0; j<=l2; j++) {
      if (j===0 && i>0) {
         dp[i][j] = dp[i-1][j] + str1[i-1].charCodeAt(0);
      }
      else if (i===0 && j>0) {
         dp[i][j] = dp[i][j-1] + str2[j-1].charCodeAt(0);
      }
      else {
         dp[i][j] = 0;
      }
   }
}

console.log(dp);

var cost;
for (var i=1; i<=l1; i++) {
   for (var j=1; j<=l2; j++) {
      cost = str1[i-1].charCodeAt(0) + str2[j-1].charCodeAt(0);
      if (str1[i-1]===str2[j-1]) cost = 0;
      dp[i][j] = Math.min(dp[i-1][j]+str1[i-1].charCodeAt(0), dp[i][j-1]+str2[j-1].charCodeAt(0), dp[i-1][j-1]+cost);
   }
}

console.log(dp);

console.log(dp[l1][l2]);
