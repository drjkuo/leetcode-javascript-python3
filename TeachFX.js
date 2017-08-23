// Installed npm packages: jquery underscore request express
// jade shelljs passport http sys lodash async mocha chai sinon
// sinon-chai moment connect validator restify ejs ws co when
// helmet wrench brain mustache should backbone forever debug jsdom

// output = the maximum depth
// '(())' 2
// '()()' 1

// "(((()())))" 4

// "(" create level
// ")" reduce level

function calculateMaxDepth(input) {
    // (())
    var maxDepth = 0;
    var curDepth = 0;
    for(var i=0; i<input.length; i++) {
        if (input[i] === "(") {
            curDepth += 1;
            maxDepth = (curDepth > maxDepth)? curDepth : maxDepth;
        }
        else {
            curDepth -= 1;
        }
    }
    return maxDepth;
}
funct

console.log(calculateMaxDepth('(((()())))'));


/*
'(())' 2

input[0] : (
curDepth=1
maxDepth=1

input[1] : (
curDepth=2
maxDepth=2

input[2] : )
curDepth=1
maxDepth=2

input[3] : )
curDepth=0
maxDepth=2


*/





// input = maximum depth, incomplete string (even length)
// 2, '(**)'  ==> '(())'
// 2, '(***)*'  ==> '(()())'
// 2, '(***(*  ==> '(())()'

// output one possible combination of parantheses

// * may be "(" or ")"
// n = number of "*"
// brutal -- O(2^n)




// 2, '(**)'  ==> '(())'
/*
first *: (
((*)
    second *: (

        ((() illegal
    second *: )
        (()) correct

first *: )
()*)
    second *: (

        ()() not correct
    second *: )
        ())) illegal -- # of right > # of left


*/



//input = ['(', '*','*',')'], 2
//output = ['(', '(',')',')']

function makeComplete(input, max_depth) {
    var ans = [];
    var newAns = [];
    helper(input, 0, 0, ans);

    for (var i=0; i<ans.length; i++) {
        if (calculateMaxDepth(ans[i]) == max_depth) {
            newAns.push(ans[i]);
        }
    }
    return newAns;
}

// k = stars
// n= len(string)
// O(2^k*n)

// Jim's edit
// a = # of answers
// The complexity of makeComplete() starting from line 101 shall be O(2^k + a*n) rather than O(2^k*n) 
// because the for loop runs ans.length times and is not coupled to helper()



// '(****)', 1

function helper(tmp, indexToBeSet, cnt, ans) { // ['(', '*','*',')'] , 1
    // illegal -- # of right > # of left
    if (cnt < 0) return;

    if (indexToBeSet === tmp.length ) {
        if (cnt === 0) {
            ans.push(tmp);
        }
        else {
            return;
        }
    }

    if (tmp[indexToBeSet] === "(" ){
        helper(tmp, indexToBeSet++, cnt++, ans);
    }

    if (tmp[indexToBeSet] === ")" ) {
        helper(tmp, indexToBeSet++, cnt--, ans);
    }


    if (tmp[indexToBeSet] === "*") {
        var copy = tmp.slice();

        // make left
        copy[indexToBeSet] == "(";
        cnt += 1;
        indexToBeSet += 1;
        helper(copy, indexToBeSet, cnt, ans);

        //make right
        copy[indexToBeSet] == ")";
        cnt -= 1;
        helper(copy, indexToBeSet, cnt, ans);
    }

}
