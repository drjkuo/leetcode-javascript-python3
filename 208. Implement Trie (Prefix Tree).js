/**
 * Initialize your data structure here.
 */
var TrieNode = function(key) {
    return {
        key: key,
        isWord: false,
        children: {}
    }
};


var Trie = function() {
    this.root = TrieNode();
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    // if (word.length === 0) return;

    var prev = this.root;
    var one;

    for(var i=0; i<word.length; i++) {
        one = word[i];
        var tmpNode = TrieNode(one);
        if (!prev.children[one]) {
            prev.children[one] = tmpNode;
        }
        prev = prev.children[one];
    }

    prev.isWord = true;
    return;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    var cur = this.root;
    var one;
    for (var i=0; i<word.length; i++) {
        one = word[i];
        if (!cur.children[one]) return false;
        cur = cur.children[one];
    }

    return cur.isWord;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    var cur = this.root;
    var one;
    for(var i=0; i<prefix.length; i++) {
        one = prefix[i];
        if (!cur.children[one]) return false;
        cur = cur.children[one];
    }

    return true;

};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

 /**
 * Initialize your data structure here.
 */
var TrieNode = function(key) {
    return {
        isWord: false,
        hash: {}
    }
};

var Trie = function() {
    this.root = TrieNode();
};
/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    var tmp = this.root;
    for(var i=0; i<word.length; i++) {
        if (!tmp.hash[word[i]]) tmp.hash[word[i]]= TrieNode(word[i]);
        tmp = tmp.hash[word[i]];
    }
    tmp.isWord = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    var cur = this.root;
    for(var i=0; i<word.length; i++) {
        // cur = cur.hash[word[i]];
        if (!cur.hash[word[i]]) return false;
        cur = cur.hash[word[i]];
    }
    return cur.isWord;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    var cur = this.root;
    for(var i=0; i<prefix.length; i++) {
        if (!cur.hash[prefix[i]]) return false;
        cur = cur.hash[prefix[i]];
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
