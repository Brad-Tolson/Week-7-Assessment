function addToZero(arr) {
    const set = new Set(arr);
    for (let num of set) {
      if (set.has(-num)) {
        return true;
      }
    }
    return false;
  }
  
console.log(addToZero([]))
console.log(addToZero([1]))
console.log(addToZero([1, 2, 3]))
console.log(addToZero([1, 2, 3, -2]))
  
// Runtime: O(n)

function hasUniqueChars(word) {
    const set = new Set(word);
    return set.size === word.length;
  }
  
console.log(hasUniqueChars("Monday"))
console.log(hasUniqueChars("Moonday"))
  
// Runtime: O(n)

function isPangram(sentence) {
    const set = new Set(sentence.toLowerCase().replace(/[^a-z]/g, ''));
    return set.size === 26;
  }
  
console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
console.log(isPangram("I like cats, but not mice"))
  
// Runtime: O(n)

function findLongestWord(words) {
    let longest = 0;
    for (let word of words) {
      if (word.length > longest) {
        longest = word.length;
      }
    }
    return longest;
  }
  
console.log(findLongestWord(["hi", "hello"]))
  
// Runtime: O(n)

// Sum Zero - Space Complexity: O(n)
// The function creates a Set containing the unique values of the input array. In the worst case, the size of the set can be n, the size of the input array.

// Unique Characters - Space Complexity: O(n)
// The function creates a Set containing the unique characters of the input word. In the worst case, the size of the set can be n, the length of the input word.

// Pangram Sentence - Space Complexity: O(1)
// The function creates a Set containing the unique lowercase characters of the input sentence. The size of the set is always 26, since it's checking for the presence of all letters in the alphabet.

// Longest Word - Space Complexity: O(1)
// The function only keeps track of the longest word seen so far, and doesn't store any additional data based on the input size.