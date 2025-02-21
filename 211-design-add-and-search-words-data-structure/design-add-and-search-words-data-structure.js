// Define the Node with an end-of-word marker
var Node = function() {
    this.children = {};
    this.isWord = false; // Marks the end of a word
};

// Define WordDictionary using prototype methods
var WordDictionary = function() {
    this.trie = new Node(); // Renamed for clarity
};

// Adds a word into the trie.
WordDictionary.prototype.addWord = function(word) {
    let node = this.trie;
    for (let ch of word) {
        if (!node.children.hasOwnProperty(ch)) {
            node.children[ch] = new Node();
        }
        node = node.children[ch];
    }
    // Mark the end of the word
    node.isWord = true;
};

// Searches for the word in the trie. A word could contain the '.' character to represent any one letter.
WordDictionary.prototype.search = function(word) {
    const searchInNode = (word, node) => {
        for (let i = 0; i < word.length; i++) {
            const ch = word[i];
            if (ch === '.') {
                // Try all possible children for a wildcard
                for (let child in node.children) {
                    if (searchInNode(word.slice(i + 1), node.children[child])) {
                        return true;
                    }
                }
                return false;
            } else {
                if (!node.children.hasOwnProperty(ch)) {
                    return false;
                }
                node = node.children[ch];
            }
        }
        // Check that we've reached a node that marks the end of a word
        return node.isWord;
    };

    return searchInNode(word, this.trie);
};

// Example usage:
// let wordDictionary = new WordDictionary();
// wordDictionary.addWord("bad");
// wordDictionary.addWord("dad");
// wordDictionary.addWord("mad");
// console.log(wordDictionary.search("pad")); // false
// console.log(wordDictionary.search("bad")); // true
// console.log(wordDictionary.search(".ad")); // true
// console.log(wordDictionary.search("b..")); // true
