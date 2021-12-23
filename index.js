function isPalindrome(word) {
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    const endIndex = word.length - 1 - startIndex;
      if (word[startIndex] !== word[endIndex]) {
      return false;
      }
  }
  return true
}

/* 
  Add your pseudocode here
  To slim down memory usage, we want to solely iterate using a for loop, rather than iterate & create new arrays.
  We will be utilizing index [0] and index value.length - 1, and try to meet in the middle, at which point the loop ends.
  
  r a c e c a r
  0 1 2 3 4 5 6
  i           j
  -----><------
  for (let i = 0; i < word.length / 2; i++;) //loop thru i
  j = word.length - 1 - i //j begins moving backwards toward mid-point where the loop terminates
  if i does not === j, return false, else return true
  keep in mind that i and j represent index position.  At index 0, i = 0

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
