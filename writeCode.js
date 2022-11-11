let addToZero = (arr) => {
  let isThereZero = false;
  for (i = 0; i < arr.length; i++) {
    for (j = arr.length - 1; j >= 0; j--) {
      if (arr[i] + arr[j] === 0) {
        isThereZero = true;
      }
    }
  }
  return isThereZero;
};

addToZero([]);
// -> False

addToZero([1]);
// -> False

addToZero([1, 2, 3]);
// -> False

addToZero([1, 2, 3, -2]);
// -> True

// O(n^2)

hasUniqueCharacters = (givenWord) => {
  for (i = 0; i < givenWord.length; i++) {
    if (
      givenWord.indexOf(givenWord[i]) !== givenWord.lastIndexOf(givenWord[i])
    ) {
      return false;
    }
  }
  return true;
};

console.log(hasUniqueCharacters("Monday"));
// -> True

console.log(hasUniqueCharacters("Moonday"));
// -> False

// O(n)^2

function isPangram(string) {
  let strArr = string.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let i = 0; i < alphabet.length; i++) {
    if (strArr.indexOf(alphabet[i]) < 0) {
      return false;
    }
  }
  return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// -> True

console.log(isPangram("I like cats, but not mice"));
// -> False

//o(n)^2

function findLongestWord(arr) {

    var longest = 0;
    var word = null;
    for (var i = 0; i < arr.length; i++) {
        if (longest < arr[i].length) {
            longest = arr[i].length;
            word = arr[i];
        }
    }
    return word;
}
  
  console.log(findLongestWord(["hi", "hello", "goodbye", "me"]));

  //O(n)