
function translate(actualWord) {
    word = actualWord.toLowerCase();
    let vowels = ["a","e","i","o","u"];
  
    if(vowels.indexOf(word[0]) > -1) {
        return word + "way";
      } else {
        for (var i=0; i < word.length; i++) {
              if (vowels.includes(word[i])) {
                let firstConsonants = word.slice(0,i);
                let remainingWord = word.slice(i, word.length);
              return remainingWord + firstConsonants + "ay";
            }
        }
      }
  }
  
  module.exports = {translate};